import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { extraServices } from "@/lib/data/extras"
import { site, whatsappUrl } from "@/lib/site"
import { cn } from "@/lib/utils"

/** "Extra services" grid — each card opens a WhatsApp chat asking for a quote. */
export function ExtraServices({ className }: { className?: string }) {
  return (
    <section className={cn("container-x", className)}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow="Extra services" title="Anything else for your holiday?">
          <p>Add these to any trip. Prices on request — just ask on WhatsApp.</p>
        </SectionHeading>
      </div>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {extraServices.map((x) => (
          <li key={x.title}>
            <a
              href={whatsappUrl(`Hi ${site.shortName}! I'd like a price for: ${x.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[1.75rem] p-5 text-white"
            >
              <Image
                src={x.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                className="-z-10 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent" />
              <span className="chip absolute top-4 left-4">On request</span>
              <span className="font-display text-xl font-bold">{x.title}</span>
              <span className="mt-1 text-sm text-white/85">{x.text}</span>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-sun">
                Ask for a price <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" aria-hidden />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
