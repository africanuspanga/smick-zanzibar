import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Clock, MapPin } from "lucide-react"
import { formatPrice, hrefFor, type Experience } from "@/lib/data"
import { cn } from "@/lib/utils"

export function ExperienceCard({ item, className, priority }: { item: Experience; className?: string; priority?: boolean }) {
  return (
    <Link
      href={hrefFor(item)}
      className={cn(
        "group card-lift flex flex-col overflow-hidden rounded-[1.75rem] bg-white p-2.5 shadow-[0_10px_30px_-18px_rgba(11,42,82,0.35)] ring-1 ring-line",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="chip absolute top-3 left-3">{item.category}</span>
        <span className="chip absolute top-3 right-3">
          <Clock className="size-3.5 text-sun-ink" aria-hidden />
          {item.duration}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-2.5 pt-4 pb-2">
        <h3 className="text-lg leading-snug font-bold">{item.title}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-ink">
          <MapPin className="size-3.5 shrink-0 text-ocean-ink" aria-hidden />
          {item.location}
        </p>
        <p className="mt-2 line-clamp-2 text-sm text-muted-ink">{item.summary}</p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <div>
            <p className="text-[11px] font-semibold tracking-wider text-muted-ink uppercase">
              {item.priceFrom === undefined ? "Price" : "Start from"}
            </p>
            <p className="font-display text-xl font-bold text-navy">
              {formatPrice(item)}
              {item.priceFrom !== undefined && <span className="ml-1 text-xs font-medium text-muted-ink">/ person</span>}
            </p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-sun/60 px-3.5 py-1.5 text-sm font-semibold text-sun-ink transition-colors group-hover:bg-sun group-hover:text-navy-deep">
            Details <ArrowUpRight className="size-4" aria-hidden />
          </span>
        </div>
      </div>
    </Link>
  )
}
