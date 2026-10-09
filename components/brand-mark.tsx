import Image from "next/image"
import { cn } from "@/lib/utils"

/** Logo emblem in a white badge (the artwork has dark lettering) plus the wordmark. */
export function BrandMark({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-full bg-white shadow-md ring-1 ring-black/5 sm:size-13">
        <Image src="/img/brand/smick-logo-128.webp" alt="" width={128} height={128} loading="eager" className="aspect-square size-[108%] max-w-none object-contain" />
      </span>
      <span className="leading-none">
        <span className={cn("block font-display text-xl font-extrabold tracking-tight", light ? "text-white" : "text-navy")}>
          SMICK
        </span>
        <span
          className={cn(
            "mt-0.5 block text-[10.5px] font-bold tracking-[0.18em] uppercase",
            light ? "text-white/80" : "text-ocean-ink",
          )}
        >
          Tours &amp; Safaris
        </span>
      </span>
    </span>
  )
}
