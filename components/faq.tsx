import { Plus } from "lucide-react"
import { JsonLd } from "@/components/json-ld"
import { SectionHeading } from "@/components/section-heading"
import { faqs } from "@/lib/data/faq"

export function Faq({ className }: { className?: string }) {
  return (
    <section className={`container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] ${className ?? ""}`}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
      <SectionHeading eyebrow="Good to know" title="Frequently asked questions">
        <p>Can&apos;t find your answer? Ask us on WhatsApp — we reply fast.</p>
      </SectionHeading>
      <div className="space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-2xl bg-white ring-1 ring-line open:shadow-[0_16px_40px_-24px_rgba(11,42,82,0.4)]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display text-lg font-semibold text-navy [&::-webkit-details-marker]:hidden">
              {f.q}
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-sun-soft text-navy transition-transform group-open:rotate-45">
                <Plus className="size-4" aria-hidden />
              </span>
            </summary>
            <p className="px-5 pb-5 leading-relaxed text-ink/75">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
