import type { Metadata } from "next"
import Link from "next/link"
import { Car } from "lucide-react"
import { FilterableGrid } from "@/components/filterable-grid"
import { PageHero } from "@/components/page-hero"
import { tourCategories, tours } from "@/lib/data/tours"

export const metadata: Metadata = {
  title: "Zanzibar Tours & Excursions",
  description:
    "Stone Town, Prison Island, Nakupenda, Safari Blue, spice farm, Jozani, caves, dolphins, fishing, horse riding, sunset cruises, turtles and boat parties.",
  alternates: { canonical: "/zanzibar-tours" },
}

export default function ZanzibarToursPage() {
  return (
    <>
      <PageHero
        image="/img/tours/nakupenda-aerial.webp"
        eyebrow="Zanzibar excursions"
        title="Island days you'll talk about for years"
        crumbs={[{ href: "/", label: "Home" }, { label: "Zanzibar Tours" }]}
      >
        <p>
          {tours.length} hand-picked experiences — from Stone Town&apos;s alleys to sandbanks, caves, dolphins and boat
          parties. Every tour is run by local Zanzibari guides.
        </p>
      </PageHero>

      <section className="container-x mt-14">
        <FilterableGrid items={tours} categories={tourCategories} />

        <div className="mt-14 flex flex-col items-start gap-4 rounded-[2rem] bg-ocean-soft p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div className="flex items-start gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-ocean text-white">
              <Car className="size-6" aria-hidden />
            </span>
            <div>
              <h2 className="text-xl font-bold sm:text-2xl">Need a ride to your tour?</h2>
              <p className="mt-1 text-muted-ink">We pick you up from any hotel on the island. Airport transfers from $15.</p>
            </div>
          </div>
          <Link href="/transfers" className="btn-navy">
            See transfer prices
          </Link>
        </div>
      </section>
    </>
  )
}
