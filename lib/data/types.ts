export type ExperienceKind = "tour" | "safari" | "package"

export type PriceTable = {
  title?: string
  note?: string
  rows: { label: string; price: string }[]
}

export type ItineraryStep = {
  title: string
  time?: string
  text?: string
  points?: string[]
}

export type Experience = {
  slug: string
  kind: ExperienceKind
  title: string
  tagline: string
  /** Short line used on cards. */
  summary: string
  category: string
  image: string
  gallery?: string[]
  duration: string
  groupSize: string
  location: string
  /** Lowest per-person price in USD; undefined means "price on request". */
  priceFrom?: number
  priceUnit?: string
  featured?: boolean
  overview: string[]
  highlights: string[]
  itinerary?: ItineraryStep[]
  itineraryTitle?: string
  pricing?: PriceTable[]
  included: string[]
  excluded?: string[]
  notes?: string[]
  extra?: { title: string; body: string[] }
}
