# SMICK Tours & Safaris — Project Documentation

## Project Overview
Website for **SMICK Tours & Safaris**, a tour agency in Stone Town, Zanzibar, Tanzania (rebuilt in Oct 2026 on top of an older "Velocity Zanzibar" codebase — none of that branding should remain). Services: Zanzibar excursions, airport/hotel pickups, holiday packages and Tanzania safaris (Ngorongoro, Serengeti, Mikumi, etc.).

## Tech Stack
- Next.js 16.4 (App Router) + React 19.3, TypeScript 5.9
- Tailwind CSS v4 (tokens + `@utility` classes in `app/globals.css`)
- Radix Dialog (`components/ui/dialog.tsx`), lucide-react icons
- Static export (`output: "export"`, `images.unoptimized`) — no server features, no API routes
- pnpm. `next lint` no longer exists in Next 16; use `pnpm typecheck`
- Next 16 docs ship in `node_modules/next/dist/docs/` — check them before using unfamiliar APIs

## Brand
- Colours (sampled from the logo): navy `#0b2a52` (`navy`, `navy-deep`), sunset amber `#f7a21b` (`sun`, `sun-deep`, `sun-soft`), ocean `#1a9ad6` (`ocean`, `ocean-soft`), sand `#fbf7f0`
- Amber buttons use navy text (`btn-sun`) — white on amber fails contrast
- Fonts: Outfit (`font-display`, headings), Plus Jakarta Sans (body), Kaushan Script (`font-script`, small accents only — echoes the logo tagline)
- Logo artwork has dark lettering, so it always sits on a white circular badge (`components/brand-mark.tsx`)
- Design references: "Dolan" travel landing page (inset rounded hero, giant destination word, floating plan bar, blob badges, tabbed package cards) and a safari app UI (amber icon tiles, rounded image cards)

## Contact (single source: `lib/site.ts`)
- Phone / WhatsApp: +255 673 494 502 — `wa.me/255673494502` (public short link `wa.me/smickwaves`)
- Email: Iconibreezy@icloud.com
- Location: Stone Town, Zanzibar · Domain: https://www.smickzanzibar.com (apex 308-redirects to www)

## Structure
```
app/page.tsx                      Home
app/zanzibar-tours/[slug]         15 excursions   (data: lib/data/tours.ts)
app/safaris/[slug]                10 safaris      (data: lib/data/safaris.ts)
app/packages/[slug]               8 packages      (data: lib/data/packages.ts)
app/transfers, about, contact     static pages    (transfer prices: lib/data/transfers.ts)
app/sitemap.ts, robots.ts         generated from the data files
components/experience-detail.tsx  shared detail template for every tour/safari/package
components/booking-dialog.tsx     booking form → opens WhatsApp with a prefilled message
public/img/                       optimised WebP images (hero/, tours/, safari/, moments/, vehicles/, brand/)
assets/source/                    original logo + client WhatsApp photos (not deployed)
```

## Conventions
- Content changes go in `lib/data/*` — pages are generated from them. Omit `priceFrom` for "On request".
- Detail routes use `generateStaticParams` + `dynamicParams = false` (required for static export).
- Bookings never collect payment; every form hands off to WhatsApp (or mailto).
- `public/img/moments/*` are the client's real photos — use them for authenticity; don't invent reviews, ratings or awards.
- New images: convert to WebP (≤1200px cards, ≤2400px heroes) before adding to `public/img/`.

## Commands
```bash
pnpm dev        # dev server
pnpm typecheck  # next typegen + tsc
pnpm build      # static export to ./out
```
