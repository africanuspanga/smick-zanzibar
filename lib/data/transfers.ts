export type TransferGroup = {
  id: string
  title: string
  from: string
  routes: { to: string; price: number }[]
}

export const transferGroups: TransferGroup[] = [
  {
    id: "airport",
    title: "Airport & ferry pickups",
    from: "Airport / Ferry port",
    routes: [
      { to: "Stone Town", price: 15 },
      { to: "Chuini", price: 20 },
      { to: "Mangapwani", price: 30 },
      { to: "Chwaka", price: 30 },
      { to: "Paje", price: 40 },
      { to: "Bwejuu", price: 40 },
      { to: "Michamvi", price: 40 },
      { to: "Jambiani", price: 40 },
      { to: "Makunduchi", price: 40 },
      { to: "Kizimkazi", price: 40 },
      { to: "Pwani Mchangani", price: 40 },
      { to: "Kiwengwa", price: 40 },
      { to: "Pongwe", price: 40 },
      { to: "Uroa / Marumbi", price: 40 },
      { to: "Fumba", price: 60 },
      { to: "Nungwi / Kendwa", price: 80 },
      { to: "Matemwe", price: 80 },
    ],
  },
  {
    id: "south-north",
    title: "South-east to north-east coast",
    from: "Jambiani, Bwejuu, Michamvi, Makunduchi or Kizimkazi",
    routes: [
      { to: "Kiwengwa", price: 50 },
      { to: "Pwani Mchangani", price: 50 },
      { to: "Marumbi", price: 50 },
      { to: "Uroa", price: 50 },
      { to: "Pongwe", price: 50 },
      { to: "Matemwe", price: 50 },
      { to: "Nungwi / Kendwa", price: 50 },
    ],
  },
  {
    id: "local",
    title: "Hotel to hotel — south coast",
    from: "Jambiani",
    routes: [
      { to: "Paje / Bwejuu / Dongwe", price: 15 },
      { to: "Makunduchi", price: 15 },
      { to: "Michamvi", price: 20 },
      { to: "Kizimkazi", price: 20 },
      { to: "Stone Town", price: 50 },
    ],
  },
]

export const fleet = [
  { name: "Toyota Alphard", seats: "Up to 6 guests", image: "/img/vehicles/alphard-white.webp" },
  { name: "Toyota Hiace", seats: "Up to 10 guests", image: "/img/vehicles/hiace.webp" },
  { name: "Toyota Coaster", seats: "Up to 28 guests", image: "/img/vehicles/coaster.webp" },
]
