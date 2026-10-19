import Image from "next/image"
import { ArrowUpRight, Star } from "lucide-react"
import { GoogleIcon } from "@/components/icons"
import { site } from "@/lib/site"

/** Asks past guests to leave a review on SMICK's Google Business Profile. */
export function GoogleReview({ className }: { className?: string }) {
  return (
    <section className={`container-x ${className ?? ""}`}>
      <div className="relative isolate grid overflow-hidden rounded-[2rem] bg-navy text-white lg:grid-cols-[1.15fr_1fr]">
        <div className="p-8 sm:p-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy">
            <GoogleIcon className="size-4" /> Google reviews
          </span>
          <h2 className="mt-6 text-3xl leading-tight font-extrabold text-white sm:text-5xl">
            Travelled with me?
            <br />
            <span className="text-sun">Leave a review on Google</span>
          </h2>
          <p className="mt-4 max-w-md text-lg text-white/80">
            It takes a minute and helps other travellers find a local agent they can trust. Asante sana!
          </p>
          <div aria-hidden className="mt-6 flex gap-1.5 text-sun">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className="size-7 fill-current" />
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={site.googleReviewUrl} target="_blank" rel="noopener noreferrer" className="btn-sun group">
              <GoogleIcon className="size-5 rounded-full bg-white p-0.5" /> Write a Google review
              <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" aria-hidden />
            </a>
            <a href={site.googleProfileUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost-light">
              Read reviews
            </a>
          </div>
        </div>
        <div className="relative min-h-72">
          <Image
            src="/img/moments/sandbank-fruits.webp"
            alt="Fresh fruit served to guests on the sandbank"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-navy via-navy/20 to-transparent max-lg:bg-gradient-to-b" />
        </div>
      </div>
    </section>
  )
}
