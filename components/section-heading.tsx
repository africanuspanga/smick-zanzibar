import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
  light,
  className,
}: {
  eyebrow?: string
  title: ReactNode
  children?: ReactNode
  align?: "left" | "center"
  light?: boolean
  className?: string
}) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", "max-w-2xl", className)}>
      {eyebrow && (
        <p className={cn("eyebrow", light && "text-sun")}>
          <span aria-hidden className={cn("h-px w-6", light ? "bg-sun" : "bg-ocean")} />
          {eyebrow}
        </p>
      )}
      <h2 className={cn("mt-3 text-3xl leading-[1.08] font-bold sm:text-4xl lg:text-[2.85rem]", light && "text-white")}>{title}</h2>
      {children && <div className={cn("mt-4 text-base sm:text-lg", light ? "text-white/75" : "text-muted-ink")}>{children}</div>}
    </div>
  )
}
