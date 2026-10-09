# SMICK Tours & Safaris — website

Marketing site for **SMICK Tours & Safaris**, a tour agency in Stone Town, Zanzibar: Zanzibar excursions, airport & hotel pickups, holiday packages and Tanzania safaris.

- Live domain: https://smickzanzibar.com
- Phone / WhatsApp: +255 673 494 502
- Email: Iconibreezy@icloud.com

## Stack

Next.js 16 (App Router, static export) · React 19 · TypeScript · Tailwind CSS v4 · Radix Dialog · lucide-react · pnpm

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm typecheck
pnpm build      # static site in ./out
```

## Editing content

All tours, safaris, packages and transfer prices live in typed data files — no page code needs to change:

| What | File |
| --- | --- |
| Contact details, nav | `lib/site.ts` |
| Zanzibar excursions | `lib/data/tours.ts` |
| Safaris | `lib/data/safaris.ts` |
| Holiday packages | `lib/data/packages.ts` |
| Transfer prices & fleet | `lib/data/transfers.ts` |

Adding an item to one of the arrays automatically creates its detail page, card, sitemap entry and footer link. Leave `priceFrom` out to show "On request".

Images are pre-optimised WebP files in `public/img/`. After adding a new image, run `python3 scripts/resize-images.py` to create its 384/640/1080px versions. Original client photos and the full-size logo are kept in `assets/source/` (not deployed).

See `DEPLOYMENT.md` for hosting and `docs/launch-checklist.md` for the pre-launch audit and the items still needing the client.
