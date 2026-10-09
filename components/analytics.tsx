"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Script from "next/script"
import { GA_ID, captureUtm, readConsent, track, writeConsent } from "@/lib/analytics"

/** UTM capture, contact-click events and (when NEXT_PUBLIC_GA_ID is set) consent-gated GA4. */
export default function Analytics() {
  const [consent, setConsent] = useState<"granted" | "denied" | null | "unknown">("unknown")

  useEffect(() => {
    captureUtm()
    setConsent(readConsent())

    // One listener covers every WhatsApp, phone and email link on the site.
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a")
      const href = a?.getAttribute("href") ?? ""
      if (href.includes("wa.me/")) track("whatsapp_click", { page: location.pathname })
      else if (href.startsWith("tel:")) track("phone_click", { page: location.pathname })
      else if (href.startsWith("mailto:")) track("email_click", { page: location.pathname })
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])

  if (!GA_ID) return null

  const choose = (value: "granted" | "denied") => {
    writeConsent(value)
    setConsent(value)
  }

  return (
    <>
      {consent === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
          </Script>
        </>
      )}
      {consent === null && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          className="fixed inset-x-3 bottom-3 z-50 mx-auto flex max-w-xl flex-col gap-4 rounded-3xl bg-white p-5 text-sm text-ink shadow-[0_20px_60px_-20px_rgba(6,26,53,0.5)] ring-1 ring-line sm:flex-row sm:items-center"
        >
          <p className="flex-1">
            We&apos;d like to use analytics cookies to see which pages help travellers most.{" "}
            <Link href="/privacy" className="font-semibold text-ocean-ink underline">
              Privacy policy
            </Link>
          </p>
          <div className="flex shrink-0 gap-2">
            <button type="button" onClick={() => choose("denied")} className="btn-outline !px-4 !py-2.5 text-sm">
              Decline
            </button>
            <button type="button" onClick={() => choose("granted")} className="btn-navy !px-4 !py-2.5 text-sm">
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  )
}
