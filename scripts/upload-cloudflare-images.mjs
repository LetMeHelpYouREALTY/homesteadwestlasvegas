#!/usr/bin/env node
/**
 * Upload git-backed JPEGs in public/photos/sections to Cloudflare Images.
 * Writes returned IDs to lib/cloudflare-image-ids.json so mediaSrc() can
 * prefer imagedelivery.net while git remains the backup.
 *
 * Required env:
 *   CLOUDFLARE_ACCOUNT_ID
 *   CLOUDFLARE_API_TOKEN   (Images:Edit)
 *
 * Optional:
 *   NEXT_PUBLIC_CF_IMAGES_HASH  (account hash printed after first upload)
 */
import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const ROOT = process.cwd()
const SECTIONS = path.join(ROOT, 'public/photos/sections')
const MAP_FILE = path.join(ROOT, 'lib/cloudflare-image-ids.json')

async function main() {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID
  const token = process.env.CLOUDFLARE_API_TOKEN
  if (!accountId || !token) {
    console.error('Set CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN, then re-run.')
    process.exit(1)
  }

  const existing = JSON.parse(await readFile(MAP_FILE, 'utf8'))
  const files = (await readdir(SECTIONS)).filter((f) => f.endsWith('.jpg'))
  const nextMap = { ...existing }

  for (const file of files) {
    const id = file.replace(/\.jpg$/i, '')
    if (nextMap[id]) {
      console.log(`skip ${id} (already mapped)`)
      continue
    }

    const form = new FormData()
    const bytes = await readFile(path.join(SECTIONS, file))
    form.set('file', new Blob([bytes], { type: 'image/jpeg' }), file)
    form.set('id', id)
    form.set('requireSignedURLs', 'false')
    form.set('metadata', JSON.stringify({ source: 'git', path: `/photos/sections/${file}` }))

    const res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}/images/v1`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: form,
    })
    const json = await res.json()
    if (!res.ok || !json.success) {
      console.error(`fail ${id}`, JSON.stringify(json.errors || json))
      continue
    }
    nextMap[id] = json.result.id
    console.log(`uploaded ${id} → ${json.result.id}`)
  }

  await writeFile(MAP_FILE, `${JSON.stringify(nextMap, null, 2)}\n`)
  console.log('Wrote', MAP_FILE)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
