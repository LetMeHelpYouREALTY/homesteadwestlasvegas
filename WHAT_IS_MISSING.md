# What's Missing

Lead capture is in place: `components/LeadForm.tsx` posts to `/api/leads/submit` and `lib/fub/client.ts` sends to Follow Up Boss when `FOLLOW_UP_BOSS_API_KEY` is set.

Still blocked without credentials:

- Cloudflare Images upload (`npm run upload:cf-images`) — git JPEGs in `public/photos/sections` are the backup until `CLOUDFLARE_ACCOUNT_ID` + `CLOUDFLARE_API_TOKEN` + `NEXT_PUBLIC_CF_IMAGES_HASH` are in Vercel.
- Live GBP review widgets (do not invent star counts).
- MLS server-side fetch (RealScout remains client-side).

Do not orange-cloud the Vercel hostname. Serve Cloudflare Images from `imagedelivery.net` or a separate `images.` host.
