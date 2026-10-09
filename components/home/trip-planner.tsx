"use client"

import { useId, useState } from "react"
import { useRouter } from "next/navigation"
import { CalendarDays, Compass, Users } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons"
import { sendWhatsAppEnquiry } from "@/lib/analytics"
import { site } from "@/lib/site"

const kinds = ["Zanzibar excursion", "Tanzania safari", "Holiday package", "Airport / hotel pickup", "Boat party / celebration"]

/** The floating "Place / Date / Guests" bar under the hero — sends a ready-made enquiry to WhatsApp. */
export function TripPlanner() {
  const id = useId()
  const router = useRouter()
  const [kind, setKind] = useState(kinds[0])
  const [date, setDate] = useState("")
  const [guests, setGuests] = useState("2")

  const go = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = [
      `Hi ${site.shortName}! I'm planning a trip.`,
      `Looking for: ${kind}`,
      date && `Date: ${date}`,
      `Guests: ${guests}`,
      "What do you recommend?",
    ]
      .filter(Boolean)
      .join("\n")
    sendWhatsAppEnquiry(msg, { form: "trip_planner", trip: kind })
    router.push("/thank-you")
  }

  const label = "flex items-center gap-1.5 text-xs font-semibold tracking-wide text-muted-ink uppercase"
  const control =
    "mt-1 w-full appearance-none bg-transparent font-display text-lg font-semibold text-navy outline-none focus-visible:underline focus-visible:decoration-sun focus-visible:decoration-2 focus-visible:underline-offset-4"

  return (
    <form
      onSubmit={go}
      className="grid gap-4 rounded-[1.75rem] bg-white p-5 shadow-[0_30px_70px_-30px_rgba(6,26,53,0.55)] ring-1 ring-line sm:grid-cols-2 sm:p-6 lg:grid-cols-[auto_1.3fr_1fr_0.8fr_auto] lg:items-center lg:gap-8 lg:px-9"
    >
      <p className="hidden font-display text-2xl font-extrabold text-navy lg:block">Plan</p>
      <div className="min-w-0">
        <label htmlFor={`${id}-kind`} className={label}>
          <Compass className="size-3.5 text-sun-ink" aria-hidden /> Experience
        </label>
        <select id={`${id}-kind`} value={kind} onChange={(e) => setKind(e.target.value)} className={control}>
          {kinds.map((k) => (
            <option key={k}>{k}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor={`${id}-date`} className={label}>
          <CalendarDays className="size-3.5 text-sun-ink" aria-hidden /> Date
        </label>
        <input id={`${id}-date`} type="date" value={date} onChange={(e) => setDate(e.target.value)} className={control} />
      </div>
      <div>
        <label htmlFor={`${id}-guests`} className={label}>
          <Users className="size-3.5 text-sun-ink" aria-hidden /> Guests
        </label>
        <input
          id={`${id}-guests`}
          type="number"
          min={1}
          max={99}
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className={control}
        />
      </div>
      <button type="submit" className="btn-navy w-full sm:col-span-2 lg:col-span-1 lg:w-auto">
        <WhatsAppIcon className="size-4" /> Plan my trip
      </button>
    </form>
  )
}
