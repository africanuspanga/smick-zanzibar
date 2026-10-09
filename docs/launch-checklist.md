# Pre-launch checklist — SMICK Tours & Safaris

**Project:** smickzanzibar.com  **Date:** 9 October 2026  **Checked by:** Claude (with Africanus Panga)

Audit of the static Next.js site against the pre-launch checklists (01–09). `[x]` done · `[ ]` needs the owner/client · `N/A` doesn't apply to a static site with no backend, accounts or payments.

## 01 · Launch essentials

- [x] Custom branded 404 page (`app/not-found.tsx`)
- [x] Privacy policy (`/privacy`) and booking terms (`/terms`) — **client should review the terms**, especially payment, deposit and cancellation wording
- [x] Thank-you page (`/thank-you`, noindex) shown after every form, usable as a conversion goal
- [x] Real contact details: +255 673 494 502, Iconibreezy@icloud.com, Stone Town
- [x] Cookie consent — banner only appears when analytics is enabled; analytics loads only after "Accept"
- [ ] Analytics: GA4 support built in (`NEXT_PUBLIC_GA_ID=G-… pnpm build`) — **needs a GA4 property ID**
- [x] Conversion events: `generate_lead` (form submits), `whatsapp_click`, `phone_click`, `email_click`
- [x] Favicon set: `favicon.ico`, 192px icon, 180px apple-touch-icon, web manifest (192/512)
- [x] Unique meta title + description on every page; 1200×630 Open Graph image
- [x] One clear CTA per page, CTA above the fold, sticky mobile "Book" bar on all tour/safari/package pages, floating WhatsApp button everywhere
- [x] Forms: required fields + native validation, success = thank-you page, input preserved on error
- N/A Loading/error state on submit — forms hand off to WhatsApp/email instantly; no network request
- N/A Spam protection — no server endpoint receives submissions (WhatsApp/email only)
- [ ] Submissions arrive — **send one real test enquiry on WhatsApp after launch**
- [x] HTTPS + bare-domain redirect in `public/.htaccess` — **enable SSL in cPanel first**
- [x] Mobile friendly (checked at 320, 375, 390 px); alt text on all content images (decorative ones use `alt=""`)
- [x] Colour contrast WCAG AA — added `ocean-ink` / `sun-ink` text colours; Lighthouse accessibility 100
- [x] No secrets in the frontend

## 02 · Polish & fixes

- [x] No horizontal scroll at 320 px on any page (scripted check of all page types)
- [x] Mobile menu opens/closes, closes on navigation and Escape, page behind is `inert` (focus stays in menu)
- [x] Touch targets ≥ 44 px for primary controls
- [x] No broken internal links or missing images (scripted crawl of the export)
- [x] Logo links home; phone uses `tel:`, email uses `mailto:`
- [x] No placeholder text (searched lorem/ipsum/TODO/example.com/etc.)
- [x] Dynamic copyright year
- [x] No console errors (Lighthouse best-practices 100)
- [ ] Test on real iPhone Safari and Firefox before launch

## 03 · SEO

- [x] No accidental `noindex` (only 404 and thank-you are noindex, intentionally)
- [x] `robots.txt` + `sitemap.xml` (42 URLs) generated from the data files
- [x] Canonical tag on every page
- [x] Exactly one `<h1>` per page; titles ≤ ~70 chars; descriptions ~120–160 chars
- [x] Clean slugs (`/zanzibar-tours/safari-blue`), internal links between related trips
- [x] Open Graph + Twitter cards
- [x] JSON-LD: `TravelAgency` (site-wide), `FAQPage` (home, contact), `BreadcrumbList` + `TouristTrip` with `Offer` (every trip)
- [ ] Google Search Console + Bing Webmaster: verify `smickzanzibar.com` and submit `/sitemap.xml`
- [ ] Google Business Profile for SMICK in Stone Town

## 04 · Security (static site)

- [x] No API keys or secrets in code; `.env*` git-ignored
- [x] Old `/admin` and `/admin-login` (hard-coded passwords) removed; repo pushed with clean history so the old passwords are not published
- [x] Security headers in `.htaccess`: HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- [x] Directory listing disabled (`Options -Indexes`)
- [x] Only `dangerouslySetInnerHTML` use is static JSON-LD, with `<` escaped
- N/A Auth, sessions, database, uploads, payments, rate limiting, AI usage — no backend

## 05 · Performance

- [x] Images: WebP, pre-generated 384/640/1080 px variants served via a custom `next/image` loader with `srcset`
- [x] Lazy loading for below-the-fold images and the map iframe; hero images prioritised
- [x] `next/font` (self-hosted, swap, subset)
- [x] Unused dependencies removed (48 → 7 runtime deps)
- [x] Long-term caching for hashed assets + compression in `.htaccess`
- [x] Lighthouse mobile (local): Home 90 · About 92 · Contact 93 · Safari Blue 87 performance; Accessibility, Best Practices and SEO 100 on all. CLS 0.
- [x] Fixed a carousel scroll-snap bug that stopped Chrome reporting LCP on the homepage
- N/A Database, API caching, pooling

## 06 · UX features

- [x] Accessible mobile menu, sticky header, skip-to-content link
- [x] Hover + focus-visible states; `prefers-reduced-motion` respected
- [x] Expandable FAQ (`<details>`); "Last updated" on policies
- [x] Floating WhatsApp button; UTM parameters captured and added to WhatsApp enquiries as "Ref: source / medium / campaign"
- N/A Dark mode, site search, password toggle, copy buttons

## 07 · UX laws (design review)

- [x] Short nav (7 items), one amber primary CTA style (Von Restorff), logo top-left → home (Jakob)
- [x] Grouped cards and price tables (proximity, common region); consistent card/button styles (similarity)
- [x] Short booking form with sensible defaults (2 adults, 0 children) — Tesler / Parkinson
- [x] Peak-end: friendly thank-you page with next steps

## 08 · AI & online visibility — needs the client

- [x] Website with About, Services, Contact, FAQ, schema markup, `llms.txt`
- [ ] Google Business Profile, Google Maps, Apple Business Connect, Bing Places — same name, phone and address everywhere
- [ ] TripAdvisor listing (most important for tour operators) and Google Reviews from past guests
- [ ] Instagram / Facebook / TikTok pages — send the handles so we can link them in the footer and schema `sameAs`

## 09 · Conversion

- [x] One CTA per page, above the fold, sticky on mobile
- [x] Thank-you page as conversion goal; UTM capture
- N/A Pricing plans, paywalls, checkout, cancellation flows
