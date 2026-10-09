import type { Metadata } from "next"
import { BedDouble, Car, Map as MapIcon, UtensilsCrossed } from "lucide-react"
import { ExperienceCard } from "@/components/experience-card"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { packages } from "@/lib/data/packages"

export const metadata: Metadata = {
  title: "Zanzibar Holiday Packages",
  description:
    "All-in Zanzibar holiday packages from 3 to 10 days with hotel, breakfast & dinner, airport transfers and the island's best excursions. Choose 3, 4 or 5-star hotels.",
  alternates: { canonical: "/packages" },
}

const perks = [
  { icon: BedDouble, title: "Your choice of hotel", text: "We send 3, 4 and 5-star options." },
  { icon: UtensilsCrossed, title: "Breakfast & dinner", text: "Half board included every day." },
  { icon: Car, title: "All transfers", text: "Airport pickup and excursion transport." },
  { icon: MapIcon, title: "Planned excursions", text: "The island's best tours, already booked." },
]

export default function PackagesPage() {
  return (
    <>
      <PageHero
        image="/img/tours/kendwa.webp"
        eyebrow="Holiday packages"
        title="Your whole Zanzibar holiday, sorted"
        crumbs={[{ href: "/", label: "Home" }, { label: "Packages" }]}
      >
        <p>Hotel, meals, transfers and excursions in one simple price. Just pick how many days.</p>
      </PageHero>

      <section className="container-x mt-14">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p) => (
            <li key={p.title} className="flex gap-4 rounded-3xl bg-sand p-5 ring-1 ring-line">
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

      <section className="container-x mt-16">
        <SectionHeading eyebrow="3 to 10 days" title="Pick your package" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => (
            <ExperienceCard key={p.slug} item={p} priority={i < 3} />
          ))}
        </div>
      </section>
    </>
  )
}
