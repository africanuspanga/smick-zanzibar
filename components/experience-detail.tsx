import Image from "next/image"
import { Check, Clock, Info, MapPin, Phone, Tag, Users, X } from "lucide-react"
import BookingDialog from "@/components/booking-dialog"
import { ExperienceCard } from "@/components/experience-card"
import { JsonLd } from "@/components/json-ld"
import { WhatsAppIcon } from "@/components/icons"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { formatPrice, hrefFor, related, type Experience } from "@/lib/data"
import { site, whatsappUrl } from "@/lib/site"
import { cn } from "@/lib/utils"

const sectionLabel: Record<Experience["kind"], { label: string; href: string }> = {
  tour: { label: "Zanzibar Tours", href: "/zanzibar-tours" },
  safari: { label: "Safaris", href: "/safaris" },
  package: { label: "Packages", href: "/packages" },
}

export function ExperienceDetail({ item }: { item: Experience }) {
  const parent = sectionLabel[item.kind]
  const facts = [
    { icon: Clock, label: "Duration", value: item.duration },
    { icon: Users, label: "Group", value: item.groupSize },
    { icon: MapPin, label: "Location", value: item.location },
    { icon: Tag, label: item.priceFrom === undefined ? "Price" : "From", value: formatPrice(item) },
  ]
  const photos = [item.image, ...(item.gallery ?? [])].slice(0, 4)
  const more = related(item)

  const url = `${site.url}${hrefFor(item)}`
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: parent.label, item: `${site.url}${parent.href}` },
          { "@type": "ListItem", position: 3, name: item.title, item: url },
        ],
      },
      {
        "@type": "TouristTrip",
        name: item.title,
        description: item.tagline,
        url,
        image: `${site.url}${item.image}`,
        touristType: item.category,
        provider: { "@type": "TravelAgency", name: site.name, url: site.url, telephone: site.phone },
        ...(item.priceFrom !== undefined && {
          offers: {
            "@type": "Offer",
            price: item.priceFrom,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url,
          },
        }),
      },
    ],
  }

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        image={item.image}
        eyebrow={item.category}
        title={item.title}
        crumbs={[{ href: "/", label: "Home" }, { href: parent.href, label: parent.label }, { label: item.title }]}
      >
        <p>{item.tagline}</p>
      </PageHero>

      <div className="container-x relative z-10 -mt-10">
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {facts.map((f) => (
            <li key={f.label} className="flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-[0_16px_40px_-20px_rgba(11,42,82,0.4)] ring-1 ring-line">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-sun text-navy-deep">
                <f.icon className="size-5" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] font-semibold tracking-wider text-muted-ink uppercase">{f.label}</span>
                <span className="block text-sm leading-snug font-semibold text-navy sm:text-base">{f.value}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="container-x mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="min-w-0 space-y-14">
          <BookingCard item={item} className="lg:hidden" />

          <section>
            <SectionHeading eyebrow="Overview" title="What to expect" />
            <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-ink/80">
              {item.overview.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </section>

          {photos.length > 1 && (
            <section
              aria-label="Photos"
              className={cn(
                "grid grid-cols-2 gap-3 sm:grid-rows-2",
                photos.length === 4 ? "sm:grid-cols-4" : "sm:grid-cols-3",
              )}
            >
              {photos.map((src, i) => (
                <div
                  key={src}
                  className={cn(
                    "relative overflow-hidden rounded-3xl",
                    i === 0 ? "col-span-2 aspect-[4/3] sm:row-span-2 sm:aspect-auto" : "aspect-square",
                    photos.length === 2 && i === 1 && "col-span-2 aspect-[4/3] sm:col-span-1 sm:row-span-2 sm:aspect-auto",
                    photos.length === 4 && i === 3 && "col-span-2 aspect-[2/1] sm:aspect-auto",
                  )}
                >
                  <Image src={src} alt={`${item.title} photo ${i + 1}`} fill sizes="(min-width: 640px) 25vw, 50vw" className="object-cover" />
                </div>
              ))}
            </section>
          )}

          <section>
            <SectionHeading eyebrow="Highlights" title="Why you'll love it" />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {item.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 rounded-2xl bg-ocean-soft/70 p-4">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-ocean text-white">
                    <Check className="size-3.5" aria-hidden />
                  </span>
                  <span className="text-ink/85">{h}</span>
                </li>
              ))}
            </ul>
          </section>

          {item.itinerary && (
            <section>
              <SectionHeading eyebrow="Itinerary" title={item.itineraryTitle ?? "Day by day"} />
              <ol className="relative mt-8 space-y-5 before:absolute before:top-2 before:bottom-2 before:left-[19px] before:w-0.5 before:border-l-2 before:border-dashed before:border-sun/60">
                {item.itinerary.map((step, i) => (
                  <li key={`${step.title}-${i}`} className="relative flex gap-5">
                    <span className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full bg-navy font-display text-sm font-bold text-white ring-4 ring-white">
                      {i + 1}
                    </span>
                    <div className="flex-1 rounded-2xl bg-white p-5 shadow-[0_10px_30px_-20px_rgba(11,42,82,0.4)] ring-1 ring-line">
                      {step.time && <p className="text-xs font-bold tracking-wider text-sun-ink uppercase">{step.time}</p>}
                      <h3 className="text-lg font-bold">
                        {item.kind === "package" ? `Day ${i + 1} — ${step.title}` : step.title}
                      </h3>
                      {step.text && <p className="mt-2 leading-relaxed text-ink/75">{step.text}</p>}
                      {step.points && (
                        <ul className="mt-3 space-y-1.5">
                          {step.points.map((pt) => (
                            <li key={pt} className="flex gap-2.5 text-ink/75">
                              <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-sun" />
                              {pt}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {item.pricing && (
            <section>
              <SectionHeading eyebrow="Prices" title="Price per person">
                <p>Larger groups pay less per person.</p>
              </SectionHeading>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {item.pricing.map((table, i) => (
                  <div key={table.title ?? i} className="overflow-hidden rounded-3xl ring-1 ring-line">
                    {table.title && <h3 className="bg-navy px-5 py-3.5 text-base font-bold text-white">{table.title}</h3>}
                    <dl className="divide-y divide-line bg-white">
                      {table.rows.map((r) => (
                        <div key={r.label} className="flex items-center justify-between gap-4 px-5 py-3.5">
                          <dt className="text-ink/75">{r.label}</dt>
                          <dd className="font-display text-lg font-bold text-navy">{r.price}</dd>
                        </div>
                      ))}
                    </dl>
                    {table.note && <p className="bg-muted px-5 py-3 text-xs text-muted-ink">{table.note}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-sand p-6 ring-1 ring-line">
              <h3 className="text-lg font-bold">What&apos;s included</h3>
              <ul className="mt-4 space-y-2.5">
                {item.included.map((x) => (
                  <li key={x} className="flex gap-2.5 text-ink/80">
                    <Check className="mt-0.5 size-5 shrink-0 text-emerald-600" aria-hidden />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            {item.excluded && (
              <div className="rounded-3xl bg-white p-6 ring-1 ring-line">
                <h3 className="text-lg font-bold">Not included</h3>
                <ul className="mt-4 space-y-2.5">
                  {item.excluded.map((x) => (
                    <li key={x} className="flex gap-2.5 text-ink/80">
                      <X className="mt-0.5 size-5 shrink-0 text-rose-500" aria-hidden />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {item.notes?.map((n) => (
              <p key={n} className="flex gap-3 rounded-3xl bg-sun-soft p-5 text-sm leading-relaxed text-navy md:col-span-2">
                <Info className="mt-0.5 size-5 shrink-0 text-sun-ink" aria-hidden />
                {n}
              </p>
            ))}
          </section>

          {item.extra && (
            <section className="rounded-[2rem] bg-gradient-to-br from-ocean-soft to-white p-7 ring-1 ring-line sm:p-9">
              <h2 className="text-2xl font-bold">{item.extra.title}</h2>
              <div className="mt-3 space-y-3 leading-relaxed text-ink/80">
                {item.extra.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="hidden lg:block">
          <BookingCard item={item} className="sticky top-28" />
        </aside>
      </div>

      <div
        data-sticky-cta
        className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-4 border-t border-line bg-white/95 px-4 py-3 shadow-[0_-10px_30px_-15px_rgba(6,26,53,0.35)] backdrop-blur-lg lg:hidden"
      >
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-muted-ink">{item.title}</p>
          <p className="font-display text-xl leading-tight font-extrabold text-navy">
            {formatPrice(item)}
            {item.priceFrom !== undefined && <span className="ml-1 text-xs font-medium text-muted-ink">/ person</span>}
          </p>
        </div>
        <BookingDialog trip={item.title} label="Book" className="shrink-0 !px-5" />
      </div>

      {more.length > 0 && (
        <section className="container-x mt-24">
          <SectionHeading eyebrow="You may also like" title="More adventures" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((m) => (
              <ExperienceCard key={m.slug} item={m} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}

function BookingCard({ item, className }: { item: Experience; className?: string }) {
  return (
    <div className={`rounded-[2rem] bg-navy p-6 text-white shadow-[0_30px_60px_-30px_rgba(6,26,53,0.7)] ${className ?? ""}`}>
      <p className="text-xs font-semibold tracking-wider text-white/60 uppercase">
        {item.priceFrom === undefined ? "Price" : "Start from"}
      </p>
      <p className="mt-1 font-display text-4xl font-extrabold">
        {formatPrice(item)}
        {item.priceFrom !== undefined && <span className="ml-1.5 text-base font-medium text-white/60">/ person</span>}
      </p>
      <ul className="mt-5 space-y-2 text-sm text-white/80">
        {["No payment needed to enquire", "Hotel pickup can be arranged", "Local Zanzibari guides", "Fast replies on WhatsApp"].map((x) => (
          <li key={x} className="flex items-center gap-2">
            <Check className="size-4 text-sun" aria-hidden /> {x}
          </li>
        ))}
      </ul>
      <BookingDialog trip={item.title} className="mt-6 w-full" />
      <a
        href={whatsappUrl(`Hi ${site.shortName}! I have a question about ${item.title}.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost-light mt-3 w-full"
      >
        <WhatsAppIcon className="size-4" /> Ask a question
      </a>
      <a href={site.phoneHref} className="mt-4 flex items-center justify-center gap-2 text-sm text-white/70 hover:text-white">
        <Phone className="size-4" aria-hidden /> {site.phone}
      </a>
    </div>
  )
}
