import type { MetadataRoute } from "next"
import { allExperiences, hrefFor } from "@/lib/data"
import { site } from "@/lib/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/zanzibar-tours", "/safaris", "/packages", "/transfers", "/about", "/contact", "/privacy", "/terms"]
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...allExperiences.map((e) => ({ url: `${site.url}${hrefFor(e)}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ]
}
