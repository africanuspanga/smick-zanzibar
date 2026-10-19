import type { Metadata } from "next"
import Image from "next/image"
import { Clock, FileCheck2, KeyRound, MapPinned, PlaneLanding, Send, ShieldCheck } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { RentalBooking } from "@/components/rental-booking"
import { SectionHeading } from "@/components/section-heading"
import { rentalCars, rentalRequirements } from "@/lib/data/rental"

export const metadata: Metadata = {
  title: "Car Rental in Zanzibar",
  description:
    "Rent a Toyota Corolla, RAV4 4x4, Alphard or Hiace in Zanzibar — self-drive or with a driver, delivered to the airport or your hotel. Ask for a quote on WhatsApp.",
  alternates: { canonical: "/car-rental" },
}

const promises = [
  { icon: Clock, title: "24/7", text: "Available 7 days a week" },
  { icon: PlaneLanding, title: "Airport delivery", text: "Car waiting when you land" },
  { icon: MapPinned, title: "Whole island", text: "North, south, east & west" },
  { icon: ShieldCheck, title: "Toyota fleet", text: "Air-conditioned & maintained" },
]

const steps = [
  { icon: KeyRound, title: "Choose your car", text: "Pick a saloon, 4x4, van or minibus for your group and plans." },
  { icon: Send, title: "Send your request", text: "Fill in the form — it opens WhatsApp and we reply quickly with the rate." },
  { icon: FileCheck2, title: "Drive away", text: "We deliver the car, check it with you, sign the agreement and you're off." },
]

export default function CarRentalPage() {
  return (
    <>
      <PageHero
        image="/img/rental/corolla.webp"
        eyebrow="Car rental"
        title="Explore Zanzibar your way"
        crumbs={[{ href: "/", label: "Home" }, { label: "Car Rental" }]}
      >
        <p>Rent a clean, air-conditioned Toyota for a day, a week or your whole stay — self-drive or with one of our drivers.</p>
        <a href="#book" className="btn-sun mt-7">
          Request a car
        </a>
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

      <section className="container-x mt-20 grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="How it works" title="Simple, flexible car hire">
            <p>
              Choose the car that fits your group, tell us your dates and where you&apos;d like it delivered. The rate depends on
              the vehicle, how many days you need it and any extras such as a baby seat or an additional driver.
            </p>
            <p className="mt-3">Perfect for exploring beaches at your own pace, business trips and family holidays.</p>
          </SectionHeading>
          <ol className="mt-8 grid gap-4">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-4 rounded-3xl bg-sand p-5 ring-1 ring-line">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-navy font-display text-lg font-bold text-sun">
                  0{i + 1}
                </span>
                <span>
                  <span className="flex items-center gap-2 font-bold text-navy">
                    <s.icon className="size-4 text-ocean" aria-hidden /> {s.title}
                  </span>
                  <span className="text-sm text-muted-ink">{s.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(6,26,53,0.6)]">
          <Image src="/img/rental/car-keys.webp" alt="Car keys being handed over" fill sizes="(min-width: 1024px) 448px, 90vw" className="object-cover" />
        </div>
      </section>

      <section className="container-x mt-20">
        <SectionHeading eyebrow="Our fleet" title="Pick your car">
          <p>Every vehicle is air-conditioned and regularly serviced. Rates on request — they depend on dates and options.</p>
        </SectionHeading>
        <RentalBooking cars={rentalCars} />
      </section>

      <section className="container-x mt-20">
        <div className="grid gap-10 rounded-[2rem] bg-ocean-soft p-7 sm:p-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <SectionHeading eyebrow="Before you drive" title="What you need to rent">
            <p>Prefer not to drive? Choose the &ldquo;with a SMICK driver&rdquo; option and none of this applies.</p>
          </SectionHeading>
          <ol className="grid gap-3">
            {rentalRequirements.map((r, i) => (
              <li key={r} className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 ring-1 ring-line">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-sun font-display text-sm font-bold text-navy-deep">{i + 1}</span>
                <span className="text-ink/85">{r}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
