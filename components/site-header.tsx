"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone, X } from "lucide-react"
import { BrandMark } from "@/components/brand-mark"
import { nav, site, whatsappUrl } from "@/lib/site"
import { cn } from "@/lib/utils"

export default function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  // While the mobile menu is open: lock scroll, make the page behind it inert, close on Escape.
  useEffect(() => {
    if (!open) return
    const behind = [document.querySelector("main"), document.querySelector("footer")].filter(Boolean) as HTMLElement[]
    document.body.style.overflow = "hidden"
    behind.forEach((el) => (el.inert = true))
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      behind.forEach((el) => (el.inert = false))
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  const solid = scrolled || open
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full py-2 pr-2 pl-2 transition-all duration-300 sm:pl-3",
          solid ? "bg-white/95 shadow-[0_12px_40px_-18px_rgba(6,26,53,0.45)] backdrop-blur-xl" : "bg-transparent",
        )}
      >
        <Link href="/" className="shrink-0">
          <BrandMark light={!solid} />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3.5 py-2 text-[14.5px] font-semibold transition-colors",
                solid
                  ? isActive(item.href)
                    ? "bg-navy text-white"
                    : "text-navy hover:bg-navy/5"
                  : isActive(item.href)
                    ? "bg-white text-navy"
                    : "text-white hover:bg-white/15",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className={cn(
              "hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold xl:flex",
              solid ? "text-navy" : "text-white",
            )}
          >
            <Phone className="size-4" aria-hidden />
            {site.phone}
          </a>
          <a
            href={whatsappUrl(`Hi ${site.shortName}! I'd like to plan a trip.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sun hidden !px-5 !py-2.5 text-sm sm:inline-flex"
          >
            Book now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className={cn(
              "grid size-11 place-items-center rounded-full transition-colors lg:hidden",
              solid ? "bg-navy text-white" : "bg-white/15 text-white backdrop-blur-md",
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "mx-auto mt-2 max-w-7xl origin-top overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-300 lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col p-3">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-2xl px-4 py-3.5 text-lg font-semibold",
                isActive(item.href) ? "bg-sun-soft text-navy" : "text-navy hover:bg-muted",
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 grid gap-2 border-t border-line p-2 pt-4">
            <a href={whatsappUrl(`Hi ${site.shortName}! I'd like to plan a trip.`)} target="_blank" rel="noopener noreferrer" className="btn-sun w-full">
              Book on WhatsApp
            </a>
            <a href={site.phoneHref} className="btn-outline w-full">
              <Phone className="size-4" aria-hidden /> {site.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
