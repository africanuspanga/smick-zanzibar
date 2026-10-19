export type RentalCar = {
  id: string
  name: string
  type: string
  seats: string
  image: string
  points: string[]
}

/** Rental fleet. Rates depend on dates and options, so every car is priced on request. */
export const rentalCars: RentalCar[] = [
  {
    id: "corolla",
    name: "Toyota Corolla",
    type: "Saloon",
    seats: "1–4 guests",
    image: "/img/rental/corolla.webp",
    points: ["Air conditioning", "Automatic", "Ideal for couples & town driving"],
  },
  {
    id: "rav4",
    name: "Toyota RAV4",
    type: "4x4 SUV",
    seats: "1–5 guests",
    image: "/img/rental/rav4.webp",
    points: ["Air conditioning", "Good on dirt roads", "Ideal for exploring the whole island"],
  },
  {
    id: "alphard",
    name: "Toyota Alphard",
    type: "Luxury van",
    seats: "1–6 guests",
    image: "/img/vehicles/alphard-white.webp",
    points: ["Air conditioning", "Spacious leather seats", "Ideal for families"],
  },
  {
    id: "hiace",
    name: "Toyota Hiace",
    type: "Minibus",
    seats: "1–10 guests",
    image: "/img/vehicles/hiace.webp",
    points: ["Air conditioning", "Room for luggage", "Ideal for groups"],
  },
]

export const rentalRequirements = [
  "A valid driving licence from your home country",
  "Your passport or national ID",
  "A Zanzibar driving permit — we arrange it for you",
  "A quick vehicle check together before you leave (feel free to film it)",
  "A simple rental agreement, signed at handover",
]
