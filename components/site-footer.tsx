import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { BrandMark } from "@/components/brand-mark"
import { WhatsAppIcon } from "@/components/icons"
import { tours } from "@/lib/data/tours"
import { safaris } from "@/lib/data/safaris"
import { site, whatsappUrl } from "@/lib/site"

const company = [
  { href: "/packages", label: "Holiday packages" },
  { href: "/transfers", label: "Airport & hotel pickups" },
  { href: "/about", label: "About SMICK" },
  { href: "/contact", label: "Contact us" },
]

export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-28 bg-navy-deep text-white">
      <div className="container-x">
        <div className="relative -top-16 flex flex-col items-start justify-between gap-6 overflow-hidden rounded-[2rem] bg-white p-7 text-navy shadow-[0_30px_60px_-30px_rgba(6,26,53,0.6)] sm:p-10 md:flex-row md:items-center">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -bottom-24 size-72 rounded-full bg-gradient-to-br from-sun/40 to-ocean/30 blur-3xl"
          />
          <div className="relative">
            <p className="font-script text-2xl text-sun-ink">Karibu Zanzibar!</p>
            <h2 className="mt-1 text-2xl font-bold sm:text-3xl">Plan your trip in one WhatsApp chat</h2>
            <p className="mt-2 max-w-xl text-muted-ink">
              Tell us your dates and what you love — we&apos;ll reply with a plan, prices and pickup times.
            </p>
          </div>
          <a
            href={whatsappUrl(`Hi ${site.shortName}! I'd like to plan a trip.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sun relative shrink-0"
          >
            <WhatsAppIcon className="size-5" /> Chat on WhatsApp
          </a>
        </div>

        <div className="-mt-4 grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <BrandMark light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              Local tour agency in Stone Town offering Zanzibar excursions, pickups, holiday packages and Tanzania
              safaris.
            </p>
            <p className="mt-4 font-script text-xl text-sun">{site.tagline}</p>
          </div>

          <FooterList title="Zanzibar tours" links={tours.slice(0, 7).map((t) => ({ href: `/zanzibar-tours/${t.slug}`, label: t.title }))} />
          <FooterList
            title="Safaris"
            links={safaris.filter((s) => s.featured).map((s) => ({ href: `/safaris/${s.slug}`, label: s.title }))}
          />

          <div>
            <FooterList title="Company" links={company} />
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li>
                <a href={site.phoneHref} className="flex items-center gap-2.5 hover:text-sun">
                  <Phone className="size-4 text-sun" aria-hidden /> {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 break-all hover:text-sun">
                  <Mail className="size-4 shrink-0 text-sun" aria-hidden /> {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="size-4 text-sun" aria-hidden /> {site.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="flex flex-wrap gap-x-5 gap-y-1">
            <Link href="/privacy" className="hover:text-white">
              Privacy policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Booking terms
            </Link>
            <span>{site.regions}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterList({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold tracking-wider text-white uppercase">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm text-white/70">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="transition-colors hover:text-sun">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
