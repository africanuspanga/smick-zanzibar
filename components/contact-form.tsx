"use client"

import { useId, useState } from "react"
import { useRouter } from "next/navigation"
import { WhatsAppIcon } from "@/components/icons"
import { sendWhatsAppEnquiry } from "@/lib/analytics"
import { site } from "@/lib/site"

const field =
  "w-full rounded-xl border border-input bg-muted/60 px-4 py-3 text-[15px] text-ink outline-none transition focus:border-ocean focus:bg-white focus:ring-4 focus:ring-ocean/15"

const topics = ["Zanzibar excursion", "Safari", "Holiday package", "Airport / hotel transfer", "Boat party / group", "Something else"]

export function ContactForm() {
  const id = useId()
  const router = useRouter()
  const [form, setForm] = useState({ name: "", email: "", topic: topics[0], dates: "", message: "" })
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const body = () =>
    [
      `Hi ${site.shortName}!`,
      `Name: ${form.name}`,
      form.email ? `Email: ${form.email}` : null,
      `Interested in: ${form.topic}`,
      form.dates ? `Dates: ${form.dates}` : null,
      "",
      form.message,
    ]
      .filter((l) => l !== null)
      .join("\n")

  const sendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    sendWhatsAppEnquiry(body(), { form: "contact", trip: form.topic })
    router.push("/thank-you")
  }

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(`Enquiry: ${form.topic}`)}&body=${encodeURIComponent(body())}`

  return (
    <form onSubmit={sendWhatsApp} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor={`${id}-name`} className="text-sm font-semibold text-navy">
            Name
          </label>
          <input id={`${id}-name`} required autoComplete="name" value={form.name} onChange={set("name")} className={field} />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor={`${id}-email`} className="text-sm font-semibold text-navy">
            Email <span className="font-normal text-muted-ink">(optional)</span>
          </label>
          <input id={`${id}-email`} type="email" autoComplete="email" value={form.email} onChange={set("email")} className={field} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor={`${id}-topic`} className="text-sm font-semibold text-navy">
            I&apos;m interested in
          </label>
          <select id={`${id}-topic`} value={form.topic} onChange={set("topic")} className={field}>
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="grid gap-1.5">
          <label htmlFor={`${id}-dates`} className="text-sm font-semibold text-navy">
            Travel dates <span className="font-normal text-muted-ink">(optional)</span>
          </label>
          <input id={`${id}-dates`} value={form.dates} onChange={set("dates")} placeholder="e.g. 12–18 March" className={field} />
        </div>
      </div>
      <div className="grid gap-1.5">
        <label htmlFor={`${id}-msg`} className="text-sm font-semibold text-navy">
          Message
        </label>
        <textarea id={`${id}-msg`} required rows={5} value={form.message} onChange={set("message")} className={field} placeholder="Tell us about your trip…" />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="btn-sun flex-1">
          <WhatsAppIcon className="size-5" /> Send on WhatsApp
        </button>
        <a href={mailto} className="btn-outline flex-1">
          Send by email
        </a>
      </div>
    </form>
  )
}
