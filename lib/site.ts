export const site = {
  name: "SMICK Tours & Safaris",
  shortName: "SMICK",
  tagline: "Explore • Discover • Experience",
  description:
    "Stone Town tour agency for Zanzibar excursions, airport & hotel pickups, holiday packages and Tanzania safaris to Serengeti, Ngorongoro and Mikumi.",
  url: "https://www.smickzanzibar.com",
  phone: "+255 673 494 502",
  phoneHref: "tel:+255673494502",
  whatsapp: "255673494502",
  whatsappLink: "https://wa.me/smickwaves",
  email: "Iconibreezy@icloud.com",
  location: "Stone Town, Zanzibar, Tanzania",
  regions: "Tanzania | Zanzibar",
} as const

/** Builds a wa.me link that opens a chat with a prefilled message. */
export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const nav = [
  { href: "/", label: "Home" },
  { href: "/zanzibar-tours", label: "Zanzibar Tours" },
  { href: "/safaris", label: "Safaris" },
  { href: "/packages", label: "Packages" },
  { href: "/transfers", label: "Transfers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const
