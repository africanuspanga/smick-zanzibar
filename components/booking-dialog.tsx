"use client"

import { useId, useState, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { WhatsAppIcon } from "@/components/icons"
import { sendWhatsAppEnquiry } from "@/lib/analytics"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

type Props = {
  trip: string
  trigger?: ReactNode
  className?: string
  label?: string
}

const field =
  "h-12 w-full rounded-xl border border-input bg-muted/60 px-4 text-[15px] text-ink outline-none transition focus:border-ocean focus:bg-white focus:ring-4 focus:ring-ocean/15"

export default function BookingDialog({ trip, trigger, className, label = "Book this trip" }: Props) {
  const id = useId()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: "", date: "", adults: "2", children: "0", hotel: "", message: "" })

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const lines = [
      `Hi ${site.shortName}! I'd like to book:`,
      `*${trip}*`,
      "",
      `Name: ${form.name}`,
      `Date: ${form.date}`,
      `Guests: ${form.adults} adult(s), ${form.children} child(ren)`,
      form.hotel ? `Hotel / pickup: ${form.hotel}` : null,
      form.message ? `Notes: ${form.message}` : null,
    ].filter((l) => l !== null)
    sendWhatsAppEnquiry(lines.join("\n"), { form: "booking", trip })
    setOpen(false)
    router.push("/thank-you")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <button type="button" className={cn("btn-sun", className)}>
            <WhatsAppIcon className="size-5" /> {label}
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="max-h-[92vh] overflow-y-auto rounded-3xl border-0 p-0 sm:max-w-lg [&>[data-slot=dialog-close]]:text-white">
        <div className="rounded-t-3xl bg-navy px-6 pt-7 pb-6 text-white">
          <DialogHeader className="text-left">
            <p className="font-script text-xl text-sun">Let&apos;s plan it</p>
            <DialogTitle className="font-display text-2xl text-white">{trip}</DialogTitle>
            <DialogDescription className="text-white/70">
              Fill in a few details and we&apos;ll continue the chat on WhatsApp. No payment needed now.
            </DialogDescription>
          </DialogHeader>
        </div>
        <form onSubmit={submit} className="grid gap-4 px-6 pt-2 pb-6">
          <Field label="Your name" htmlFor={`${id}-name`}>
            <input id={`${id}-name`} required autoComplete="name" value={form.name} onChange={set("name")} className={field} placeholder="Full name" />
          </Field>
          <Field label="Preferred date" htmlFor={`${id}-date`}>
            <input id={`${id}-date`} type="date" required value={form.date} onChange={set("date")} className={field} />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Adults" htmlFor={`${id}-adults`}>
              <input id={`${id}-adults`} type="number" min={1} required value={form.adults} onChange={set("adults")} className={field} />
            </Field>
            <Field label="Children" htmlFor={`${id}-children`}>
              <input id={`${id}-children`} type="number" min={0} value={form.children} onChange={set("children")} className={field} />
            </Field>
          </div>
          <Field label="Hotel or pickup location" htmlFor={`${id}-hotel`} optional>
            <input id={`${id}-hotel`} value={form.hotel} onChange={set("hotel")} className={field} placeholder="e.g. Hotel name, Nungwi" />
          </Field>
          <Field label="Anything else?" htmlFor={`${id}-msg`} optional>
            <textarea
              id={`${id}-msg`}
              rows={3}
              value={form.message}
              onChange={set("message")}
              className={cn(field, "h-auto py-3")}
              placeholder="Dietary needs, celebrations, questions…"
            />
          </Field>
          <button type="submit" className="btn-sun mt-1 w-full">
            <WhatsAppIcon className="size-5" /> Send on WhatsApp
          </button>
          <p className="text-center text-xs text-muted-ink">
            Prefer email? Write to{" "}
            <a className="font-semibold text-ocean-ink underline-offset-2 hover:underline" href={`mailto:${site.email}?subject=${encodeURIComponent(trip)}`}>
              {site.email}
            </a>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}

function Field({ label, htmlFor, optional, children }: { label: string; htmlFor: string; optional?: boolean; children: ReactNode }) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-navy">
        {label} {optional && <span className="font-normal text-muted-ink">(optional)</span>}
      </label>
      {children}
    </div>
  )
}
