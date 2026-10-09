/**
 * Client-side analytics helpers.
 *
 * Google Analytics 4 is optional: set NEXT_PUBLIC_GA_ID at build time to enable it.
 * GA only loads after the visitor accepts the cookie banner. Without an ID the site
 * sets no cookies and these helpers are no-ops (UTM capture still works).
 */
import { whatsappUrl } from "@/lib/site"

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? ""

export const CONSENT_KEY = "smick_consent"
const UTM_KEY = "smick_utm"
const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const

type Gtag = (...args: unknown[]) => void
declare global {
  interface Window {
    gtag?: Gtag
    dataLayer?: unknown[]
  }
}

export function track(event: string, params: Record<string, string | number | undefined> = {}) {
  window.gtag?.("event", event, params)
}

function safeStorage(kind: "local" | "session") {
  try {
    return kind === "local" ? window.localStorage : window.sessionStorage
  } catch {
    return null
  }
}

export function readConsent(): "granted" | "denied" | null {
  const v = safeStorage("local")?.getItem(CONSENT_KEY)
  return v === "granted" || v === "denied" ? v : null
}

export function writeConsent(value: "granted" | "denied") {
  safeStorage("local")?.setItem(CONSENT_KEY, value)
}

/** Stores the first UTM parameters a visitor lands with, for this browser session. */
export function captureUtm() {
  const store = safeStorage("session")
  if (!store || store.getItem(UTM_KEY)) return
  const params = new URLSearchParams(window.location.search)
  const utm = Object.fromEntries(UTM_PARAMS.flatMap((k) => (params.get(k) ? [[k, params.get(k)!]] : [])))
  if (Object.keys(utm).length) store.setItem(UTM_KEY, JSON.stringify(utm))
}

function utmTag() {
  try {
    const raw = safeStorage("session")?.getItem(UTM_KEY)
    if (!raw) return ""
    const u = JSON.parse(raw) as Record<string, string>
    return [u.utm_source, u.utm_medium, u.utm_campaign].filter(Boolean).join(" / ")
  } catch {
    return ""
  }
}

/** Opens a WhatsApp chat with the message (plus campaign ref, if any) and records a lead event. */
export function sendWhatsAppEnquiry(message: string, meta: { form: string; trip?: string }) {
  const ref = utmTag()
  window.open(whatsappUrl(ref ? `${message}\n\n(Ref: ${ref})` : message), "_blank", "noopener,noreferrer")
  track("generate_lead", { method: "whatsapp", form: meta.form, trip: meta.trip })
}
