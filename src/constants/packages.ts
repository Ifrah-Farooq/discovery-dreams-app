import gulmargImg    from "@/assets/gulmarg.jpg";
import houseboatImg  from "@/assets/houseboat.jpg";
import ladakhImg     from "@/assets/ladakh.jpg";
import pahalgamImg   from "@/assets/pahalgam.jpg";
import sonamargImg   from "@/assets/sonamarg.jpg";

export interface DayItinerary {
  day: number;
  title: string;
  activities: string[];
  overnight: string;
}

export interface Package {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  badge: string;
  route: string;
  duration: string;
  nights: number;
  days: number;
  price: string;
  priceNote: string;
  groupSize: string;
  rating: number;
  reviews: number;
  overview: string;
  highlights: string[];
  itinerary: DayItinerary[];
  inclusions: string[];
  exclusions: string[];
  pricing: { label: string; price: string }[];
  tips: string[];
  bestTime: string;
}

export const packages: Package[] = [
  /* ── 1. Kashmir Paradise Tour ─────────────────────────────────── */
  {
    slug: "kashmir-paradise-tour",
    title: "Kashmir Paradise Tour",
    tagline: "The complete Kashmir experience",
    image: gulmargImg,
    badge: "Best Seller",
    route: "Srinagar · Gulmarg · Pahalgam",
    duration: "5 Days / 4 Nights",
    nights: 4,
    days: 5,
    price: "₹14,500",
    priceNote: "per person (twin sharing)",
    groupSize: "2–10 People",
    rating: 4.9,
    reviews: 120,
    overview:
      "The Kashmir Paradise Tour is our most popular package — a carefully crafted 5-day journey through the crown jewels of the Kashmir Valley. From shikara rides on the iconic Dal Lake to the snow-capped slopes of Gulmarg and the lush valleys of Pahalgam, this tour gives you the complete Kashmir experience at the best value.",
    highlights: [
      "Shikara ride on Dal Lake at sunrise",
      "Gondola ride at Gulmarg (Asia's highest cable car)",
      "Betaab Valley & Aru Valley in Pahalgam",
      "Mughal Gardens — Nishat, Shalimar & Chashme Shahi",
      "Stay in a traditional wooden houseboat",
      "Local Wazwan dinner experience",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar — Dal Lake & Houseboat",
        activities: [
          "Arrive at Srinagar Airport / Railway Station — our driver will receive you",
          "Check in to your heritage Dal Lake houseboat",
          "Evening shikara ride through the floating gardens and markets of Dal Lake",
          "Sunset views over the Zabarwan hills from the lake",
          "Welcome Wazwan dinner aboard the houseboat",
        ],
        overnight: "Houseboat on Dal Lake, Srinagar",
      },
      {
        day: 2,
        title: "Gulmarg — Gondola Ride & Snow Activities",
        activities: [
          "After breakfast, drive to Gulmarg (56 km, ~1.5 hrs)",
          "Gondola Phase 1 ride to Kongdori (8,530 ft) — breathtaking valley views",
          "Optional Gondola Phase 2 to Apharwat Peak (13,780 ft) — snow year-round",
          "Skiing, snowboarding, or snowball fights (seasonal)",
          "Walk through the beautiful alpine meadow of flowers",
          "Return to Srinagar by evening",
        ],
        overnight: "Houseboat, Srinagar",
      },
      {
        day: 3,
        title: "Pahalgam — Valley of Shepherds",
        activities: [
          "Morning drive to Pahalgam (96 km, ~2.5 hrs) through apple orchards",
          "Visit Betaab Valley — lush green meadow made famous by Bollywood",
          "Explore Aru Valley — quiet alpine pastures with shepherd huts",
          "Optional pony ride through the meadows",
          "Evening stroll along the Lidder River",
          "Check in to hotel in Pahalgam",
        ],
        overnight: "Hotel in Pahalgam",
      },
      {
        day: 4,
        title: "Pahalgam — Chandanwari & Mughal Gardens",
        activities: [
          "Morning visit to Chandanwari (13 km from Pahalgam) — starting point of Amarnath Yatra",
          "Snow bridge and glacier views at Chandanwari",
          "Drive back to Srinagar (96 km)",
          "Visit Nishat Bagh — 12-terraced Mughal garden on Dal Lake",
          "Stroll through Shalimar Bagh — Emperor Jahangir's love garden",
          "Chashme Shahi — hilltop royal spring garden with panoramic views",
        ],
        overnight: "Hotel / Houseboat, Srinagar",
      },
      {
        day: 5,
        title: "Departure Day",
        activities: [
          "Leisurely morning — last shikara ride or local bazaar shopping",
          "Visit Lal Chowk market for pashmina, saffron, and dry fruits",
          "Transfer to Srinagar Airport / Railway Station",
          "Depart with unforgettable Kashmir memories",
        ],
        overnight: "Departure",
      },
    ],
    inclusions: [
      "4 nights accommodation (houseboat 2N + hotel 2N)",
      "Daily breakfast & dinner (Wazwan welcome dinner included)",
      "All sightseeing by private AC cab",
      "Airport / station pickup and drop",
      "Experienced local guide for Gulmarg and Pahalgam",
      "All toll, parking & driver charges",
      "24/7 on-trip support from Khan Brother team",
    ],
    exclusions: [
      "Gondola / cable car tickets at Gulmarg (Phase 1: ~₹800, Phase 2: ~₹1,000)",
      "Personal expenses, tips & shopping",
      "Pony rides, adventure activities & entrance fees",
      "Flights or train tickets to/from Srinagar",
      "Lunch (you can eat at local restaurants at your own cost)",
      "Travel insurance",
    ],
    pricing: [
      { label: "2 Persons",  price: "₹14,500 / person" },
      { label: "4 Persons",  price: "₹13,000 / person" },
      { label: "6 Persons",  price: "₹12,000 / person" },
      { label: "8+ Persons", price: "₹11,000 / person" },
    ],
    tips: [
      "Carry light woolens even in summer — evenings can be chilly at 5,000+ ft",
      "Book Gondola tickets online in advance during peak season (May–June)",
      "Try Kahwa (Kashmiri saffron tea) every morning — it's on us!",
      "Carry some cash — card machines are unreliable in Pahalgam",
    ],
    bestTime: "March to November. Peak beauty in April (tulips), May–June (green meadows), and October (autumn chinars). Gulmarg skiing best in December–February.",
  },

  /* ── 2. Honeymoon Special ─────────────────────────────────────── */
  {
    slug: "honeymoon-special",
    title: "Honeymoon Special",
    tagline: "Romance in the paradise on earth",
    image: houseboatImg,
    badge: "Most Romantic",
    route: "Srinagar · Houseboat · Gulmarg · Pahalgam",
    duration: "6 Days / 5 Nights",
    nights: 5,
    days: 6,
    price: "₹21,000",
    priceNote: "per couple (all-inclusive)",
    groupSize: "Couples Only",
    rating: 5.0,
    reviews: 85,
    overview:
      "Crafted exclusively for newlyweds, our Honeymoon Special blends romantic houseboat stays, candlelit dinners, serene shikara rides, and snow-dusted mountain escapes into a 6-day fairy tale. Kashmir is called Paradise on Earth — and this package shows you exactly why.",
    highlights: [
      "Private shikara ride at sunrise with flower-decorated boat",
      "Candlelit dinner aboard the houseboat",
      "Couple's gondola ride at Gulmarg",
      "Romantic riverside walk in Pahalgam",
      "Rose-petal room décor on arrival",
      "Private guided Mughal Garden tour",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival — Romantic Houseboat Welcome",
        activities: [
          "Airport pickup with welcome garland",
          "Check in to premium houseboat with rose-petal room decoration",
          "Private shikara ride through the quieter parts of Dal Lake",
          "Sunset photography session on the lake",
          "Candlelit dinner aboard the houseboat",
        ],
        overnight: "Premium Houseboat, Dal Lake",
      },
      {
        day: 2,
        title: "Srinagar — Gardens & Local Culture",
        activities: [
          "Sunrise shikara ride to the floating vegetable market",
          "Visit Nishat Bagh, Shalimar Bagh, and Chashme Shahi",
          "Tulip Garden (March–April seasonal)",
          "Browse pashmina shawls and saffron at Lal Chowk market",
          "Evening walk along the Boulevard Road",
        ],
        overnight: "Houseboat, Dal Lake",
      },
      {
        day: 3,
        title: "Gulmarg — Snow & Gondola",
        activities: [
          "Drive to Gulmarg through alpine scenery",
          "Couple's gondola ride to Kongdori and Apharwat Peak",
          "Snowball fights and photography in the snow",
          "Horse ride through the meadow of flowers",
          "Return by evening, special dinner at houseboat",
        ],
        overnight: "Houseboat / Hotel, Srinagar",
      },
      {
        day: 4,
        title: "Pahalgam — The Valley of Shepherds",
        activities: [
          "Scenic drive to Pahalgam through apple and walnut orchards",
          "Visit Betaab Valley — lush meadows and crystal streams",
          "Explore Aru Valley — peaceful alpine pastures",
          "Romantic evening walk along the Lidder River",
          "Check in to riverside hotel",
        ],
        overnight: "Riverside Hotel, Pahalgam",
      },
      {
        day: 5,
        title: "Yusmarg — Hidden Meadow",
        activities: [
          "Morning drive to Yusmarg (47 km from Srinagar) — Kashmir's hidden gem",
          "Stroll through the pine-forested meadow",
          "Horse ride to Doodh Ganga (Milk Stream)",
          "Peaceful picnic lunch in the meadow",
          "Return to Srinagar",
        ],
        overnight: "Hotel / Houseboat, Srinagar",
      },
      {
        day: 6,
        title: "Departure",
        activities: [
          "Leisurely morning — last shikara ride or bazaar visit",
          "Pick up saffron, pashmina, and Kashmiri kehwa as souvenirs",
          "Transfer to airport with a bouquet and sweet farewell",
        ],
        overnight: "Departure",
      },
    ],
    inclusions: [
      "5 nights accommodation (premium houseboat 3N + riverside hotel 2N)",
      "Daily breakfast and dinner",
      "Candlelit dinner on Day 1",
      "Rose-petal room decoration on arrival",
      "All sightseeing in private AC cab",
      "Airport / station pickup and drop",
      "All toll, parking & driver charges",
      "24/7 couple support from Khan Brother team",
    ],
    exclusions: [
      "Gondola tickets at Gulmarg",
      "Personal expenses & shopping",
      "Flights or train to/from Srinagar",
      "Lunch on all days",
      "Pony rides and adventure activities",
      "Travel insurance",
    ],
    pricing: [
      { label: "Per Couple (Standard)", price: "₹21,000 / couple" },
      { label: "Per Couple (Deluxe Houseboat)", price: "₹26,000 / couple" },
      { label: "Per Couple (Premium Suite)", price: "₹32,000 / couple" },
    ],
    tips: [
      "Book December–February for a snow honeymoon; April–May for flowers",
      "Mention any special occasions (anniversary, birthday) while booking — we arrange surprises",
      "Carry your own music playlist for the shikara ride — it makes it magical",
      "Pahalgam is cooler than Srinagar — pack an extra layer",
    ],
    bestTime: "April–May for blooming tulips and green meadows. December–February for a dreamy snow honeymoon at Gulmarg.",
  },

  /* ── 3. Adventure Ladakh ──────────────────────────────────────── */
  {
    slug: "adventure-ladakh",
    title: "Adventure Ladakh",
    tagline: "The ultimate high-altitude adventure",
    image: ladakhImg,
    badge: "Top Rated",
    route: "Leh · Nubra Valley · Pangong Tso",
    duration: "7 Days / 6 Nights",
    nights: 6,
    days: 7,
    price: "₹28,500",
    priceNote: "per person (twin sharing)",
    groupSize: "2–8 People",
    rating: 4.8,
    reviews: 95,
    overview:
      "Ladakh is not just a destination — it's an experience that rewires you. This 7-day adventure takes you from the ancient monastery lanes of Leh to the sand dunes of Nubra Valley and the breathtaking turquoise shores of Pangong Lake at 14,270 ft. A journey for those who seek the extraordinary.",
    highlights: [
      "Khardung La Pass — one of the world's highest motorable roads (17,982 ft)",
      "Nubra Valley — Bactrian camel ride on sand dunes",
      "Pangong Tso — the iconic 134 km high-altitude lake",
      "Hemis Monastery — Ladakh's largest and wealthiest monastery",
      "Leh Palace and Shanti Stupa",
      "Magnetic Hill — the gravity-defying road phenomenon",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Leh — Acclimatisation Day",
        activities: [
          "Arrive at Leh Airport (altitude: 11,562 ft) — our driver receives you",
          "Check in to hotel. REST IS MANDATORY — do not exert yourself today",
          "Short walk around Leh market in the evening",
          "Dinner and early sleep (altitude acclimatisation is critical)",
        ],
        overnight: "Hotel in Leh",
      },
      {
        day: 2,
        title: "Leh Sightseeing",
        activities: [
          "Morning visit to Shanti Stupa — panoramic view of Leh and Ladakh range",
          "Leh Palace — 17th century royal palace with stunning views",
          "Namgyal Tsemo Monastery — ancient monastery above Leh",
          "Hall of Fame Museum — tribute to Indian Army's Ladakh operations",
          "Leh Main Bazaar — local handicrafts, prayer wheels, thangkas",
          "Magnetic Hill — watch your vehicle seemingly roll uphill",
        ],
        overnight: "Hotel in Leh",
      },
      {
        day: 3,
        title: "Leh to Nubra Valley via Khardung La",
        activities: [
          "Early morning drive to Nubra Valley (120 km, ~4 hrs)",
          "Cross Khardung La Pass at 17,982 ft — photo stop at the top",
          "Descend into the lush Shyok river valley",
          "Check in to camp / hotel in Hunder",
          "Afternoon Bactrian camel ride on Hunder sand dunes with Karakoram backdrop",
          "Visit Diskit Monastery — the oldest in Nubra Valley",
        ],
        overnight: "Camp / Guesthouse in Nubra Valley",
      },
      {
        day: 4,
        title: "Nubra to Pangong Tso via Shyok Route",
        activities: [
          "Scenic drive from Nubra to Pangong Lake via Shyok River (150 km, ~5 hrs)",
          "Drive through remote villages along the ancient Silk Route",
          "First glimpse of Pangong Lake — one of the most stunning moments in travel",
          "Afternoon free at the lakeshore — photography, meditation, wandering",
          "Sunset over the lake — colours shift from turquoise to deep violet",
          "Check in to lakeside camp",
        ],
        overnight: "Lakeside Camp, Pangong Tso",
      },
      {
        day: 5,
        title: "Pangong Lake — Sunrise & Return to Leh",
        activities: [
          "Wake up for the extraordinary Pangong sunrise — bring your camera",
          "Morning walk along the lakeshore",
          "Drive back to Leh via Chang La Pass (17,585 ft)",
          "Stop at Hemis Monastery — Ladakh's largest monastery with rich murals",
          "Visit Thiksey Monastery — perched like a miniature Potala Palace",
          "Arrive Leh by evening",
        ],
        overnight: "Hotel in Leh",
      },
      {
        day: 6,
        title: "Leh — Alchi & Likir Monasteries",
        activities: [
          "Drive to Alchi Monastery (70 km) — 11th-century Buddhist murals",
          "Visit Likir Monastery with its massive golden Buddha statue",
          "Indus River valley scenic drive",
          "Return to Leh — souvenir shopping at Leh Market",
          "Farewell dinner at a Ladakhi restaurant",
        ],
        overnight: "Hotel in Leh",
      },
      {
        day: 7,
        title: "Departure from Leh",
        activities: [
          "Early morning transfer to Leh Airport",
          "Depart Leh with high-altitude memories that will last a lifetime",
        ],
        overnight: "Departure",
      },
    ],
    inclusions: [
      "6 nights accommodation (hotel 4N + lakeside camp 1N + Nubra camp 1N)",
      "Daily breakfast and dinner",
      "All sightseeing by private AC SUV / Innova",
      "Leh Airport pickup and drop",
      "Inner Line Permits for Nubra and Pangong (included)",
      "Experienced local Ladakhi driver-guide",
      "All toll, parking & driver charges",
      "24/7 on-trip support",
    ],
    exclusions: [
      "Flights to/from Leh",
      "Monastery entrance fees (~₹50–100 each)",
      "Bactrian camel ride at Nubra (~₹300)",
      "Personal expenses, tips & shopping",
      "Lunch on all days",
      "Travel insurance (strongly recommended for Ladakh)",
      "Oxygen cylinder (available on request at extra cost)",
    ],
    pricing: [
      { label: "2 Persons",  price: "₹28,500 / person" },
      { label: "4 Persons",  price: "₹26,000 / person" },
      { label: "6 Persons",  price: "₹24,000 / person" },
      { label: "Bike Package (Royal Enfield)", price: "₹35,000 / person" },
    ],
    tips: [
      "Fly into Leh — do NOT drive from Manali without prior acclimatisation",
      "Drink 3–4 litres of water per day. Avoid alcohol for the first 2 days",
      "Carry Diamox (altitude sickness tablet) — consult your doctor before travel",
      "Carry warm layers even in June — Pangong nights drop to near-freezing",
      "Ladakh flights book up fast in peak season — book 4–6 weeks ahead",
    ],
    bestTime: "June to September is ideal. Roads and passes open by mid-May. July–August is peak season. September offers clear skies and fewer crowds.",
  },

  /* ── 4. Pahalgam Getaway ──────────────────────────────────────── */
  {
    slug: "pahalgam-getaway",
    title: "Pahalgam Getaway",
    tagline: "A short escape to Kashmir's green heart",
    image: pahalgamImg,
    badge: "Great Value",
    route: "Srinagar · Pahalgam",
    duration: "4 Days / 3 Nights",
    nights: 3,
    days: 4,
    price: "₹11,800",
    priceNote: "per person (twin sharing)",
    groupSize: "2–12 People",
    rating: 4.7,
    reviews: 60,
    overview:
      "Perfect for those short on time but not on wanderlust, the Pahalgam Getaway packs the most scenic valley in Kashmir into a relaxed 4-day trip. Betaab Valley, Aru Valley, Chandanwari snowfields, and the roaring Lidder River — this is Kashmir as you've seen it in Bollywood, and it's even better in real life.",
    highlights: [
      "Betaab Valley — Bollywood's most filmed Kashmir location",
      "Aru Valley — pristine alpine pastures and shepherd huts",
      "Chandanwari — snowfields lasting through July",
      "Pony ride through the Baisaran meadows (Mini Switzerland)",
      "Dal Lake shikara ride on Day 1",
      "Wazwan dinner experience in Srinagar",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival Srinagar — Dal Lake & Departure for Pahalgam",
        activities: [
          "Arrive Srinagar — airport pickup",
          "Quick shikara ride on Dal Lake",
          "Drive to Pahalgam (96 km, 2.5 hrs) through scenic highway",
          "Check in to hotel on the banks of Lidder River",
          "Evening walk along the Lidder River",
          "Dinner at a local Kashmiri restaurant",
        ],
        overnight: "Hotel in Pahalgam",
      },
      {
        day: 2,
        title: "Betaab Valley, Aru Valley & Baisaran",
        activities: [
          "Morning visit to Betaab Valley — lush meadow with crystal clear streams",
          "Aru Valley — 11 km from Pahalgam, perfect for photography",
          "After lunch, pony ride up to Baisaran (Mini Switzerland of India)",
          "Stunning views of snow-capped Pir Panjal range from Baisaran",
          "Return by evening, relaxed dinner",
        ],
        overnight: "Hotel in Pahalgam",
      },
      {
        day: 3,
        title: "Chandanwari & Srinagar Mughal Gardens",
        activities: [
          "Morning drive to Chandanwari (13 km) — famous snowfield",
          "Snow bridge and glacier photography at Chandanwari",
          "Drive back to Srinagar (96 km)",
          "Visit Nishat Bagh and Shalimar Bagh — magnificent Mughal gardens",
          "Shopping at Lal Chowk — pashmina, saffron, dry fruits",
        ],
        overnight: "Hotel in Srinagar",
      },
      {
        day: 4,
        title: "Departure",
        activities: [
          "Leisurely morning — optional local market visit",
          "Transfer to Srinagar Airport / Railway Station",
          "Depart with Pahalgam's green valleys etched in memory",
        ],
        overnight: "Departure",
      },
    ],
    inclusions: [
      "3 nights accommodation (Pahalgam hotel 2N + Srinagar hotel 1N)",
      "Daily breakfast and dinner",
      "All sightseeing in private AC cab",
      "Airport pickup and drop",
      "All toll, parking & driver charges",
      "24/7 support",
    ],
    exclusions: [
      "Pony rides at Baisaran (~₹400–600)",
      "Personal expenses & shopping",
      "Flights / trains to Srinagar",
      "Lunch on all days",
      "Adventure activities",
      "Travel insurance",
    ],
    pricing: [
      { label: "2 Persons",  price: "₹11,800 / person" },
      { label: "4 Persons",  price: "₹10,500 / person" },
      { label: "6 Persons",  price: "₹9,800 / person" },
      { label: "8+ Persons", price: "₹9,000 / person" },
    ],
    tips: [
      "This is the base camp for Amarnath Yatra — book early if travelling in June–July",
      "Pahalgam is cooler than Srinagar by 4–5°C — carry a jacket even in summer",
      "Chandanwari snow is best April–July; by August the snow reduces",
      "Try trout fish at a local Pahalgam restaurant — it's freshly caught from Lidder",
    ],
    bestTime: "April to October. Spring (April–May) and Autumn (September–October) offer the best weather. Summer (June–July) is the busiest.",
  },

  /* ── 5. Sonamarg Glacier Trek ─────────────────────────────────── */
  {
    slug: "sonamarg-glacier-trek",
    title: "Sonamarg Glacier Trek",
    tagline: "Trek to the meadow of gold",
    image: sonamargImg,
    badge: "Adventure",
    route: "Srinagar · Sonamarg",
    duration: "3 Days / 2 Nights",
    nights: 2,
    days: 3,
    price: "₹9,500",
    priceNote: "per person (twin sharing)",
    groupSize: "2–8 People",
    rating: 4.8,
    reviews: 45,
    overview:
      "Sonamarg — the Meadow of Gold — sits at 8,957 ft on the banks of the Sindh River, framed by glaciers and snow-capped peaks. This compact 3-day trek takes you to the stunning Thajiwas Glacier and the turquoise Vishansar trail. No prior trekking experience needed — just a sense of adventure.",
    highlights: [
      "Thajiwas Glacier — a 30-minute pony ride and short trek",
      "Vishansar alpine lake trail (optional full day trek)",
      "Snow-capped Himalayan peaks visible year-round",
      "Sindh River rapids alongside the trek route",
      "Photography of golden meadows at sunrise",
      "Camp stay option under a star-filled sky",
    ],
    itinerary: [
      {
        day: 1,
        title: "Srinagar to Sonamarg",
        activities: [
          "Early morning pickup from Srinagar hotel",
          "Drive to Sonamarg (87 km, ~2 hrs) along the Sindh River valley",
          "Scenic drive through Kangan, Gagangir, and Baltal",
          "Check in to hotel / camp in Sonamarg",
          "Afternoon: Short walk along the Sindh River banks",
          "Evening: Orientation briefing for next day's glacier trek",
        ],
        overnight: "Hotel / Camp in Sonamarg",
      },
      {
        day: 2,
        title: "Thajiwas Glacier Trek",
        activities: [
          "Early morning breakfast and depart for trailhead",
          "Pony ride or walk to Thajiwas Glacier base (3 km)",
          "Trek up the glacier moraine — crampons available for hire",
          "360° views of Kolahoi, Amarnath ranges and Sonamarg valley",
          "Optional extension: Upper Thajiwas for advanced trekkers",
          "Picnic lunch at the glacier",
          "Return by afternoon — evening free at leisure",
        ],
        overnight: "Hotel / Camp in Sonamarg",
      },
      {
        day: 3,
        title: "Sonamarg to Srinagar — Departure",
        activities: [
          "Early morning photography — golden hour light on the meadows",
          "Optional short walk to the Vishansar Lake trailhead",
          "Drive back to Srinagar through the stunning Sindh valley",
          "Drop at Srinagar Airport / Railway Station",
        ],
        overnight: "Departure",
      },
    ],
    inclusions: [
      "2 nights accommodation in Sonamarg (hotel or tent camp)",
      "Daily breakfast and dinner",
      "Srinagar–Sonamarg–Srinagar transfer by private cab",
      "Airport pickup and drop",
      "Local trek guide for Thajiwas Glacier",
      "All toll, parking & driver charges",
    ],
    exclusions: [
      "Pony hire at Thajiwas (~₹400–600)",
      "Personal trekking gear (we can arrange on request)",
      "Flights / trains to Srinagar",
      "Lunch on all days",
      "Personal expenses & shopping",
      "Travel insurance",
    ],
    pricing: [
      { label: "2 Persons",  price: "₹9,500 / person" },
      { label: "4 Persons",  price: "₹8,500 / person" },
      { label: "6 Persons",  price: "₹7,800 / person" },
      { label: "Camp Stay Upgrade", price: "₹500 extra / person" },
    ],
    tips: [
      "Wear sturdy shoes — the glacier surface is uneven",
      "Carry sunscreen SPF 50+ and sunglasses — snow glare is intense",
      "Best to start the glacier trek before 9 AM — afternoon clouds roll in",
      "The road to Sonamarg passes through Zoji La — can close unexpectedly in bad weather",
    ],
    bestTime: "May to October. Snow on Thajiwas Glacier is best May–July. August–September offers green meadows with less snow but beautiful weather.",
  },
];

export const getPackageBySlug = (slug: string): Package | undefined =>
  packages.find((p) => p.slug === slug);
