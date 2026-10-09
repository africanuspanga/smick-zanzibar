import type { Experience } from "./types"
import { tours } from "./tours"
import { safaris } from "./safaris"
import { packages } from "./packages"

export type { Experience } from "./types"

const basePath: Record<Experience["kind"], string> = {
  tour: "/zanzibar-tours",
  safari: "/safaris",
  package: "/packages",
}

export function hrefFor(e: Pick<Experience, "kind" | "slug">) {
  return `${basePath[e.kind]}/${e.slug}`
}

export function formatPrice(e: Pick<Experience, "priceFrom">) {
  return e.priceFrom === undefined ? "On request" : `$${e.priceFrom.toLocaleString("en-US")}`
}

export const allExperiences: Experience[] = [...tours, ...safaris, ...packages]

/** Other experiences of the same kind, preferring the same category. */
export function related(e: Experience, count = 3) {
  const pool = allExperiences.filter((x) => x.kind === e.kind && x.slug !== e.slug)
  return [...pool.filter((x) => x.category === e.category), ...pool.filter((x) => x.category !== e.category)].slice(0, count)
}
