import Image from "next/image"
import { cn } from "@/lib/utils"

/**
 * The scene from the SMICK logo (sunset savannah + ocean) cropped into a pill, plus the wordmark.
 * The full logo's lettering is unreadable at nav size, so the wordmark is set in type instead.
 */
export function BrandMark({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <Image
        src="/img/brand/smick-scene-192.webp"
        alt=""
        width={409}
        height={192}
        loading="eager"
        className="h-11 w-auto shrink-0 rounded-full shadow-[0_6px_18px_-6px_rgba(6,26,53,0.55)] ring-2 ring-white sm:h-12"
      />
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
