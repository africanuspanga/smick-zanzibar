import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, BadgeCheck, Car, Clock, Compass, MapPin, MessageCircle, Plane, ShieldCheck, Sparkles } from "lucide-react"
import { BestPicks } from "@/components/home/best-picks"
import { TripPlanner } from "@/components/home/trip-planner"
import { Faq } from "@/components/faq"
import { FlightPath } from "@/components/icons"
import { SectionHeading } from "@/components/section-heading"
import { packages } from "@/lib/data/packages"
import { safaris } from "@/lib/data/safaris"
import { tours } from "@/lib/data/tours"
import { site } from "@/lib/site"

const destinations = [
  { name: "Stone Town", image: "/img/tours/stone-town.webp", href: "/zanzibar-tours/stone-town-tour" },
  { name: "Nakupenda", image: "/img/tours/nakupenda-aerial.webp", href: "/zanzibar-tours/nakupenda-sandbank" },
  { name: "Prison Island", image: "/img/tours/giant-tortoise.webp", href: "/zanzibar-tours/prison-island" },
  { name: "Serengeti", image: "/img/safari/serengeti-pkg.webp", href: "/safaris/serengeti-3-days" },
  { name: "Kizimkazi", image: "/img/tours/dolphins-2.webp", href: "/zanzibar-tours/dolphin-tour" },
  { name: "Ngorongoro", image: "/img/safari/ngorongoro-2.webp", href: "/safaris/tarangire-ngorongoro-2-days" },
  { name: "Menai Bay", image: "/img/tours/safari-blue-2.webp", href: "/zanzibar-tours/safari-blue" },
  { name: "Mikumi", image: "/img/safari/mikumi-elephants.webp", href: "/safaris/mikumi-day-trip" },
]

const benefits = [
  { icon: Car, title: "Hotel & airport pickup", tone: "bg-sun text-navy-deep", shift: "sm:ml-16" },
  { icon: Compass, title: "Local Zanzibari guides", tone: "bg-ocean text-white", shift: "" },
  { icon: MessageCircle, title: "Easy WhatsApp booking", tone: "bg-sun text-navy-deep", shift: "sm:ml-16" },
]

const moments = [
  { src: "/img/moments/turtles-swim.webp", alt: "Guests swimming with sea turtles" },
  { src: "/img/moments/horse-riding.webp", alt: "Horse riding in the sea" },
  { src: "/img/moments/sandbank-fruits.webp", alt: "Fresh fruit served on the sandbank" },
  { src: "/img/moments/dhow-lounge.webp", alt: "Lounge on board a decorated dhow" },
  { src: "/img/moments/fishing.webp", alt: "Fishing trip on a speedboat" },
  { src: "/img/moments/beach-party.webp", alt: "Beach party with friends" },
  { src: "/img/moments/boat-bow.webp", alt: "Sitting on the bow of a boat in turquoise water" },
  { src: "/img/moments/speedboat.webp", alt: "Speedboat on the Indian Ocean" },
]

const pick = <T extends { featured?: boolean }>(list: T[], n = 4) => list.filter((x) => x.featured).slice(0, n)

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="px-3 pt-3 sm:px-5">
        <div className="relative isolate flex min-h-[640px] flex-col overflow-hidden rounded-[2rem] bg-navy-deep sm:min-h-[760px] sm:rounded-[2.75rem] lg:h-[92svh] lg:max-h-[900px]">
          <Image
            src="/img/hero/zanzibar-aerial.webp"
            alt="Aerial view of Zanzibar's turquoise lagoon and white beach"
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover"
          />
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-deep/60 via-navy-deep/10 to-navy-deep/70" />

          <div className="container-x flex flex-1 flex-col items-center justify-center pt-28 pb-36 text-center sm:pb-44">
            <p className="text-sm font-semibold tracking-[0.25em] text-white/90 uppercase sm:text-base">
              <span className="text-sun">Tanzania</span> &nbsp;|&nbsp; Zanzibar
            </p>
            <h1 className="mt-3 font-display text-[clamp(4.2rem,17vw,12.5rem)] leading-[0.85] font-extrabold tracking-[-0.045em] text-white drop-shadow-[0_8px_30px_rgba(6,26,53,0.35)]">
              Zanzibar
            </h1>
            <p className="mt-4 font-script text-2xl text-sun sm:text-3xl">{site.tagline}</p>

            <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:gap-10">
              <Link href="/zanzibar-tours" className="btn-sun group !py-2 !pr-2 !pl-7 text-base">
                Explore tours
                <span className="grid size-10 place-items-center rounded-full bg-white text-navy transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="size-5" aria-hidden />
                </span>
              </Link>
              <p className="max-w-sm text-left text-[15px] leading-relaxed text-white/90 max-sm:text-center">
                Sandbanks, spice farms, dolphins and the Serengeti next door — planned by a local team in Stone Town.
              </p>
            </div>
          </div>
        </div>

        <div className="container-x relative z-10 -mt-24 sm:-mt-20">
          <div className="mx-auto max-w-5xl">
            <TripPlanner />
          </div>
        </div>
      </section>

      {/* ── Intro ────────────────────────────────────────────── */}
      <section className="container-x mt-24 grid items-center gap-14 lg:mt-32 lg:grid-cols-2">
        <div className="relative">
          <p className="font-script text-2xl text-sun-ink">We are SMICK!</p>
          <h2 className="mt-2 text-4xl leading-[1.02] font-extrabold sm:text-6xl">
            Your local
            <br />
            travel agency
          </h2>
          <FlightPath className="pointer-events-none absolute top-6 right-0 hidden w-56 text-ocean-ink/70 xl:block" />
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-ink">
            SMICK Tours &amp; Safaris is based in Stone Town. We pick you up from your hotel, take you to the island&apos;s
            best spots with guides who grew up here, and plan safaris to Serengeti, Ngorongoro and Mikumi — all arranged
            in one WhatsApp chat.
          </p>
          <dl className="mt-8 grid max-w-md grid-cols-3 gap-4">
            {[
              { n: tours.length, l: "Zanzibar excursions" },
              { n: safaris.length, l: "Safari trips" },
              { n: packages.length, l: "Holiday packages" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="sr-only">{s.l}</dt>
                <dd className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
                  {s.n}
                  <span className="text-sun-ink">+</span>
                </dd>
                <dd className="text-sm text-muted-ink">{s.l}</dd>
              </div>
            ))}
          </dl>
          <Link href="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-ocean-ink underline-offset-4 hover:underline">
            Learn more about us <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-lg pt-10 pl-6 sm:pl-14">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(6,26,53,0.6)]">
            <Image src="/img/moments/boat-bow.webp" alt="Relaxing on the bow of a SMICK boat trip" fill sizes="(min-width: 1024px) 480px, 90vw" className="object-cover" />
          </div>
          <div className="absolute top-0 left-0 flex animate-float items-center gap-3 rounded-[46%_54%_42%_58%/55%_45%_55%_45%] bg-sun px-6 py-5 text-navy-deep shadow-xl sm:px-8 sm:py-6">
            <span className="grid size-10 place-items-center rounded-full bg-white">
              <BadgeCheck className="size-5 text-sun-ink" aria-hidden />
            </span>
            <span className="font-display text-base leading-tight font-bold sm:text-lg">
              Local &amp;
              <br />
              trusted
            </span>
          </div>
          <div className="absolute -bottom-8 -left-2 w-36 overflow-hidden rounded-3xl border-4 border-white shadow-xl sm:w-44">
            <div className="relative aspect-square">
              <Image src="/img/moments/turtles-swim-2.webp" alt="Swimming with turtles" fill sizes="176px" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Explore ──────────────────────────────────────────── */}
      <section className="mt-28 lg:mt-36">
        <div className="container-x flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-4xl leading-[1.02] font-extrabold sm:text-6xl">
            Explore
            <br />
            with us
          </h2>
          <p className="max-w-xs text-lg font-semibold text-navy/70 sm:mb-2">Find beautiful places in Zanzibar and Tanzania</p>
          <Link href="/zanzibar-tours" className="btn-sun self-start sm:self-auto">
            View all <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
        <div className="no-scrollbar mt-10 flex snap-x snap-mandatory scroll-px-4 gap-5 overflow-x-auto px-4 pb-6 sm:scroll-px-6 sm:px-6 lg:scroll-px-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          {destinations.map((d) => (
            <Link
              key={d.name}
              href={d.href}
              className="group relative isolate aspect-[3/4] w-[72vw] max-w-[300px] shrink-0 snap-start overflow-hidden rounded-[1.75rem] sm:w-[300px]"
            >
              <Image src={d.image} alt={d.name} fill sizes="300px" className="-z-10 object-cover transition-transform duration-700 group-hover:scale-110" />
              <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep/70 to-transparent to-50%" />
              <span className="chip absolute top-4 right-4">
                <MapPin className="size-3.5 text-sun-ink" aria-hidden /> {d.name}
              </span>
              <span className="absolute right-5 bottom-5 left-5 flex items-center justify-between font-display text-2xl font-bold text-white">
                {d.name}
                <span className="grid size-10 place-items-center rounded-full bg-white/20 backdrop-blur transition-colors group-hover:bg-sun group-hover:text-navy-deep">
                  <ArrowUpRight className="size-5" aria-hidden />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────── */}
      <section className="container-x mt-24 grid items-center gap-14 lg:mt-32 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div aria-hidden className="absolute top-1/2 left-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-ocean/25" />
          <ul className="relative grid gap-5">
            {benefits.map((b) => (
              <li key={b.title} className={`flex items-center gap-4 ${b.shift}`}>
                <span className={`grid size-16 shrink-0 rotate-[-6deg] place-items-center rounded-2xl shadow-lg ${b.tone}`}>
                  <b.icon className="size-7 rotate-[6deg]" aria-hidden />
                </span>
                <span className="font-display text-lg font-bold text-navy">{b.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow="Our benefits for you" title="We will take care of you">
            <p>
              From the moment you land until your last sunset, one local team handles your pickups, guides, boats and
              safari bookings. Ask anything on WhatsApp — we reply fast.
            </p>
          </SectionHeading>
          <ul className="mt-6 space-y-2 text-ink/80">
            {["Guides fluent in English — French, German & Italian on request", "Group prices that drop as your group grows", "Private or shared trips, your choice"].map((x) => (
              <li key={x} className="flex items-start gap-2.5">
                <ShieldCheck className="mt-0.5 size-5 shrink-0 text-ocean-ink" aria-hidden /> {x}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Best picks ───────────────────────────────────────── */}
      <section className="mt-28 bg-sand py-20 lg:mt-36 lg:py-28">
        <div className="container-x">
          <BestPicks
            groups={[
              { label: "Zanzibar tours", href: "/zanzibar-tours", items: pick(tours) },
              { label: "Safaris", href: "/safaris", items: pick(safaris) },
              { label: "Packages", href: "/packages", items: pick(packages) },
            ]}
          />
        </div>
      </section>

      {/* ── Safari band ──────────────────────────────────────── */}
      <section className="px-3 pt-24 sm:px-5 lg:pt-32">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-navy-deep sm:rounded-[2.75rem]">
          <Image src="/img/hero/safari-sunset.webp" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-45" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/20" />
          <div className="container-x grid items-center gap-14 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
            <div>
              <p className="font-script text-3xl text-sun">Hakuna matata!</p>
              <h2 className="mt-2 text-4xl leading-[1.02] font-extrabold text-white sm:text-6xl">
                Safari wild,
                <br />
                straight from Zanzibar
              </h2>
              <p className="mt-6 max-w-lg text-lg text-white/80">
                Fly from the island to Mikumi or Nyerere for a day, spend nights in the Serengeti, or take the classic
                northern circuit through Ngorongoro Crater.
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {["Ngorongoro", "Serengeti", "Mikumi", "Nyerere", "Tarangire", "Lake Manyara"].map((p) => (
                  <li key={p} className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
                    {p}
                  </li>
                ))}
              </ul>
              <Link href="/safaris" className="btn-sun mt-10">
                Explore safaris <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <Link
                href="/safaris/serengeti-3-days"
                className="block rotate-2 rounded-[2.5rem] bg-white p-3 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.6)] transition-transform hover:rotate-0"
              >
                <div className="relative aspect-[4/4.2] overflow-hidden rounded-[2rem]">
                  <Image src="/img/hero/zebras.webp" alt="Zebras in the Serengeti" fill sizes="384px" className="object-cover" />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent to-50%" />
                  <p className="absolute bottom-5 left-5 font-display text-3xl leading-none font-bold text-white">
                    Safari
                    <br />
                    Serengeti
                  </p>
                </div>
                <ul className="mt-3 grid grid-cols-4 gap-2 px-1">
                  {[
                    { icon: Clock, v: "3 days" },
                    { icon: Plane, v: "Fly-in" },
                    { icon: Sparkles, v: "Big 5" },
                    { icon: MapPin, v: "Seronera" },
                  ].map((c) => (
                    <li key={c.v} className="flex flex-col items-center gap-1.5 rounded-2xl py-2 shadow-[0_8px_20px_-12px_rgba(11,42,82,0.35)] ring-1 ring-line">
                      <span className="grid size-9 place-items-center rounded-xl bg-sun text-navy-deep">
                        <c.icon className="size-4" aria-hidden />
                      </span>
                      <span className="text-xs font-semibold text-navy">{c.v}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex items-center justify-between rounded-[1.5rem] bg-sun px-5 py-4 font-semibold text-navy-deep">
                  View safari <span className="font-display text-lg font-bold">from $2,048</span>
                </div>
              </Link>
              <div className="absolute top-10 -left-6 hidden -rotate-3 items-center gap-3 rounded-2xl bg-white p-2 pr-4 shadow-xl sm:flex">
                <span className="relative size-12 overflow-hidden rounded-xl">
                  <Image src="/img/safari/elephants.webp" alt="" fill sizes="48px" className="object-cover" />
                </span>
                <span className="leading-tight">
                  <span className="block font-display font-bold text-navy">Elephant</span>
                  <span className="text-xs text-muted-ink">1 of the Big 5</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Real moments ─────────────────────────────────────── */}
      <section className="container-x mt-28 lg:mt-36">
        <SectionHeading eyebrow="Real trips, real guests" title="Moments from our tours" align="center">
          <p>Swimming with turtles, riding into the sea and fruit on the sandbank — straight from our camera roll.</p>
        </SectionHeading>
        <div className="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {moments.map((m, i) => (
            <div key={m.src} className={`relative overflow-hidden rounded-3xl break-inside-avoid ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/5]"}`}>
              <Image src={m.src} alt={m.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          ))}
        </div>
      </section>

      <Faq className="mt-28 lg:mt-36" />

      {/* ── Transfers ────────────────────────────────────────── */}
      <section className="container-x mt-24 lg:mt-32">
        <div className="grid overflow-hidden rounded-[2rem] bg-ocean-soft lg:grid-cols-2">
          <div className="p-8 sm:p-12">
            <SectionHeading eyebrow="Airport & hotel pickup" title="Rides across the island from $15">
              <p>Comfortable vehicles, fixed prices per car and a driver waiting with your name at arrivals.</p>
            </SectionHeading>
            <ul className="mt-6 divide-y divide-navy/10 rounded-2xl bg-white px-5 ring-1 ring-line">
              {[
                { to: "Airport → Stone Town", p: "$15" },
                { to: "Airport → Paje / Jambiani", p: "$40" },
                { to: "Airport → Nungwi / Kendwa", p: "$80" },
              ].map((r) => (
                <li key={r.to} className="flex items-center justify-between py-3.5">
                  <span className="font-medium text-navy">{r.to}</span>
                  <span className="font-display text-lg font-bold text-navy">{r.p}</span>
                </li>
              ))}
            </ul>
            <Link href="/transfers" className="btn-navy mt-7">
              All transfer prices <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <div className="relative min-h-72">
            <Image src="/img/vehicles/alphard-black.webp" alt="SMICK transfer vehicle" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>
    </>
  )
}
