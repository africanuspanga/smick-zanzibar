import type { Experience } from "./types"

const flyInIncludes = [
  "Return flights from Zanzibar",
  "All park fees",
  "All activities",
  "Bush lunch",
  "Professional driver/guide",
  "Open-roof safari jeep",
  "Hotel pickup & drop-off in Zanzibar",
  "All taxes / VAT",
]

const circuitIncludes = [
  "All park fees",
  "All activities (unless marked optional)",
  "Bush lunch during safari",
  "Professional driver/guide",
  "Open-roof safari jeep",
  "Airport pickup & drop-off",
  "Accommodation as per itinerary",
  "All taxes / VAT",
]

const circuitExcludes = [
  "International flights",
  "Travel insurance",
  "Visa fees",
  "Personal items",
  "Tips and gratuities",
  "Extra nights before/after the safari",
]

const groupNote = "Prices are per person for a group of two. The rate drops as your group gets bigger."

export const safariCategories = ["All", "Day trips", "Fly-in from Zanzibar", "Northern circuit"] as const

export const safaris: Experience[] = [
  {
    slug: "mikumi-day-trip",
    kind: "safari",
    title: "Mikumi Day Trip",
    tagline: "A full-day flying safari from Zanzibar — back for dinner",
    summary: "Fly in, track elephants, giraffes and lions, and fly home the same day.",
    category: "Day trips",
    image: "/img/safari/mikumi.webp",
    gallery: ["/img/safari/mikumi-elephants.webp", "/img/safari/mikumi-2.webp", "/img/safari/giraffes.webp"],
    duration: "1 day",
    groupSize: "Any group size",
    location: "Mikumi National Park",
    priceFrom: 430,
    featured: true,
    overview: [
      "Experience a real African safari in just one day. Fly from Zanzibar to Mikumi National Park — Tanzania's fourth-largest park and the most accessible from the island — and spend the day on game drives across open plains backed by the Uluguru Mountains.",
      "Expect elephants, giraffes, zebras, wildebeest, buffalo, lions and a huge variety of birds. You'll be back at your Zanzibar hotel in the evening.",
    ],
    highlights: [
      "Return flights from Zanzibar",
      "Full-day game drive in an open safari jeep",
      "Bush lunch at a scenic picnic site",
      "Expert safari guide",
      "Perfect for families with limited time",
    ],
    itineraryTitle: "Your day",
    itinerary: [
      { time: "5:00 AM", title: "Hotel pickup", text: "Our driver picks you up from your hotel and takes you to Zanzibar Airport." },
      { time: "6:30 AM", title: "Flight to Mikumi", text: "Board your domestic flight and enjoy aerial views of the Tanzanian landscape." },
      { time: "8:00 AM", title: "Morning game drive", text: "Meet your guide at the airstrip and set off to find elephants, buffalo, giraffes, zebras, lions and antelopes." },
      { time: "12:00 PM", title: "Bush lunch", text: "Relax with lunch at a picnic site inside the park while birds and smaller wildlife come close." },
      { time: "1:30 PM", title: "Afternoon game drive", text: "Explore new areas of the park in the soft afternoon light — great for photos." },
      { time: "5:00 PM", title: "Back in Zanzibar", text: "Fly back to Zanzibar and get dropped off at your hotel." },
    ],
    pricing: [
      {
        rows: [
          { label: "Sharing vehicle", price: "$430" },
          { label: "Private vehicle", price: "$680" },
        ],
        note: "Price per person.",
      },
    ],
    included: flyInIncludes,
  },
  {
    slug: "nyerere-selous-day-trip",
    kind: "safari",
    title: "Nyerere (Selous) Day Trip",
    tagline: "Fly to Africa's largest game reserve and the Rufiji River",
    summary: "A full day in the wild landscapes of Nyerere National Park.",
    category: "Day trips",
    image: "/img/safari/nyerere.webp",
    gallery: ["/img/safari/selous.webp", "/img/safari/lion-portrait.webp", "/img/safari/elephants.webp"],
    duration: "1 day",
    groupSize: "Any group size",
    location: "Nyerere National Park",
    priceFrom: 450,
    featured: true,
    overview: [
      "Nyerere National Park — formerly Selous Game Reserve — is one of the largest protected wildernesses in Africa, about a 50 minute flight from Zanzibar. Its remote, pristine landscapes are shaped by the mighty Rufiji River.",
      "Spend the day searching for lions, elephants, giraffes, zebras, buffalo and an incredible variety of birdlife, then fly back to Zanzibar in the evening.",
    ],
    highlights: [
      "Short flight from Zanzibar",
      "Game drive along the Rufiji River",
      "Lions, elephants, giraffes and buffalo",
      "Bush lunch in the wild",
    ],
    itineraryTitle: "Your day",
    itinerary: [
      { time: "5:00 AM", title: "Hotel pickup", text: "Transfer from your hotel to Zanzibar Airport." },
      { time: "6:00 AM", title: "Check-in & flight", text: "Check in and fly to Nyerere National Park." },
      { time: "7:20 AM", title: "Game drive", text: "Your guide meets you on landing and the safari begins." },
      { title: "Lunch in nature", text: "A relaxed lunch surrounded by the beauty of the reserve." },
      { title: "Return to Zanzibar", text: "Evening flight back to Zanzibar and transfer to your hotel." },
    ],
    pricing: [
      {
        rows: [
          { label: "Sharing vehicle", price: "$450" },
          { label: "Private vehicle", price: "$680" },
        ],
        note: "Price per person.",
      },
    ],
    included: flyInIncludes,
  },
  {
    slug: "serengeti-2-days",
    kind: "safari",
    title: "Serengeti 2 Days / 1 Night",
    tagline: "A fly-in Serengeti safari from Zanzibar",
    summary: "Endless plains, big cats and a night in the Serengeti.",
    category: "Fly-in from Zanzibar",
    image: "/img/safari/serengeti-giraffes.webp",
    gallery: ["/img/safari/serengeti.webp", "/img/safari/lion.webp", "/img/safari/zebras.webp"],
    duration: "2 days / 1 night",
    groupSize: "Private or shared",
    location: "Serengeti National Park",
    priceFrom: 1676,
    overview: [
      "Swap the beach for the savannah. Fly from Zanzibar to Seronera in the heart of the Serengeti for two days of game drives across Tanzania's most iconic wildlife destination.",
      "Look for the Big Five, follow the Great Migration in season and spend a night in the Serengeti before flying back to the island.",
    ],
    highlights: [
      "Return flights Zanzibar – Serengeti",
      "Game drives with an experienced guide",
      "Night in the Serengeti",
      "All meals included",
      "Chance to see the Big Five",
    ],
    itinerary: [
      {
        title: "Day 1 — Into the Serengeti",
        points: [
          "Early pickup and flight to Seronera airstrip",
          "First game drive in search of lions, leopards, elephants and buffalo",
          "Picnic lunch on the plains",
          "Afternoon game drive, then check in for dinner and overnight",
        ],
      },
      {
        title: "Day 2 — Sunrise drive & return",
        points: [
          "Early breakfast and sunrise game drive when animals are most active",
          "Last sightings and photos",
          "Transfer to the airstrip and flight back to Zanzibar",
          "Drop-off at your hotel",
        ],
      },
    ],
    pricing: [{ rows: [{ label: "Per adult", price: "$1,676" }] }],
    included: [...flyInIncludes, "Accommodation & all meals"],
  },
  {
    slug: "serengeti-3-days",
    kind: "safari",
    title: "Serengeti 3 Days / 2 Nights",
    tagline: "Three days of game drives in the world-famous Serengeti",
    summary: "Explore different corners of the park over three full days.",
    category: "Fly-in from Zanzibar",
    image: "/img/safari/migration.webp",
    gallery: ["/img/safari/serengeti.webp", "/img/safari/lion.webp", "/img/safari/giraffes.webp"],
    duration: "3 days / 2 nights",
    groupSize: "Private or shared",
    location: "Serengeti National Park",
    priceFrom: 2048,
    featured: true,
    overview: [
      "The Serengeti is one of Africa's top safari destinations, famous for its breathtaking landscapes and incredible wildlife. Fly in from Zanzibar and spend three days exploring different areas of the park.",
      "Wildebeest, giraffes, Grant's gazelles, zebras, wild dogs, impalas, hyenas, topi — and with luck, the Big Five.",
    ],
    highlights: [
      "Flights from Zanzibar to Seronera",
      "Two nights at Africa Safari Serengeti Ikoma (full board)",
      "Full-day game drive in a new area of the park",
      "Picnic lunches on the plains",
    ],
    itinerary: [
      {
        title: "Day 1 — Arrival & game drive",
        points: [
          "Early hotel pickup and flight to Seronera airstrip",
          "Game drive with coffee break and picnic lunch",
          "Afternoon drive spotting elephants, lions and giraffes",
          "Overnight at Africa Safari Serengeti Ikoma (full board)",
        ],
      },
      {
        title: "Day 2 — Full-day Serengeti safari",
        points: [
          "A full day exploring a different part of the park",
          "Picnic lunch during the drive",
          "Return to the lodge for dinner and overnight",
        ],
      },
      {
        title: "Day 3 — Morning drive & return",
        points: ["Final game drive on the way to Seronera airstrip", "Flight back to Zanzibar and hotel transfer"],
      },
    ],
    pricing: [
      {
        rows: [
          { label: "Per adult", price: "$2,048" },
          { label: "Per child (3–9 years)", price: "$1,525" },
        ],
      },
    ],
    included: [...flyInIncludes, "Accommodation (full board)"],
  },
  {
    slug: "serengeti-balloon-safari",
    kind: "safari",
    title: "Serengeti & Hot Air Balloon",
    tagline: "3 days in the Serengeti with a sunrise balloon flight",
    summary: "Game drives, a night drive and the Serengeti from the sky.",
    category: "Fly-in from Zanzibar",
    image: "/img/safari/balloon.webp",
    gallery: ["/img/safari/migration.webp", "/img/safari/serengeti-giraffes.webp", "/img/safari/lion-portrait.webp"],
    duration: "3 days / 2 nights",
    groupSize: "Private or shared",
    location: "Serengeti National Park",
    priceFrom: 2793,
    overview: [
      "Our most unforgettable fly-in safari. Explore the endless Serengeti plains on game drives, head out on a night drive to see nocturnal wildlife, then float over the savannah at sunrise in a hot air balloon.",
      "After landing, enjoy a bush breakfast in the Serengeti before flying back to Zanzibar.",
    ],
    highlights: [
      "Sunrise hot air balloon safari",
      "Bush breakfast after landing",
      "Night game drive",
      "Two nights full board in the Serengeti",
    ],
    itinerary: [
      {
        title: "Day 1 — Arrival & night drive",
        points: [
          "Flight from Zanzibar to Seronera airstrip",
          "Game drive with picnic lunch",
          "Early dinner, then a night game drive",
          "Overnight at Africa Safari Serengeti Ikoma",
        ],
      },
      {
        title: "Day 2 — Full-day safari",
        points: ["Game drive in a different area of the park", "Picnic lunch and afternoon at leisure", "Dinner and overnight"],
      },
      {
        title: "Day 3 — Balloon & return",
        points: [
          "Sunrise hot air balloon flight over the Serengeti",
          "Bush breakfast after landing",
          "Flight back to Zanzibar and hotel transfer",
        ],
      },
    ],
    pricing: [
      {
        rows: [
          { label: "Per adult", price: "$2,793" },
          { label: "Per child (3–9 years)", price: "$1,225" },
        ],
      },
    ],
    included: [...flyInIncludes, "Accommodation (full board)", "Hot air balloon flight"],
  },
  {
    slug: "tarangire-ngorongoro-2-days",
    kind: "safari",
    title: "Tarangire & Ngorongoro 2 Days",
    tagline: "The perfect short safari in northern Tanzania",
    summary: "Elephants and baobabs of Tarangire, then the Ngorongoro Crater.",
    category: "Northern circuit",
    image: "/img/safari/ngorongoro-2.webp",
    gallery: ["/img/safari/rhino.webp", "/img/safari/tarangire-2.webp", "/img/safari/elephants-dusk.webp"],
    duration: "2 days / 1 night",
    groupSize: "2–6 people",
    location: "Tarangire & Ngorongoro",
    priceFrom: 526,
    featured: true,
    overview: [
      "Short on time but dreaming of Ngorongoro? This two-day safari from Arusha takes you to Tarangire National Park — famous for its giant elephant herds and ancient baobabs — and down into the world-famous Ngorongoro Crater.",
      "Combine it with your Zanzibar holiday: we can arrange the flight from Zanzibar to Arusha.",
    ],
    highlights: [
      "Tarangire elephants and baobab trees",
      "Full game drive inside Ngorongoro Crater",
      "Chance to see the rare black rhino",
      "4x4 vehicle with pop-up viewing roof",
    ],
    itinerary: [
      {
        title: "Day 1 — Tarangire National Park",
        text: "Drive from Arusha to Tarangire with a lunch box for a full game drive: lions, elephants, buffalo, wildebeest, zebras, monkeys and water birds. Late afternoon drive to Manyara for dinner and overnight.",
      },
      {
        title: "Day 2 — Ngorongoro Crater",
        text: "After breakfast, descend into Ngorongoro Crater for a game drive until mid-afternoon: lions, black rhino, hippos, hyenas, flamingos, buffalo and more. Drive back to Arusha for your overnight.",
      },
    ],
    pricing: [
      {
        title: "Basic camping",
        rows: [
          { label: "2 people", price: "$700" },
          { label: "3 people", price: "$600" },
          { label: "4–5 people", price: "$526" },
        ],
      },
      {
        title: "Mid-range lodge",
        rows: [
          { label: "2 people", price: "$850" },
          { label: "3 people", price: "$750" },
          { label: "4–5 people", price: "$700" },
        ],
      },
    ],
    included: [
      "All park & Ngorongoro Crater fees",
      "Hotel pickup and drop-off in Arusha",
      "4x4 vehicle with viewing roof",
      "Qualified driver/guide",
      "3 meals per day",
      "Bottled water",
    ],
    excluded: ["Flights Zanzibar – Arusha", "Tips", "Travel insurance", "Tanzania visa", "Single room supplement"],
    notes: ["Prices are per person."],
  },
  {
    slug: "tanzania-safari-5-days",
    kind: "safari",
    title: "5 Days Tanzania Safari",
    tagline: "Tarangire, Lake Manyara & Ngorongoro Crater",
    summary: "Three of the northern circuit's greatest parks with a private guide.",
    category: "Northern circuit",
    image: "/img/safari/tarangire-baobab.webp",
    gallery: ["/img/safari/manyara.webp", "/img/safari/ngorongoro.webp", "/img/safari/elephants.webp"],
    duration: "5 days / 4 nights",
    groupSize: "Private safari",
    location: "Northern Tanzania",
    priceFrom: 1475,
    overview: [
      "Discover the huge elephant herds of Tarangire, the diverse landscapes of Lake Manyara and the breathtaking Ngorongoro Crater. A private safari with your own vehicle and English-speaking guide.",
    ],
    highlights: ["Tarangire National Park", "Lake Manyara & its hippo pool", "Ngorongoro Crater", "Private vehicle and guide"],
    itinerary: [
      { title: "Day 1 — Arrival", text: "Meet your guide at Kilimanjaro International Airport and transfer to your hotel to relax." },
      { title: "Day 2 — Tarangire", text: "Massive elephant herds, ancient baobabs and wildlife gathering at the Tarangire River." },
      { title: "Day 3 — Lake Manyara", text: "Forests full of monkeys and birds below the Great Rift Valley escarpment, plus the famous hippo pool." },
      { title: "Day 4 — Ngorongoro Crater", text: "Descend into the UNESCO-listed crater: lions, zebras, buffalo and the rare black rhino." },
      { title: "Day 5 — Departure", text: "Breakfast and transfer to the airport — or extend your trip with a beach escape in Zanzibar." },
    ],
    pricing: [
      {
        title: "Lodge safari",
        rows: [
          { label: "Per adult", price: "$1,770" },
          { label: "Per child (3–9 years)", price: "$1,400" },
        ],
        note: groupNote,
      },
      {
        title: "Camping safari",
        rows: [
          { label: "Per adult", price: "$1,475" },
          { label: "Per child (3–9 years)", price: "$1,110" },
        ],
        note: groupNote,
      },
    ],
    included: circuitIncludes,
    excluded: circuitExcludes,
  },
  {
    slug: "tanzania-safari-7-days",
    kind: "safari",
    title: "7 Days Tanzania Safari",
    tagline: "Tarangire, Serengeti, Ngorongoro & Lake Manyara",
    summary: "The classic northern circuit including two days in the Serengeti.",
    category: "Northern circuit",
    image: "/img/safari/serengeti-pkg.webp",
    gallery: ["/img/safari/manyara.webp", "/img/safari/rhino.webp", "/img/safari/tarangire.webp"],
    duration: "7 days / 6 nights",
    groupSize: "Private safari",
    location: "Northern Tanzania",
    priceFrom: 1966,
    featured: true,
    overview: [
      "A thrilling week through Tanzania's most famous parks — Tarangire, the Serengeti, Ngorongoro Crater and Lake Manyara. Follow the Great Migration in season and enjoy a once-in-a-lifetime safari.",
    ],
    highlights: ["Two days in the Serengeti", "Great Migration (in season)", "Ngorongoro Crater", "Tarangire & Lake Manyara"],
    itinerary: [
      { title: "Day 1 — Arrival", text: "Warm welcome at Kilimanjaro International Airport and transfer to your hotel." },
      { title: "Day 2 — Tarangire", text: "Elephant herds and baobabs along the Tarangire River." },
      { title: "Day 3 — Serengeti", text: "Half-day game drive into the Serengeti, home of the 1.5 million-strong wildebeest migration." },
      { title: "Day 4 — Serengeti full day", text: "A full day following the migration trails with your driver-guide." },
      { title: "Day 5 — Ngorongoro Crater", text: "Descend into the crater for one of Africa's densest concentrations of wildlife." },
      { title: "Day 6 — Lake Manyara", text: "Woodland elephants, playful primates and the famous hippo pool." },
      { title: "Day 7 — Departure", text: "Transfer to the airport — or continue to Zanzibar's beaches." },
    ],
    pricing: [
      {
        title: "Lodge safari",
        rows: [
          { label: "Per adult", price: "$2,480" },
          { label: "Per child (3–9 years)", price: "$1,866" },
        ],
        note: groupNote,
      },
      {
        title: "Camping safari",
        rows: [
          { label: "Per adult", price: "$1,966" },
          { label: "Per child (3–9 years)", price: "$1,430" },
        ],
        note: groupNote,
      },
    ],
    included: circuitIncludes,
    excluded: circuitExcludes,
  },
  {
    slug: "tanzania-safari-8-days",
    kind: "safari",
    title: "8 Days Safari & Hadzabe",
    tagline: "Serengeti, Ngorongoro and a day with the Hadzabe tribe",
    summary: "Wildlife and culture — including Lake Eyasi's hunter-gatherers.",
    category: "Northern circuit",
    image: "/img/safari/hadzabe.webp",
    gallery: ["/img/safari/maasai.webp", "/img/safari/serengeti.webp", "/img/safari/ngorongoro.webp"],
    duration: "8 days / 7 nights",
    groupSize: "Private safari",
    location: "Northern Tanzania",
    priceFrom: 1980,
    overview: [
      "Explore Tarangire, the Serengeti and Ngorongoro Crater with local guides — then spend a day with the Hadzabe, one of Africa's last hunter-gatherer communities, at Lake Eyasi.",
    ],
    highlights: ["Tarangire", "Two days in the Serengeti", "Ngorongoro Crater", "Hadzabe cultural day at Lake Eyasi"],
    itinerary: [
      { title: "Day 1 — Arrival", text: "Welcome at Kilimanjaro International Airport and transfer to your hotel." },
      { title: "Day 2 — Tarangire", text: "Elephant herds and baobabs along the Tarangire River." },
      { title: "Day 3 — Serengeti", text: "Afternoon game drive into the Serengeti." },
      { title: "Day 4 — Serengeti full day", text: "Follow the Great Migration trails with your guide." },
      { title: "Day 5 — Serengeti to Ngorongoro", text: "Sunrise game drive, brunch at camp and drive to the crater rim." },
      { title: "Day 6 — Ngorongoro Crater", text: "Game drive in the crater — look for the black rhino." },
      { title: "Day 7 — Lake Eyasi & Hadzabe", text: "Join the Hadzabe as they hunt and forage, then relax at Lake Eyasi." },
      { title: "Day 8 — Departure", text: "Transfer to the airport — or extend your trip in Zanzibar." },
    ],
    pricing: [
      {
        title: "Lodge safari",
        rows: [
          { label: "Per adult", price: "$2,600" },
          { label: "Per child (3–9 years)", price: "$1,830" },
        ],
        note: groupNote,
      },
      {
        title: "Camping safari",
        rows: [
          { label: "Per adult", price: "$1,980" },
          { label: "Per child (3–9 years)", price: "$1,410" },
        ],
        note: groupNote,
      },
    ],
    included: circuitIncludes,
    excluded: circuitExcludes,
  },
  {
    slug: "tanzania-safari-10-days",
    kind: "safari",
    title: "10 Days Tanzania Safari",
    tagline: "The complete northern circuit adventure",
    summary: "Five parks, the migration and Hadzabe culture in ten days.",
    category: "Northern circuit",
    image: "/img/safari/tarangire.webp",
    gallery: ["/img/hero/zebras.webp", "/img/safari/rhino.webp", "/img/safari/hadzabe.webp"],
    duration: "10 days / 9 nights",
    groupSize: "Private safari",
    location: "Northern Tanzania",
    priceFrom: 3050,
    overview: [
      "Our most complete safari: Arusha National Park, Tarangire, Lake Manyara, three days in the Serengeti, Ngorongoro Crater and the Hadzabe of Lake Eyasi — all with a private guide and vehicle so you explore at your own pace.",
    ],
    highlights: ["Arusha National Park", "Tarangire & Lake Manyara", "Serengeti & the Great Migration", "Ngorongoro Crater", "Hadzabe tribe at Lake Eyasi"],
    itinerary: [
      { title: "Day 1 — Arrival", text: "Welcome at Kilimanjaro International Airport and transfer to your hotel." },
      { title: "Day 2 — Arusha National Park", text: "Black-and-white colobus monkeys, hornbills and stunning views." },
      { title: "Day 3 — Tarangire", text: "Huge elephant herds and iconic baobabs." },
      { title: "Day 4 — Lake Manyara", text: "Rainforest monkeys, flamingos and the hippo pool." },
      { title: "Day 5 — Serengeti", text: "Drive through the Ngorongoro Conservation Area into central Serengeti." },
      { title: "Day 6 — Serengeti full day", text: "Early start for the best game viewing across the plains." },
      { title: "Day 7 — Serengeti to Ngorongoro", text: "Sunrise game drive then on to the crater rim." },
      { title: "Day 8 — Ngorongoro Crater", text: "Descend into the UNESCO-listed crater." },
      { title: "Day 9 — Lake Eyasi & Hadzabe", text: "A day with the Hadzabe hunter-gatherers, then back to Arusha." },
      { title: "Day 10 — Departure", text: "Transfer to the airport — or fly on to Zanzibar." },
    ],
    pricing: [
      {
        title: "Lodge safari",
        rows: [
          { label: "Per adult", price: "$3,720" },
          { label: "Per child (3–9 years)", price: "$1,750" },
        ],
        note: groupNote,
      },
      {
        title: "Camping safari",
        rows: [
          { label: "Per adult", price: "$3,050" },
          { label: "Per child (3–9 years)", price: "$2,080" },
        ],
        note: groupNote,
      },
    ],
    included: circuitIncludes,
    excluded: circuitExcludes,
  },
]

export function getSafari(slug: string) {
  return safaris.find((s) => s.slug === slug)
}
