export type TransferGroup = {
  id: string
  title: string
  from: string
  /** Pickup points the prices apply from (either direction). */
  origins: string[]
  routes: { to: string; price: number }[]
}

export const transferGroups: TransferGroup[] = [
  {
    id: "airport",
    title: "Airport & ferry pickups",
    from: "Airport / Ferry port",
    origins: ["Airport", "Ferry port"],
    routes: [
      { to: "Stone Town", price: 15 },
      { to: "Chuini", price: 25 },
      { to: "Mangapwani", price: 30 },
      { to: "Chwaka", price: 40 },
      { to: "Paje", price: 40 },
      { to: "Bwejuu", price: 40 },
      { to: "Jambiani", price: 40 },
      { to: "Pwani Mchangani", price: 40 },
      { to: "Kiwengwa", price: 40 },
      { to: "Pongwe", price: 40 },
      { to: "Uroa / Marumbi", price: 40 },
      { to: "Matemwe", price: 40 },
      { to: "Fumba", price: 40 },
      { to: "Nungwi / Kendwa", price: 50 },
      { to: "Kizimkazi", price: 60 },
      { to: "Makunduchi", price: 60 },
      { to: "Michamvi", price: 60 },
    ],
  },
  {
    id: "south-north",
    title: "South-east to north-east coast",
    from: "Paje, Jambiani, Bwejuu, Michamvi, Makunduchi or Kizimkazi",
    origins: ["Paje", "Jambiani", "Bwejuu", "Michamvi", "Makunduchi", "Kizimkazi"],
    routes: [
      { to: "Kiwengwa", price: 60 },
      { to: "Pwani Mchangani", price: 60 },
      { to: "Marumbi", price: 60 },
      { to: "Uroa", price: 60 },
      { to: "Pongwe", price: 60 },
      { to: "Matemwe", price: 60 },
      { to: "Nungwi / Kendwa", price: 70 },
    ],
  },
  {
    id: "local",
    title: "Hotel to hotel — south coast",
    from: "Jambiani",
    origins: ["Jambiani"],
    routes: [
      { to: "Paje", price: 15 },
      { to: "Kizimkazi", price: 15 },
      { to: "Makunduchi", price: 15 },
      { to: "Bwejuu / Dongwe", price: 20 },
      { to: "Michamvi", price: 25 },
      { to: "Stone Town", price: 50 },
    ],
  },
]

/** Every named pickup / drop-off point, for location suggestions. */
export const transferPlaces = [
  ...new Set(transferGroups.flatMap((g) => [...g.origins, ...g.routes.flatMap((r) => r.to.split(" / "))])),
]

const norm = (s: string) => s.trim().toLowerCase()
const isAirport = (s: string) => /airport|ferry|port|aaki/.test(norm(s))
const matches = (input: string, place: string) => {
  const v = norm(input)
  if (!v) return false
  return place.split(" / ").some((p) => norm(p) === v || (v.length > 3 && v.includes(norm(p))))
}
const isOrigin = (input: string, origin: string) =>
  origin === "Airport" || origin === "Ferry port" ? isAirport(input) : matches(input, origin)

/** Fixed per-vehicle price between two places, if it is on the price list (either direction). */
export function findTransferPrice(a: string, b: string): number | undefined {
  for (const [from, to] of [
    [a, b],
    [b, a],
  ]) {
    for (const g of transferGroups) {
      if (!g.origins.some((o) => isOrigin(from, o))) continue
      const route = g.routes.find((r) => matches(to, r.to))
      if (route) return route.price
    }
  }
  return undefined
}

export const fleet = [
  { name: "Toyota Alphard", seats: "Up to 6 guests", image: "/img/vehicles/alphard-white.webp" },
  { name: "Toyota Hiace", seats: "Up to 10 guests", image: "/img/vehicles/hiace.webp" },
  { name: "Toyota Coaster", seats: "Up to 28 guests", image: "/img/vehicles/coaster.webp" },
]
