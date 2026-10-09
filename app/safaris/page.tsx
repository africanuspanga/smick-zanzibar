import type { Metadata } from "next"
import Image from "next/image"
import { Plane } from "lucide-react"
import { FilterableGrid } from "@/components/filterable-grid"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { safariCategories, safaris } from "@/lib/data/safaris"

export const metadata: Metadata = {
  title: "Tanzania Safaris — Serengeti & Ngorongoro",
  description:
    "Safaris from Zanzibar: Mikumi & Nyerere day trips, fly-in Serengeti with hot air balloon, and 2–10 day trips to Ngorongoro, Tarangire & Manyara.",
  alternates: { canonical: "/safaris" },
}

const ways = [
  {
    title: "Day trips from Zanzibar",
    text: "Fly out at sunrise, game drive all day and be back at your beach hotel for dinner.",
    image: "/img/safari/mikumi-elephants.webp",
  },
  {
    title: "Fly-in Serengeti",
    text: "Two or three nights in the Serengeti, flying straight from Zanzibar to the plains.",
    image: "/img/safari/balloon.webp",
  },
  {
    title: "Northern circuit",
    text: "Classic road safaris from Arusha through Tarangire, Manyara, Ngorongoro and Serengeti.",
    image: "/img/safari/rhino.webp",
  },
]

export default function SafarisPage() {
  return (
    <>
      <PageHero
        image="/img/hero/safari-sunset.webp"
        eyebrow="Safari wild"
        title="From the beach to the Big Five"
        crumbs={[{ href: "/", label: "Home" }, { label: "Safaris" }]}
      >
        <p>Ngorongoro, Serengeti, Mikumi, Nyerere and more — as a day trip from Zanzibar or a full safari adventure.</p>
      </PageHero>

      <section className="container-x mt-16">
        <SectionHeading eyebrow="Three ways to go" title="Pick your kind of safari" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {ways.map((w) => (
            <div key={w.title} className="group relative isolate flex min-h-64 flex-col justify-end overflow-hidden rounded-[1.75rem] p-6 text-white">
              <Image src={w.image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="-z-10 object-cover transition-transform duration-700 group-hover:scale-105" />
              <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent" />
              <Plane className="size-5 text-sun" aria-hidden />
              <h3 className="mt-2 text-xl font-bold text-white">{w.title}</h3>
              <p className="mt-1 text-sm text-white/80">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x mt-20">
        <SectionHeading eyebrow="All safaris" title="Choose your adventure" />
        <div className="mt-8">
          <FilterableGrid items={safaris} categories={safariCategories} />
        </div>
      </section>
    </>
  )
}
