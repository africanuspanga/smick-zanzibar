"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ExperienceCard } from "@/components/experience-card"
import type { Experience } from "@/lib/data"
import { cn } from "@/lib/utils"

type Group = { label: string; href: string; items: Experience[] }

export function BestPicks({ groups }: { groups: Group[] }) {
  const [active, setActive] = useState(0)
  const group = groups[active]

  return (
    <div>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-3xl leading-tight font-bold sm:text-4xl lg:text-[2.85rem]">Best picks</h2>
        <div role="tablist" aria-label="Trip type" className="flex gap-1 rounded-full bg-white p-1 ring-1 ring-line">
          {groups.map((g, i) => (
            <button
              key={g.label}
              type="button"
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors sm:px-5",
                active === i ? "bg-navy text-white" : "text-muted-ink hover:text-navy",
              )}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {group.items.map((item) => (
          <ExperienceCard key={item.slug} item={item} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link href={group.href} className="btn-outline">
          See all {group.label.toLowerCase()} <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
    </div>
  )
}
