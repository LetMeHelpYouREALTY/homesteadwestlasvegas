# Photography (`/public/photos`)

Git is the **backup source of truth**. Production delivery prefers Cloudflare Images when `NEXT_PUBLIC_CF_IMAGES_HASH` and `lib/cloudflare-image-ids.json` are set.

| Path | Use |
|------|-----|
| `photos/team/dr-jan-duffy-headshot.jpg` | Agent photo (JSON-LD + About) |
| `photos/sections/*.jpg` | Heading-matched section/hero photos |

Do not orange-cloud the Vercel apex. Point an `images.` hostname at Cloudflare Images or R2 if you want a custom CDN; keep homesteadwestlasvegas.com on Vercel (DNS only).

Upload: `CLOUDFLARE_ACCOUNT_ID=… CLOUDFLARE_API_TOKEN=… node scripts/upload-cloudflare-images.mjs`
