import type { ReactNode } from "react"
import { PageHero } from "@/components/page-hero"

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <PageHero image="/img/tours/nakupenda.webp" eyebrow="The small print" title={title} crumbs={[{ href: "/", label: "Home" }, { label: title }]}>
        <p>Last updated: {updated}</p>
      </PageHero>
      <article className="container-x mt-14 max-w-3xl text-[17px] leading-relaxed text-ink/80 [&_a]:font-semibold [&_a]:text-ocean-ink [&_a]:underline-offset-2 hover:[&_a]:underline [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_li]:mt-1.5 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6">
        {children}
      </article>
    </>
  )
}
