import type { Experience, ItineraryStep } from "./types"

const arrival = (): ItineraryStep => ({
  title: "Arrival & transfer to your hotel",
  points: [
    "Arrive at Abeid Amani Karume International Airport",
    "Our driver waits just outside arrivals with your name on a sign",
    "Send us your flight details when you confirm — the transfer is included",
  ],
})

const departure = (days: string): ItineraryStep => ({
  title: "Transfer to the airport — kwaheri!",
  points: [
    `After ${days} in Zanzibar it's time to fly home`,
    "Your driver picks you up from the hotel based on your flight time",
    "Leave with lots of memories and a few souvenirs too",
  ],
})

const safariBlue: ItineraryStep = {
  title: "Full-day Safari Blue",
  points: [
    "Sail around mangroves and snorkel in Menai Bay, one of Zanzibar's best coral reefs",
    "Kwale Island lagoon, sandbank relaxing, swimming & snorkelling",
    "Fresh seafood BBQ — octopus, lobster, squid, calamari and fish",
    "Tropical fruit tasting",
  ],
}

const cityDay: ItineraryStep = {
  title: "Stone Town, Spice Farm & Prison Island",
  points: [
    "Taste and smell the spices of Zanzibar — cardamom, cinnamon, black pepper, cloves",
    "Discover Stone Town's history and culture with a local guide",
    "Spiced rice lunch at the farm with tropical fruits",
    "Meet the Aldabra giant tortoises on Prison Island",
  ],
}

const mnemba: ItineraryStep = {
  title: "Half day — Mnemba dolphins & snorkelling",
  points: [
    "Swim with dolphins and take stunning photos",
    "Snorkel among colourful fish and coral around Mnemba Atoll",
    "Discover the north-east coast and Matemwe beach",
  ],
}

const relax: ItineraryStep = {
  title: "Beach day",
  points: ["No activities planned — enjoy your hotel and the beach", "Want more? Add any excursion from our list"],
}

const kayak: ItineraryStep = {
  title: "Mangrove kayaking",
  points: [
    "Paddle through natural mangrove forest",
    "Spot marine life in crystal clear water",
    "Expert guides explain why mangroves matter",
    "Fresh local fruits on the way",
  ],
}

const nakupendaPrison: ItineraryStep = {
  title: "Nakupenda Sandbank & Prison Island",
  points: [
    "Feed and photograph the giant tortoises on Prison Island",
    "Swim and relax on Nakupenda's white sandbank",
    "Seafood BBQ and tropical fruits",
  ],
}

const moveNorthJozani: ItineraryStep = {
  title: "Jozani Forest & move to Nungwi",
  points: [
    "Check out of your south-coast hotel",
    "Visit Jozani Forest to meet the red colobus monkeys on the way",
    "Check in to your hotel in Nungwi or Kendwa",
  ],
}

const packageIncludes = [
  "Accommodation",
  "Return airport – hotel transfers",
  "Breakfast & dinner",
  "Transport during excursions",
  "Entrance fees",
  "Drinking water on excursions",
  "Professional driver/guide",
  "All taxes and VAT",
  "Local SIM card",
]

const howToBook =
  "Booking is simple: send us an enquiry and we'll reply with three options — 5-star, 4-star and 3-star hotels — so you can choose the one that fits your budget."

export const packages: Experience[] = [
  {
    slug: "zanzibar-3-days",
    kind: "package",
    title: "Zanzibar 3 Days / 2 Nights",
    tagline: "A short beach escape with the island's highlights",
    summary: "Stone Town, spice farm and Prison Island in one easy trip.",
    category: "Short stay",
    image: "/img/tours/beach-boats.webp",
    duration: "3 days / 2 nights",
    groupSize: "Any group size",
    location: "Zanzibar",
    priceFrom: 398,
    overview: [
      "Visiting Zanzibar for three days? This package includes your hotel, airport transfers and the island's must-do cultural day, so you don't have to plan a thing.",
      howToBook,
    ],
    highlights: ["Hotel with breakfast & dinner", "Airport transfers", "Stone Town, Spice Farm & Prison Island"],
    itinerary: [arrival(), cityDay, departure("three days")],
    included: packageIncludes,
  },
  {
    slug: "zanzibar-4-days",
    kind: "package",
    title: "Zanzibar 4 Days / 3 Nights",
    tagline: "Culture, tortoises and dolphins",
    summary: "Add a morning with dolphins to the classic cultural day.",
    category: "Short stay",
    image: "/img/tours/dolphins-2.webp",
    duration: "4 days / 3 nights",
    groupSize: "Any group size",
    location: "Zanzibar",
    priceFrom: 617,
    overview: [
      "Four days with everything arranged: hotel, transfers, the classic Stone Town & spice day and a half day swimming with dolphins at Mnemba.",
      howToBook,
    ],
    highlights: ["Hotel with breakfast & dinner", "Airport transfers", "Stone Town, Spice Farm & Prison Island", "Mnemba dolphins & snorkelling"],
    itinerary: [arrival(), cityDay, mnemba, departure("four days")],
    included: packageIncludes,
  },
  {
    slug: "zanzibar-5-day-tours",
    kind: "package",
    title: "5-Day Zanzibar Tour Package",
    tagline: "Five days, five of the island's best excursions",
    summary: "Tours only — perfect if you've already booked your hotel.",
    category: "Tours only",
    image: "/img/tours/kendwa.webp",
    duration: "5 days",
    groupSize: "Any group size",
    location: "Zanzibar",
    priceFrom: 390,
    featured: true,
    overview: [
      "Already have your hotel? This package bundles five of Zanzibar's best excursions — sea, forest, history, tortoises and spices — with transport, guides and meals included.",
    ],
    highlights: ["Safari Blue", "Jozani Forest", "Stone Town", "Prison Island", "Spice Farm & The Rock restaurant"],
    itinerary: [
      { title: "Safari Blue", text: "Full day in Menai Bay: sailing, snorkelling, sandbank and seafood BBQ on Kwale Island." },
      { title: "Jozani Forest", text: "Walk the forest trails and meet the red colobus monkeys found only in Zanzibar." },
      { title: "Stone Town", text: "House of Wonders, Old Fort, Sultan's Palace, Freddie Mercury House and the bazaars." },
      { title: "Prison Island", text: "Boat ride to Changuu Island, giant tortoises, beach and snorkelling." },
      { title: "Spice Farm & The Rock", text: "See, smell and taste Zanzibar's spices, then lunch at the famous Rock restaurant." },
    ],
    included: [
      "English-speaking guide",
      "All entrance and park fees",
      "Transport throughout the tour",
      "Lunch at The Rock restaurant",
      "Seafood BBQ on Safari Blue",
      "Snorkelling equipment",
      "Bottled water",
      "Hotel pickup and drop-off",
    ],
    excluded: ["Accommodation"],
  },
  {
    slug: "zanzibar-5-days",
    kind: "package",
    title: "Zanzibar 5 Days / 4 Nights",
    tagline: "The Spice Island adventure",
    summary: "Safari Blue, dolphins and the classic cultural day.",
    category: "Holiday",
    image: "/img/tours/safari-blue-2.webp",
    duration: "5 days / 4 nights",
    groupSize: "Any group size",
    location: "Zanzibar",
    priceFrom: 740,
    featured: true,
    overview: [
      "Five days that balance ocean adventures and culture: a full day of Safari Blue, swimming with dolphins at Mnemba and the Stone Town, spice farm and Prison Island tour.",
      howToBook,
    ],
    highlights: ["Safari Blue", "Mnemba dolphins & snorkelling", "Stone Town, Spice Farm & Prison Island"],
    itinerary: [arrival(), safariBlue, mnemba, cityDay, departure("five days")],
    included: packageIncludes,
  },
  {
    slug: "zanzibar-7-days",
    kind: "package",
    title: "Zanzibar 7 Days / 6 Nights",
    tagline: "Tropical discovery with time to relax",
    summary: "A full week of excursions with a beach day in between.",
    category: "Holiday",
    image: "/img/tours/sunset-dhow-3.webp",
    duration: "7 days / 6 nights",
    groupSize: "Any group size",
    location: "Zanzibar",
    priceFrom: 1298,
    featured: true,
    overview: [
      "A full week in paradise: Safari Blue, dolphins, Jozani Forest, Stone Town and a lunch at The Rock — with a free beach day to slow down.",
      howToBook,
    ],
    highlights: ["Safari Blue", "Beach day", "Stone Town, Spice Farm & Prison Island", "Mnemba dolphins", "Jozani Forest & The Rock"],
    itinerary: [
      arrival(),
      safariBlue,
      relax,
      cityDay,
      mnemba,
      {
        title: "Jozani Forest & The Rock",
        points: [
          "Playful red colobus monkeys found only in Zanzibar",
          "Learn how herbs are used in Zanzibari culture",
          "Lunch at the famous Rock restaurant",
        ],
      },
      departure("seven days"),
    ],
    included: packageIncludes,
  },
  {
    slug: "zanzibar-8-days",
    kind: "package",
    title: "Zanzibar 8 Days / 7 Nights",
    tagline: "The ultimate island tour — south and north coast",
    summary: "Split your stay between the south coast and Nungwi.",
    category: "Holiday",
    image: "/img/tours/luxury-villa.webp",
    duration: "8 days / 7 nights",
    groupSize: "Any group size",
    location: "Zanzibar",
    priceFrom: 1340,
    overview: [
      "Eight days, two coasts. Start in the south with Safari Blue, Jozani Forest and the cultural day, then move to Nungwi or Kendwa for sunsets, beach time and dolphins.",
      howToBook,
    ],
    highlights: ["Safari Blue", "Jozani Forest", "Stone Town, Spice Farm & Prison Island", "Two hotels: south & north", "Mnemba dolphins"],
    itinerary: [
      arrival(),
      safariBlue,
      {
        title: "Jozani Forest",
        points: ["Meet the red colobus monkeys", "Walk Zanzibar's largest forest and learn its history"],
      },
      cityDay,
      {
        title: "Move to Nungwi",
        points: ["Transfer from your south-coast hotel to Nungwi or Kendwa beach"],
      },
      { title: "Chill day", points: ["Sunbathing, swimming and sunset on the beach"] },
      mnemba,
      departure("eight days"),
    ],
    included: packageIncludes,
  },
  {
    slug: "zanzibar-9-days",
    kind: "package",
    title: "Zanzibar 9 Days / 8 Nights",
    tagline: "An extended beach holiday with the best excursions",
    summary: "Safari Blue, mangrove kayaking, Jozani and plenty of beach time.",
    category: "Holiday",
    image: "/img/tours/honeymoon.webp",
    duration: "9 days / 8 nights",
    groupSize: "Any group size",
    location: "Zanzibar",
    priceFrom: 1430,
    overview: [
      "Nine days to explore and unwind: Safari Blue, mangrove kayaking, the cultural day, Jozani Forest, dolphins — and two relaxing beach days in Nungwi.",
      howToBook,
    ],
    highlights: ["Safari Blue", "Mangrove kayaking", "Stone Town & Prison Island", "Jozani Forest", "Mnemba dolphins"],
    itinerary: [arrival(), safariBlue, kayak, cityDay, moveNorthJozani, relax, relax, mnemba, departure("nine days")],
    included: packageIncludes,
  },
  {
    slug: "zanzibar-10-days",
    kind: "package",
    title: "Zanzibar 10 Days / 9 Nights",
    tagline: "The complete island experience",
    summary: "Every highlight of Zanzibar, with room to breathe.",
    category: "Holiday",
    image: "/img/tours/nakupenda.webp",
    duration: "10 days / 9 nights",
    groupSize: "Any group size",
    location: "Zanzibar",
    priceFrom: 1590,
    overview: [
      "Our longest Zanzibar holiday: Safari Blue, mangrove kayaking, Nakupenda Sandbank and Prison Island, Jozani Forest and dolphins — plus three easy beach days.",
      howToBook,
    ],
    highlights: ["Safari Blue", "Mangrove kayaking", "Nakupenda Sandbank & Prison Island", "Jozani Forest", "Mnemba dolphins"],
    itinerary: [arrival(), safariBlue, kayak, relax, nakupendaPrison, moveNorthJozani, relax, relax, mnemba, departure("ten days")],
    included: packageIncludes,
  },
]

export function getPackage(slug: string) {
  return packages.find((p) => p.slug === slug)
}
