import type { Metadata, Viewport } from "next"
import { Kaushan_Script, Outfit, Plus_Jakarta_Sans } from "next/font/google"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import Analytics from "@/components/analytics"
import { JsonLd } from "@/components/json-ld"
import { site } from "@/lib/site"
import "./globals.css"

const heading = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  variable: "--font-heading",
})

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body",
})

const accent = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-accent",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Zanzibar Tours, Excursions & Tanzania Safaris`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Zanzibar tours",
    "Zanzibar excursions",
    "Stone Town tour",
    "Prison Island",
    "Nakupenda sandbank",
    "Safari Blue",
    "Zanzibar caves",
    "dolphin tour Zanzibar",
    "Zanzibar airport transfer",
    "Tanzania safari",
    "Serengeti safari from Zanzibar",
    "Ngorongoro",
    "Mikumi day trip",
    "SMICK Tours",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Explore • Discover • Experience`,
    description: site.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: "#0b2a52",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: site.name,
  url: site.url,
  logo: `${site.url}/img/brand/smick-logo-512.png`,
  image: `${site.url}/og-image.jpg`,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Stone Town",
    addressRegion: "Zanzibar",
    addressCountry: "TZ",
  },
  areaServed: ["Zanzibar", "Tanzania"],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} ${accent.variable}`}>
      <body>
        <JsonLd data={jsonLd} />
        <a
          href="#main"
          className="fixed top-3 left-3 z-[60] -translate-y-24 rounded-full bg-navy px-5 py-3 font-semibold text-white transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  )
}
