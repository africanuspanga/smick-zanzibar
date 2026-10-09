import type { Metadata } from "next"
import Image from "next/image"
import { BadgeDollarSign, Clock, PlaneLanding, Users } from "lucide-react"
import BookingDialog from "@/components/booking-dialog"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { fleet, transferGroups } from "@/lib/data/transfers"

export const metadata: Metadata = {
  title: "Airport & Hotel Transfers in Zanzibar",
  description:
    "Fixed-price Zanzibar airport, ferry and hotel transfers: Stone Town $15, Paje & Jambiani $40, Nungwi & Kendwa $80. Private vehicles with professional drivers.",
  alternates: { canonical: "/transfers" },
}

const promises = [
  { icon: PlaneLanding, title: "Meet & greet", text: "Your driver waits outside arrivals with your name." },
  { icon: BadgeDollarSign, title: "Fixed prices", text: "Price per vehicle, agreed before you travel." },
  { icon: Clock, title: "Any time", text: "Early flights and late ferries covered." },
  { icon: Users, title: "Any group", text: "From couples to groups of 28." },
]

export default function TransfersPage() {
  return (
    <>
      <PageHero
        image="/img/tours/kendwa.webp"
        eyebrow="Airport & hotel pickup"
        title="Easy rides, anywhere on the island"
        crumbs={[{ href: "/", label: "Home" }, { label: "Transfers" }]}
      >
        <p>Airport, ferry port and hotel-to-hotel transfers at fixed prices per vehicle.</p>
      </PageHero>

      <section className="container-x mt-14">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p) => (
            <li key={p.title} className="flex gap-4 rounded-3xl bg-white p-5 shadow-[0_16px_40px_-24px_rgba(11,42,82,0.4)] ring-1 ring-line">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-sun text-navy-deep">
                <p.icon className="size-5" aria-hidden />
              </span>
              <span>
                <span className="block font-bold text-navy">{p.title}</span>
                <span className="text-sm text-muted-ink">{p.text}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-x mt-20">
        <SectionHeading eyebrow="Price list" title="Transfer prices">
          <p>All prices are per vehicle, one way, in US dollars.</p>
        </SectionHeading>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {transferGroups.map((g) => (
            <div key={g.id} className="flex flex-col overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-line">
              <div className="bg-navy px-6 py-5 text-white">
                <h3 className="text-lg font-bold text-white">{g.title}</h3>
                <p className="mt-0.5 text-sm text-white/70">From {g.from}</p>
              </div>
              <dl className="flex-1 divide-y divide-line">
                {g.routes.map((r) => (
                  <div key={r.to} className="flex items-center justify-between px-6 py-3">
                    <dt className="text-ink/80">{r.to}</dt>
                    <dd className="font-display text-lg font-bold text-navy">${r.price}</dd>
                  </div>
                ))}
              </dl>
              <div className="border-t border-line p-4">
                <BookingDialog trip={`Transfer — ${g.title}`} label="Book a transfer" className="w-full" />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-ink">
          Not on the list? Any route on Zanzibar is possible — send us your pickup and drop-off and we&apos;ll quote right away.
        </p>
      </section>

      <section className="container-x mt-20">
        <SectionHeading eyebrow="Our fleet" title="Clean, air-conditioned vehicles" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {fleet.map((v) => (
            <figure key={v.name} className="overflow-hidden rounded-[1.75rem] bg-white p-2.5 ring-1 ring-line">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-muted">
                <Image src={v.image} alt={v.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="flex items-center justify-between px-3 py-4">
                <span className="font-display text-lg font-bold text-navy">{v.name}</span>
                <span className="rounded-full bg-sun-soft px-3 py-1 text-sm font-semibold text-navy">{v.seats}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}
