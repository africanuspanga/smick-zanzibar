import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ExperienceDetail } from "@/components/experience-detail"
import { getPackage, packages } from "@/lib/data/packages"

export const dynamicParams = false

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps<"/packages/[slug]">): Promise<Metadata> {
  const { slug } = await params
  const item = getPackage(slug)
  if (!item) return {}
  return {
    title: item.title.includes("Package") ? item.title : `${item.title} Holiday Package`,
    description: `${item.tagline}. ${item.summary}`,
    alternates: { canonical: `/packages/${item.slug}` },
    openGraph: { images: [item.image] },
  }
}

export default async function PackagePage({ params }: PageProps<"/packages/[slug]">) {
  const { slug } = await params
  const item = getPackage(slug)
  if (!item) notFound()
  return <ExperienceDetail item={item} />
}
