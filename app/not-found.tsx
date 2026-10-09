import Link from "next/link"
import { PageHero } from "@/components/page-hero"

export default function NotFound() {
  return (
    <PageHero image="/img/tours/nakupenda.webp" eyebrow="Pole sana!" title="This page drifted out to sea">
      <p>The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on course.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn-sun">
          Back to home
        </Link>
        <Link href="/zanzibar-tours" className="btn-ghost-light">
          Browse tours
        </Link>
      </div>
    </PageHero>
  )
}
