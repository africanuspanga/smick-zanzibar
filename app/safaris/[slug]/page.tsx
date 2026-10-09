import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ExperienceDetail } from "@/components/experience-detail"
import { getSafari, safaris } from "@/lib/data/safaris"

export const dynamicParams = false

export function generateStaticParams() {
  return safaris.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: PageProps<"/safaris/[slug]">): Promise<Metadata> {
  const { slug } = await params
  const item = getSafari(slug)
  if (!item) return {}
  return {
    title: `${item.title} — Tanzania Safari`,
    description: `${item.tagline}. ${item.summary}`,
    alternates: { canonical: `/safaris/${item.slug}` },
    openGraph: { images: [item.image] },
  }
}

export default async function SafariPage({ params }: PageProps<"/safaris/[slug]">) {
  const { slug } = await params
  const item = getSafari(slug)
  if (!item) notFound()
  return <ExperienceDetail item={item} />
}
