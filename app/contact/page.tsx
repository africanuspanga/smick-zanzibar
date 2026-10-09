import type { Metadata } from "next"
import { Mail, MapPin, Phone } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { Faq } from "@/components/faq"
import { WhatsAppIcon } from "@/components/icons"
import { PageHero } from "@/components/page-hero"
import { site, whatsappUrl } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${site.name} in Stone Town, Zanzibar. Call or WhatsApp ${site.phone} or email ${site.email}.`,
  alternates: { canonical: "/contact" },
}

const channels = [
  { icon: WhatsAppIcon, label: "WhatsApp", value: site.phone, href: whatsappUrl(`Hi ${site.shortName}!`), external: true },
  { icon: Phone, label: "Call us", value: site.phone, href: site.phoneHref },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Office", value: site.location },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/img/tours/sunset-dhow-3.webp"
        eyebrow="Get in touch"
        title="Let's plan your Zanzibar story"
        crumbs={[{ href: "/", label: "Home" }, { label: "Contact" }]}
      >
        <p>The fastest way to reach us is WhatsApp — we reply as quickly as we can.</p>
      </PageHero>

      <section className="container-x mt-16 grid gap-10 lg:grid-cols-[1fr_1.35fr]">
        <div className="space-y-4">
          {channels.map((c) => {
            const inner = (
              <>
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-sun text-navy-deep">
                  <c.icon className="size-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold tracking-wider text-muted-ink uppercase">{c.label}</span>
                  <span className="block font-display text-lg font-bold break-words text-navy">{c.value}</span>
                </span>
              </>
            )
            const cls = "flex items-center gap-4 rounded-3xl bg-white p-5 ring-1 ring-line"
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`${cls} card-lift`}
              >
                {inner}
              </a>
            ) : (
              <div key={c.label} className={cls}>
                {inner}
              </div>
            )
          })}
          <div className="overflow-hidden rounded-3xl ring-1 ring-line">
            <iframe
              title="Map of Stone Town, Zanzibar"
              src="https://www.google.com/maps?q=Stone+Town,+Zanzibar&z=14&output=embed"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-[0_30px_60px_-35px_rgba(11,42,82,0.45)] ring-1 ring-line sm:p-9">
          <h2 className="text-2xl font-bold sm:text-3xl">Send us a message</h2>
          <p className="mt-2 mb-7 text-muted-ink">Choose WhatsApp or email — your message is ready to send either way.</p>
          <ContactForm />
        </div>
      </section>

      <Faq className="mt-24" />
    </>
  )
}
