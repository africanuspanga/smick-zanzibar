"use client"

import { useId, useState, type ReactNode } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowUpRight, CalendarDays, Car, Clock, Compass, MapPin, Users } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons"
import { sendWhatsAppEnquiry } from "@/lib/analytics"
import { findTransferPrice, transferPlaces } from "@/lib/data/transfers"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

export type TripOption = { title: string; href: string; price: string; group: string }

const vehicles = ["Let SMICK recommend", "Toyota Alphard (1–6)", "Toyota Hiace van (1–10)", "Toyota Coaster (11–28)"]

const field =
  "h-14 w-full appearance-none rounded-full border border-line bg-white pr-12 pl-6 text-[15px] text-ink outline-none transition placeholder:text-muted-ink/80 focus:border-ocean focus:ring-4 focus:ring-ocean/15"

/** "Book your ride" card under the home hero: a transfer or a tour, sent to WhatsApp as a ready-made message. */
export function BookRide({ trips }: { trips: TripOption[] }) {
  const id = useId()
  const router = useRouter()
  const [mode, setMode] = useState<"transfer" | "tour">("transfer")
  const [f, setF] = useState({
    pickup: "",
    dropoff: "",
    passengers: "2",
    date: "",
    time: "",
    vehicle: vehicles[0],
    trip: trips[0]?.title ?? "",
  })
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setF((v) => ({ ...v, [k]: e.target.value }))

  const price = mode === "transfer" ? findTransferPrice(f.pickup, f.dropoff) : undefined
  const trip = trips.find((t) => t.title === f.trip)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const lines =
      mode === "transfer"
        ? [
            `Hi ${site.shortName}! I'd like to book a transfer.`,
            `Pick-up: ${f.pickup}`,
            `Drop-off: ${f.dropoff}`,
            `Date: ${f.date}`,
            `Time: ${f.time}`,
            `Passengers: ${f.passengers}`,
            `Vehicle: ${f.vehicle}`,
            price !== undefined ? `Listed price: $${price} per vehicle` : null,
          ]
        : [
            `Hi ${site.shortName}! I'd like to book a tour.`,
            `*${f.trip}*`,
            `Date: ${f.date}`,
            f.time ? `Preferred pick-up time: ${f.time}` : null,
            `Guests: ${f.passengers}`,
            f.pickup ? `Pick-up: ${f.pickup}` : null,
          ]
    sendWhatsAppEnquiry(lines.filter(Boolean).join("\n"), {
      form: `book_ride_${mode}`,
      trip: mode === "tour" ? f.trip : `${f.pickup} → ${f.dropoff}`,
    })
    router.push("/thank-you")
  }

  const groups = [...new Set(trips.map((t) => t.group))]

  return (
    <form
      onSubmit={submit}
      className="rounded-[1.75rem] bg-white p-5 shadow-[0_30px_70px_-30px_rgba(6,26,53,0.55)] ring-1 ring-line sm:p-8 lg:p-10"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Book your {mode === "transfer" ? "ride" : "tour"}</h2>
        <div role="tablist" aria-label="What would you like to book?" className="inline-flex self-start rounded-full bg-muted p-1 sm:self-auto">
          {(
            [
              ["transfer", "Transfer", Car],
              ["tour", "Tour", Compass],
            ] as const
          ).map(([m, label, Icon]) => (
            <button
              key={m}
              type="button"
              role="tab"
              aria-selected={mode === m}
              onClick={() => setMode(m)}
              className={cn(
                "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                mode === m ? "bg-navy text-white shadow" : "text-navy hover:bg-white",
              )}
            >
              <Icon className="size-4" aria-hidden /> {label}
            </button>
          ))}
        </div>
      </div>

      <datalist id={`${id}-places`}>
        {transferPlaces.map((p) => (
          <option key={p} value={p} />
        ))}
      </datalist>

      <div className="mt-7 grid gap-x-5 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {mode === "transfer" ? (
          <>
            <Field label="Pick-up location" htmlFor={`${id}-pickup`} icon={MapPin}>
              <input id={`${id}-pickup`} required list={`${id}-places`} value={f.pickup} onChange={set("pickup")} placeholder="Type location" className={field} />
            </Field>
            <Field label="Drop-off location" htmlFor={`${id}-dropoff`} icon={MapPin}>
              <input id={`${id}-dropoff`} required list={`${id}-places`} value={f.dropoff} onChange={set("dropoff")} placeholder="Type location" className={field} />
            </Field>
          </>
        ) : (
          <>
            <Field label="Tour or trip" htmlFor={`${id}-trip`} icon={Compass}>
              <select id={`${id}-trip`} value={f.trip} onChange={set("trip")} className={cn(field, "truncate")}>
                {groups.map((g) => (
                  <optgroup key={g} label={g}>
                    {trips
                      .filter((t) => t.group === g)
                      .map((t) => (
                        <option key={t.href}>{t.title}</option>
                      ))}
                  </optgroup>
                ))}
              </select>
            </Field>
            <Field label="Hotel / pick-up" htmlFor={`${id}-hotel`} icon={MapPin} optional>
              <input id={`${id}-hotel`} list={`${id}-places`} value={f.pickup} onChange={set("pickup")} placeholder="Hotel or area" className={field} />
            </Field>
          </>
        )}
        <Field label={mode === "transfer" ? "Passengers" : "Guests"} htmlFor={`${id}-pax`} icon={Users}>
          <input id={`${id}-pax`} type="number" min={1} max={99} required value={f.passengers} onChange={set("passengers")} className={field} />
        </Field>
        <Field label={mode === "transfer" ? "Pick-up date" : "Tour date"} htmlFor={`${id}-date`} icon={CalendarDays}>
          <input id={`${id}-date`} type="date" required value={f.date} onChange={set("date")} className={field} />
        </Field>
        <Field label="Pick-up time" htmlFor={`${id}-time`} icon={Clock} optional={mode === "tour"}>
          <input id={`${id}-time`} type="time" required={mode === "transfer"} value={f.time} onChange={set("time")} className={field} />
        </Field>
        {mode === "transfer" ? (
          <Field label="Vehicle type" htmlFor={`${id}-vehicle`} icon={Car}>
            <select id={`${id}-vehicle`} value={f.vehicle} onChange={set("vehicle")} className={field}>
              {vehicles.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </Field>
        ) : (
          <div className="flex flex-col justify-end">
            {trip && (
              <Link
                href={trip.href}
                className="flex h-14 items-center justify-between rounded-full bg-sun-soft px-6 text-[15px] font-semibold text-navy transition-colors hover:bg-sun"
              >
                <span>
                  {trip.price === "On request" ? "Price on request" : <>From {trip.price} <span className="font-normal">/ person</span></>}
                </span>
                <span className="flex items-center gap-1 text-sm">
                  Details <ArrowUpRight className="size-4" aria-hidden />
                </span>
              </Link>
            )}
          </div>
        )}
      </div>

      <div className="mt-7 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p aria-live="polite" className="text-sm text-muted-ink">
          {mode === "transfer" ? (
            price !== undefined ? (
              <>
                Fixed price: <strong className="font-display text-lg text-navy">${price}</strong> per vehicle, one way.
              </>
            ) : (
              <>
                Fixed prices per vehicle — <Link href="/transfers" className="font-semibold text-ocean-ink underline-offset-2 hover:underline">see the price list</Link>.
              </>
            )
          ) : (
            "No payment now — we confirm availability on WhatsApp."
          )}
        </p>
        <button type="submit" className="btn-sun w-full px-8 uppercase sm:w-auto">
          Book on WhatsApp <WhatsAppIcon className="size-5" />
        </button>
      </div>
    </form>
  )
}

function Field({
  label,
  htmlFor,
  icon: Icon,
  optional,
  children,
}: {
  label: string
  htmlFor: string
  icon: React.ComponentType<{ className?: string }>
  optional?: boolean
  children: ReactNode
}) {
  return (
    <div className="grid min-w-0 gap-2">
      <label htmlFor={htmlFor} className="text-sm font-bold text-navy">
        {label} {optional && <span className="font-normal text-muted-ink">(optional)</span>}
      </label>
      <div className="relative">
        {children}
        <Icon className="pointer-events-none absolute top-1/2 right-5 size-5 -translate-y-1/2 text-muted-ink" aria-hidden />
      </div>
    </div>
  )
}
