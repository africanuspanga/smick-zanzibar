"use client"

import { useId, useRef, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Check, Users } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons"
import { sendWhatsAppEnquiry } from "@/lib/analytics"
import type { RentalCar } from "@/lib/data/rental"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

const field =
  "h-12 w-full rounded-xl border border-input bg-muted/60 px-4 text-[15px] text-ink outline-none transition focus:border-ocean focus:bg-white focus:ring-4 focus:ring-ocean/15"

const drivers = ["Self-drive", "With a SMICK driver"]

/** Rental fleet cards plus the request form; choosing a car pre-fills the form. */
export function RentalBooking({ cars }: { cars: RentalCar[] }) {
  const id = useId()
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)
  const [f, setF] = useState({ car: cars[0].id, driver: drivers[0], from: "", to: "", pickup: "", name: "", notes: "" })
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF((v) => ({ ...v, [k]: e.target.value }))

  const choose = (car: string) => {
    setF((v) => ({ ...v, car }))
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const car = cars.find((c) => c.id === f.car)!
    const msg = [
      `Hi ${site.shortName}! I'd like to rent a car.`,
      `*${car.name}* (${car.type})`,
      `Option: ${f.driver}`,
      `From: ${f.from}`,
      `Until: ${f.to}`,
      `Delivery / pick-up: ${f.pickup}`,
      `Name: ${f.name}`,
      f.notes ? `Notes: ${f.notes}` : null,
      "Could you send me the rate?",
    ]
      .filter(Boolean)
      .join("\n")
    sendWhatsAppEnquiry(msg, { form: "car_rental", trip: car.name })
    router.push("/thank-you")
  }

  return (
    <>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cars.map((c) => (
          <article
            key={c.id}
            className={cn(
              "flex flex-col overflow-hidden rounded-[1.75rem] bg-white p-2.5 ring-1 transition-shadow",
              f.car === c.id ? "shadow-[0_24px_50px_-28px_rgba(11,42,82,0.55)] ring-2 ring-sun" : "ring-line",
            )}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-muted">
              <Image src={c.image} alt={c.name} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
              <span className="chip absolute top-3 left-3">{c.type}</span>
            </div>
            <div className="flex flex-1 flex-col px-3 pt-4 pb-3">
              <h3 className="text-xl font-bold">{c.name}</h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-ink">
                <Users className="size-4" aria-hidden /> {c.seats}
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-ink/80">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-ocean" aria-hidden /> {p}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                <span className="font-display font-bold text-navy">
                  Price <span className="text-muted-ink">on request</span>
                </span>
                <button type="button" onClick={() => choose(c.id)} className="btn-navy !px-4 !py-2 text-sm">
                  {f.car === c.id ? "Selected" : "Choose"}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <form
        ref={formRef}
        id="book"
        onSubmit={submit}
        className="mt-16 scroll-mt-28 rounded-[2rem] bg-white p-6 shadow-[0_30px_70px_-30px_rgba(6,26,53,0.45)] ring-1 ring-line sm:p-10"
      >
        <p className="font-script text-xl text-sun-ink">Get a quote</p>
        <h2 className="mt-1 text-3xl font-extrabold sm:text-4xl">Request your rental car</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Field label="Vehicle" htmlFor={`${id}-car`}>
            <select id={`${id}-car`} value={f.car} onChange={set("car")} className={field}>
              {cars.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} — {c.type} ({c.seats})
                </option>
              ))}
            </select>
          </Field>
          <Field label="Driver" htmlFor={`${id}-driver`}>
            <select id={`${id}-driver`} value={f.driver} onChange={set("driver")} className={field}>
              {drivers.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </Field>
          <Field label="Your name" htmlFor={`${id}-name`}>
            <input id={`${id}-name`} required autoComplete="name" value={f.name} onChange={set("name")} className={field} placeholder="Full name" />
          </Field>
          <Field label="Pick-up date" htmlFor={`${id}-from`}>
            <input id={`${id}-from`} type="date" required value={f.from} onChange={set("from")} className={field} />
          </Field>
          <Field label="Return date" htmlFor={`${id}-to`}>
            <input id={`${id}-to`} type="date" required min={f.from || undefined} value={f.to} onChange={set("to")} className={field} />
          </Field>
          <Field label="Delivery location" htmlFor={`${id}-pickup`}>
            <input id={`${id}-pickup`} required value={f.pickup} onChange={set("pickup")} className={field} placeholder="Airport, hotel or address" />
          </Field>
          <div className="sm:col-span-2 lg:col-span-3">
            <Field label="Anything else?" htmlFor={`${id}-notes`} optional>
              <textarea
                id={`${id}-notes`}
                rows={3}
                value={f.notes}
                onChange={set("notes")}
                className={cn(field, "h-auto py-3")}
                placeholder="Baby seat, extra driver, flight number…"
              />
            </Field>
          </div>
        </div>
        <div className="mt-7 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-ink">No payment now — we reply on WhatsApp with the rate and availability.</p>
          <button type="submit" className="btn-sun w-full sm:w-auto">
            <WhatsAppIcon className="size-5" /> Send on WhatsApp
          </button>
        </div>
      </form>
    </>
  )
}

function Field({ label, htmlFor, optional, children }: { label: string; htmlFor: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-navy">
        {label} {optional && <span className="font-normal text-muted-ink">(optional)</span>}
      </label>
      {children}
    </div>
  )
}
