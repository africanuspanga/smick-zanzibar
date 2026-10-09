"use client"

import { useState } from "react"
import { ExperienceCard } from "@/components/experience-card"
import type { Experience } from "@/lib/data"
import { cn } from "@/lib/utils"

export function FilterableGrid({ items, categories }: { items: Experience[]; categories: readonly string[] }) {
  const [active, setActive] = useState<string>(categories[0])
  const shown = active === categories[0] ? items : items.filter((i) => i.category === active)

  return (
    <div>
      <div role="tablist" aria-label="Filter by type" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
        {categories.map((c) => {
          const count = c === categories[0] ? items.length : items.filter((i) => i.category === c).length
          return (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={cn(
                "shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                active === c ? "bg-navy text-white shadow-lg shadow-navy/20" : "bg-white text-navy ring-1 ring-line hover:ring-navy/30",
              )}
            >
              {c}
              <span className={cn("ml-2 text-xs", active === c ? "text-sun" : "text-muted-ink")}>{count}</span>
            </button>
          )
        })}
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((item, i) => (
          <ExperienceCard key={item.slug} item={item} priority={i < 3} />
        ))}
      </div>
    </div>
  )
}
