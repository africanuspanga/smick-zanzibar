import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ExperienceDetail } from "@/components/experience-detail"
import { getTour, tours } from "@/lib/data/tours"

export const dynamicParams = false

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: PageProps<"/zanzibar-tours/[slug]">): Promise<Metadata> {
  const { slug } = await params
  const tour = getTour(slug)
  if (!tour) return {}
  return {
    title: `${tour.title} — Zanzibar Tour`,
    description: `${tour.tagline}. ${tour.summary}`,
    alternates: { canonical: `/zanzibar-tours/${tour.slug}` },
    openGraph: { images: [tour.image] },
  }
}

export default async function TourPage({ params }: PageProps<"/zanzibar-tours/[slug]">) {
  const { slug } = await params
  const tour = getTour(slug)
  if (!tour) notFound()
  return <ExperienceDetail item={tour} />
}
