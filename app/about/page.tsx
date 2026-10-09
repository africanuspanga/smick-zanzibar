import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, HeartHandshake, Leaf, MapPinned, MessageCircle } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "SMICK Tours & Safaris is a local tour agency in Stone Town, Zanzibar. We run island excursions, airport pickups, holiday packages and Tanzania safaris.",
  alternates: { canonical: "/about" },
}

const values = [
  {
    icon: MapPinned,
    title: "Truly local",
    text: "We live in Zanzibar. Our guides grew up here and share the stories, food and places that guidebooks miss.",
  },
  {
    icon: MessageCircle,
    title: "Always reachable",
    text: "One WhatsApp chat from planning to pickup. Questions answered fast, plans changed easily.",
  },
  {
    icon: HeartHandshake,
    title: "Honest prices",
    text: "Clear group prices, no surprises. We tell you up front what's included and what isn't.",
  },
  {
    icon: Leaf,
    title: "Respect for nature",
    text: "We support turtle conservation, keep our distance from wild dolphins and leave the sandbanks clean.",
  },
]

const services = [
  "Airport & hotel pickup",
  "Stone Town tour",
  "Prison Island",
  "Nakupenda Sandbank",
  "Spice farm tour",
  "Safari Blue",
  "Jozani Forest",
  "Zanzibar caves",
  "Dolphin tour",
  "Fishing game",
  "Horse riding",
  "Water sports",
  "Sunset cruise",
  "Swimming with turtles",
  "Zanzibar night",
  "Boat party",
  "Ngorongoro, Serengeti & Mikumi safaris",
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/img/moments/boat-bow.webp"
        eyebrow="About SMICK"
        title="Explore, discover, experience — with locals"
        crumbs={[{ href: "/", label: "Home" }, { label: "About" }]}
      >
        <p>A Stone Town tour agency for travellers who want the real Zanzibar and the wild heart of Tanzania.</p>
      </PageHero>

      <section className="container-x mt-20 grid items-center gap-14 lg:grid-cols-2">
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div aria-hidden className="absolute inset-6 rounded-full bg-gradient-to-br from-sun/40 via-ocean/20 to-transparent blur-2xl" />
          <Image src="/img/brand/smick-logo-512.webp" alt={`${site.name} logo`} width={512} height={512} className="relative size-full object-contain" />
        </div>
        <div>
          <SectionHeading eyebrow="Our story" title="From Stone Town to the Serengeti" />
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-ink">
            <p>
              SMICK Tours &amp; Safaris was started in Stone Town to share the Zanzibar we love: sandbanks at low tide,
              turtles in natural lagoons, spice farms, sunset dhows and the warm Swahili welcome — <em>karibu!</em>
            </p>
            <p>
              Our logo says it all: the savannah on one side, the Indian Ocean on the other. We take care of both — island
              excursions and pickups in Zanzibar, and safaris to Ngorongoro, Serengeti, Mikumi and beyond.
            </p>
          </div>
          <Link href="/contact" className="btn-navy mt-8">
            Talk to us <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>

      <section className="mt-24 bg-sand py-20">
        <div className="container-x">
          <SectionHeading eyebrow="What we stand for" title="Why travel with SMICK" align="center" />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <li key={v.title} className="rounded-[1.75rem] bg-white p-6 ring-1 ring-line">
                <span className="grid size-12 place-items-center rounded-2xl bg-sun text-navy-deep">
                  <v.icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-muted-ink">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x mt-24 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <SectionHeading eyebrow="Our services" title="Everything we can arrange for you">
          <p>Mix and match — we build your days around your hotel location and the tides.</p>
        </SectionHeading>
        <ul className="flex flex-wrap content-start gap-2.5">
          {services.map((s) => (
            <li key={s} className="rounded-full bg-white px-4 py-2 font-semibold text-navy ring-1 ring-line">
              {s}
            </li>
          ))}
        </ul>
      </section>

      <section className="container-x mt-24">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {["/img/moments/turtles-swim.webp", "/img/moments/horse-riding.webp", "/img/moments/fishing.webp", "/img/moments/sandbank-fruits.webp"].map(
            (src) => (
              <div key={src} className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <Image src={src} alt="" fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
              </div>
            ),
          )}
        </div>
      </section>
    </>
  )
}
