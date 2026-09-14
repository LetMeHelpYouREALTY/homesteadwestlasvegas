import cloudflareImageIds from '@/lib/cloudflare-image-ids.json'
import { SITE_IMAGES, type SiteImageId } from '@/lib/image-catalog'
import { SITE_URL } from '@/lib/site-contact'

type CloudflareIdMap = Record<string, string>

const uploadedIds = cloudflareImageIds as CloudflareIdMap

function cloudflareHash(): string | undefined {
  const hash = process.env.NEXT_PUBLIC_CF_IMAGES_HASH?.trim()
  return hash || undefined
}

function customDomain(): string | undefined {
  const domain = process.env.NEXT_PUBLIC_CF_IMAGES_CUSTOM_DOMAIN?.trim()
  if (!domain) return undefined
  return domain.replace(/\/$/, '')
}

/**
 * Cloudflare-first image URL with git `/photos/...` backup.
 *
 * Delivery order:
 * 1. Cloudflare Images (`imagedelivery.net/{hash}/{id}/{variant}`) when hash + uploaded id exist
 * 2. Custom Cloudflare hostname (Images custom domain or R2 + Image Resizing)
 * 3. Git-hosted file on this origin (Vercel)
 *
 * Do not orange-cloud the Vercel apex. Serve media from imagedelivery.net or a
 * separate images subdomain (gray-cloud DNS for the Next.js site).
 */
export function mediaSrc(id: SiteImageId): string {
  const asset = SITE_IMAGES[id]
  const hash = cloudflareHash()
  const cfId = uploadedIds[id]
  const variant = process.env.NEXT_PUBLIC_CF_IMAGES_VARIANT?.trim() || 'public'

  if (hash && cfId) {
    return `https://imagedelivery.net/${hash}/${cfId}/${variant}`
  }

  const custom = customDomain()
  if (custom) {
    if (process.env.NEXT_PUBLIC_CF_IMAGE_RESIZING === '1') {
      return `${custom}/cdn-cgi/image/width=1920,format=auto,quality=80${asset.gitPath}`
    }
    return `${custom}${asset.gitPath}`
  }

  return asset.gitPath
}

export function mediaAbsoluteUrl(id: SiteImageId): string {
  const src = mediaSrc(id)
  if (src.startsWith('http')) return src
  return `${SITE_URL}${src}`
}

export function mediaAlt(id: SiteImageId): string {
  return SITE_IMAGES[id].alt
}

export function mediaDimensions(id: SiteImageId): { width: number; height: number } {
  const asset = SITE_IMAGES[id]
  return { width: asset.width, height: asset.height }
}
