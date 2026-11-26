const destinations = [
  {
   id: "manali",
    name: "Manali",
    region: "North India",
    weather: "Cool/Snow",
    vibe: "Mountains",
    budgetPerDay: "2500",
    bestMonths:"Oct-feb, May-June",
    idealDays: "4-5 Days",
    summary: "Snowy peaks, cafre culture, and quick mountain escapes.",
    hotels: [
      { id: "manali-stay-1", name: "Snow Peak Retreat", area: "Mall Road", rating: 4, pricePerNight: 3500, tags: ["Restaurant", "Mountain view"] },
      { id: "manali-stay-2", name: "Himalayan Pine Resort", area: "Old Manali", rating: 5, pricePerNight: 7800, tags: ["Spa", "Mountain view", "Restaurant"] }
    ],
    transport: [
      { mode: "Bus", route: "Delhi to Manali Volvo", fareRange: "₹1,100–2,200", duration: "12–14h" },
      { mode: "Cab / auto", route: "Manali to Solang Valley", fareRange: "₹1,500–2,500", duration: "1h each way" }
    ]
  },
  {
     id: "goa",
    name: "Goa",
    region: "West India",
    weather: "Tropical/Warm",
    vibe: "Beaches",
    budgetPerDay: "3000",
    bestMonths:"Nov-Feb",
    idealDays: "4-5 Days",
    summary: "Coastal beaches, relaxed cafes, and easy weekend escapes.",
    hotels: [
      { id: "goa-stay-1", name: "Palm Grove Suites", area: "Candolim", rating: 4, pricePerNight: 4200, tags: ["Pool", "Restaurant"] },
      { id: "goa-stay-2", name: "Azure Bay Resort", area: "Vagator", rating: 5, pricePerNight: 9500, tags: ["Spa", "Pool", "Beach access"] }
    ],
    transport: [
      { mode: "Flight", route: "Dabolim / Mopa Airport", fareRange: "₹3,500–8,000", duration: "1.5–2.5h" },
      { mode: "Train", route: "Madgaon / Thivim station", fareRange: "₹500–2,200", duration: "10–14h" }
    ]
  },
  {
    id: "gangtok",
    name: "Gangtok",
    region: "Northeast India",
    weather: "Cool/Crisp",
    vibe: "Mountains",
    budgetPerDay: "2400",
    bestMonths:"Mar-May, Oct-Nov",
    idealDays: "4-5 Days",
    hotels: [
      { id: "hotel-tibet", name: "Hotel Tibet", area: "Paljor Stadium Road", rating: 4, pricePerNight: 4000, tags: ["Restaurant", "Mountain view"] },
      { id: "royal-plaza", name: "The Royal Plaza", area: "MG Marg", rating: 4, pricePerNight: 6500, tags: ["Restaurant", "Central location", "Spa"] },
      { id: "mayfair-spa", name: "Mayfair Spa Resort & Casino", area: "Ranipool", rating: 5, pricePerNight: 11000, tags: ["Spa", "Casino", "Pool", "Mountain view"] }
    ],
    transport: [
      { mode: "Flight", route: "Pakyong Airport (Delhi/Kolkata connections)", fareRange: "₹5,500–10,000", duration: "2h" },
      { mode: "Train", route: "Delhi/Kolkata to NJP, then taxi", fareRange: "₹700–2,500", duration: "10–24h + 4h" },
      { mode: "Bus", route: "Siliguri to Gangtok shared jeep", fareRange: "₹350–500", duration: "4–5h" },
      { mode: "Cab / auto", route: "Gangtok to Tsomgo Lake taxi", fareRange: "₹3,000–4,000", duration: "2h each way" }
    ]
  },
  {
     id: "shimla",
    name: "Shimla",
    region: "North India",
    weather: "Cool/Pleasant",
    vibe: "Mountains",
    budgetPerDay: "2200",
    bestMonths:"Mar-Jun, Dec-Feb",
    idealDays: "3-4 Days",
    summary: "Colonial walks, pine hills, heritage railway, and cool breezes.",
    hotels: [
      { id: "shimla-1", name: "Wildflower Hall, An Oberoi Resort", area: "Chharabra", rating: 5, pricePerNight: 24000, tags: ["Spa", "Heated pool", "Fine dining", "Himalayan view"] },
      { id: "shimla-2", name: "Clarkes Hotel", area: "The Mall Road", rating: 4, pricePerNight: 6500, tags: ["Heritage property", "Restaurant", "Central location"] },
      { id: "shimla-3", name: "Hotel Willow Banks", area: "The Mall Road", rating: 4, pricePerNight: 7500, tags: ["Restaurant", "Bar", "Mall Road access"] }
    ],
    transport: [
      { mode: "Flight", route: "Delhi to Shimla (Jubbarhatti)", fareRange: "₹4,500–8,000", duration: "1h 10m" },
      { mode: "Train", route: "Kalka to Shimla toy train", fareRange: "₹300–1,000", duration: "5h 30m" },
      { mode: "Bus", route: "Delhi to Shimla Volvo", fareRange: "₹1,000–1,800", duration: "8–10h" },
      { mode: "Cab / auto", route: "Shimla local cab (full day)", fareRange: "₹2,000–3,000", duration: "8h" }
    ]
  },
  {
    id: "leh",
    name: "Leh",
    region: "North India ",
    weather: "Cold/Dry",
    vibe: "Adventure",
    budgetPerDay: "3500",
    bestMonths:"May-Sep",
    idealDays: "6-7 Days",
    sumaary: "High passes, dramatic valleys, monasteries, and road-trip thrills.",
    hotels: [
      { id: "leh-1", name: "The Grand Dragon Ladakh", area: "Sheynam Road, Leh", rating: 5, pricePerNight: 12000, tags: ["Spa", "Restaurant", "Mountain view", "Heating"] },
      { id: "leh-2", name: "Stok Palace Heritage Hotel", area: "Stok Village", rating: 4, pricePerNight: 10000, tags: ["Royal heritage", "Garden", "Restaurant"] },
      { id: "leh-3", name: "Hotel Lharimo", area: "Changspa Road", rating: 3, pricePerNight: 5000, tags: ["Garden", "Restaurant", "Near Leh market"] }
    ],
    transport: [
      { mode: "Flight", route: "Delhi to Leh (Kushok Bakula Rimpochee)", fareRange: "₹5,500–12,000", duration: "1h 25m" },
      { mode: "Bus", route: "Manali to Leh (summer only)", fareRange: "₹2,000–3,500", duration: "16–20h" },
      { mode: "Cab / auto", route: "Leh to Pangong Lake shared taxi", fareRange: "₹1,500–2,500", duration: "5h" },
      { mode: "Cab / auto", route: "Leh local sightseeing cab", fareRange: "₹2,500–4,000", duration: "Full day" }
    ]
  },
  {
     id: "darjeeling",
    name: "Darjeeling",
    region: "East India",
    weather: "Cool/Chilly",
    vibe: "Mountains",
    budgetPerDay: "2300",
    bestMonths:"Mar-May, Oct-Nov",
    idealDays: "3-4 Days",
    summary: "Himalayan views, toy train charm, and tea gardens.",
    hotels: [
      { id: "darjeeling-1", name: "Mayfair Hill Resort", area: "Mayfair, Mount Pleasant", rating: 5, pricePerNight: 9000, tags: ["Colonial style", "Spa", "Garden", "Restaurant"] },
      { id: "darjeeling-2", name: "Windamere Hotel", area: "Observatory Hill", rating: 4, pricePerNight: 14000, tags: ["Heritage", "Afternoon tea", "Garden"] },
      { id: "darjeeling-3", name: "Hotel Dekeling", area: "Hooker Road", rating: 3, pricePerNight: 4500, tags: ["Restaurant", "Mountain view"] }
    ],
    transport: [
      { mode: "Flight", route: "Kolkata to Bagdogra, then 3h taxi", fareRange: "₹3,500–7,000", duration: "1h 20m + 3h" },
      { mode: "Train", route: "Kolkata to New Jalpaiguri (Darjeeling Mail)", fareRange: "₹500–1,800", duration: "10–11h" },
      { mode: "Train", route: "NJP to Darjeeling toy train (joy ride)", fareRange: "₹1,500", duration: "7h" },
      { mode: "Cab / auto", route: "Bagdogra to Darjeeling shared jeep", fareRange: "₹400–600", duration: "3–3h 30m" }
    ]
  },
  {
    id: "shillong",
    name: "Shillong",
    region: "East India",
    weather: "Cool/Chilly",
    vibe: "Mountains",
    budgetPerDay: "2400",
    bestMonths:"Oct-Apr",
    idealDays: "4-5 Days",
    summary: "Misty Hills, waterfalls, lakes, and live music vibes. ",
    hotels: [
      { id: "shillong-1", name: "Ri Kynjai", area: "Umiam Lake", rating: 4, pricePerNight: 12000, tags: ["Lake view", "Spa", "Restaurant"] },
      { id: "shillong-2", name: "Hotel Polo Towers", area: "Polo Grounds", rating: 4, pricePerNight: 5500, tags: ["Restaurant", "Bar", "Central location"] },
      { id: "shillong-3", name: "Tripura Castle", area: "Cleve Colony", rating: 3, pricePerNight: 5000, tags: ["Heritage", "Garden", "Restaurant"] }
    ],
    transport: [
      { mode: "Flight", route: "Guwahati to Shillong Airport (Umroi)", fareRange: "₹3,500–6,000", duration: "40m" },
      { mode: "Bus", route: "Guwahati to Shillong shared cab", fareRange: "₹400–600", duration: "3h" },
      { mode: "Train", route: "Delhi/Kolkata to Guwahati", fareRange: "₹800–3,000", duration: "20–30h" },
      { mode: "Cab / auto", route: "Shillong to Cherrapunji cab", fareRange: "₹2,500–3,500", duration: "2h each way" }
    ]
  },
  {
    id: "munnar",
    name: "Munnar",
    region: "South India",
    weather: "Cool/Misty",
    vibe: "Mountains",
    budgetPerDay: "2400",
    bestMonths:"Sep-Mar",
    idealDays: "3-4 Days",
    summary: "Rolling tea estates, misty hills, and calm nature trails.",
    hotels: [
      { id: "munnar-1", name: "Windermere Estate", area: "Pothamedu", rating: 5, pricePerNight: 16000, tags: ["Plantation views", "Spa", "Restaurant", "Bonfire"] },
      { id: "munnar-2", name: "Blanket Hotel & Spa", area: "Anachal", rating: 4, pricePerNight: 8500, tags: ["Spa", "Pool", "Valley view"] },
      { id: "munnar-3", name: "Tea County (KTDC)", area: "Munnar town", rating: 4, pricePerNight: 6500, tags: ["Tea estate", "Restaurant", "Garden"] }
    ],
    transport: [
      { mode: "Flight", route: "Kochi airport, then 4h taxi", fareRange: "₹4,000–8,000 (flight)", duration: "1–2h + 4h" },
      { mode: "Bus", route: "Ernakulam to Munnar KSRTC", fareRange: "₹150–300", duration: "4–5h" },
      { mode: "Train", route: "Chennai to Aluva/Ernakulam, then bus", fareRange: "₹500–1,800", duration: "11–12h + 4h" },
      { mode: "Cab / auto", route: "Munnar local sightseeing cab", fareRange: "₹2,500–3,500", duration: "Full day" }
    ]
  },
  {
    id: "kerala",
    name: "Kerala",
    region: "South India",
    weather: "Tropical / Humid",
    vibe: "Nature",
    budgetPerDay: "2800",
    bestMonths:"Oct- Feb",
    idealDays: "5-6 Days",
    summary: "Backwaters, greenery, beaches, hill stations, and rexaled travel.",
    hotels: [
      { id: "kerala-1", name: "Taj Kumarakom Resort & Spa", area: "Kumarakom", rating: 5, pricePerNight: 18000, tags: ["Lake view", "Spa", "Pool", "Ayurveda"] },
      { id: "kerala-2", name: "Coconut Lagoon (CGH Earth)", area: "Kumarakom", rating: 5, pricePerNight: 16000, tags: ["Heritage villas", "Boat access", "Ayurveda"] },
      { id: "kerala-3", name: "Punnamada Resort", area: "Alleppey", rating: 4, pricePerNight: 9000, tags: ["Lakeside", "Pool", "Houseboat access"] }
    ],
    transport: [
      { mode: "Flight", route: "Kochi airport, then 1.5h taxi", fareRange: "₹4,000–8,000 (flight)", duration: "2h + 1h 30m" },
      { mode: "Train", route: "Delhi/Mumbai to Kottayam or Alappuzha", fareRange: "₹1,200–3,500", duration: "24–40h" },
      { mode: "Bus", route: "Ernakulam to Alleppey KSRTC", fareRange: "₹100–200", duration: "1h 30m–2h" },
      { mode: "Cab / auto", route: "Alleppey houseboat (1BR overnight)", fareRange: "₹8,000–15,000", duration: "22h" }
    ]
  },
  {
    id: "jaipur",
    name: "Jaipur",
    region: "North India",
    weather: "Warm/Pleasent",
    vibe: "Heritage",
    budgetPerDay: "2600",
    bestMonths:"Oct-Mar",
    idealDays: "3-4 Days",
    summary: "Lakes, lakeside palaces, courtyards, and scenic sunsets.",
    hotels: [
      { id: "jaipur-1", name: "Rambagh Palace (Taj)", area: "Bhawani Singh Road", rating: 5, pricePerNight: 35000, tags: ["Palace stay", "Spa", "Pool", "Fine dining"] },
      { id: "jaipur-2", name: "Taj Jai Mahal Palace", area: "Jacob Road, Civil Lines", rating: 5, pricePerNight: 14000, tags: ["Heritage", "Pool", "Gardens"] },
      { id: "jaipur-3", name: "Samode Haveli", area: "Gangapole", rating: 4, pricePerNight: 9500, tags: ["Haveli", "Pool", "Restaurant"] }
    ],
    transport: [
      { mode: "Flight", route: "Delhi/Mumbai to Jaipur", fareRange: "₹3,000–6,500", duration: "1h – 1h 40m" },
      { mode: "Train", route: "Delhi to Jaipur (Shatabdi / Vande Bharat)", fareRange: "₹600–1,800", duration: "4h 30m" },
      { mode: "Bus", route: "Delhi to Jaipur RSRTC Volvo", fareRange: "₹500–900", duration: "5–6h" },
      { mode: "Cab / auto", route: "Jaipur full-day cab with fort visits", fareRange: "₹2,000–3,000", duration: "8h" },
      { mode: "Cab / auto", route: "Auto-rickshaw (per ride)", fareRange: "₹100–300", duration: "15–30m" }
    ]
  },
  {
    id: "udaipur",
    name: "Udaipur",
    region: "West India",
    weather: "Pleasent/Mild",
    vibe: "Heritage",
    budgetPerDay: "2600",
    bestMonths:"Oct-Mar",
    idealDays: "3-4 Days",
    summary: "Lakes, lakeside palaces, courtyards, and scenic sunsets.",
    hotels: [
      { id: "udaipur-1", name: "Taj Lake Palace", area: "Lake Pichola", rating: 5, pricePerNight: 45000, tags: ["Palace on the lake", "Spa", "Fine dining"] },
      { id: "udaipur-2", name: "The Oberoi Udaivilas", area: "Haridasji Ki Magri", rating: 5, pricePerNight: 40000, tags: ["Private pools", "Spa", "Lake view"] },
      { id: "udaipur-3", name: "The Leela Palace Udaipur", area: "Lake Pichola shore", rating: 5, pricePerNight: 28000, tags: ["Lake view", "Spa", "Pool"] }
    ],
    transport: [
      { mode: "Flight", route: "Delhi/Mumbai to Udaipur (Dabok)", fareRange: "₹3,500–7,000", duration: "1h 20m–1h 40m" },
      { mode: "Train", route: "Delhi to Udaipur City (Mewar Express)", fareRange: "₹500–1,800", duration: "12h" },
      { mode: "Bus", route: "Jaipur to Udaipur Volvo", fareRange: "₹700–1,200", duration: "7–8h" },
      { mode: "Cab / auto", route: "Udaipur auto/e-rickshaw ride", fareRange: "₹80–250", duration: "10–25m" }
    ]
  },
  {
   id: "andaman",
    name: "Andaman",
    region: "Island/ Coast",
    weather: "Tropical/Warm",
    vibe: "Beaches",
    budgetPerDay: "4000",
    bestMonths:"Nov-Apr",
    idealDays: "5-6 Days",
    summary: "Clear water, white beaches, coral reefs, and island escapes.",
    hotels: [
      { id: "andaman-1", name: "Taj Exotica Resort & Spa", area: "Radhanagar Beach, Havelock", rating: 5, pricePerNight: 32000, tags: ["Private beach", "Spa", "Diving", "Fine dining"] },
      { id: "andaman-2", name: "SeaShell Port Blair", area: "Marine Hill, Port Blair", rating: 4, pricePerNight: 8500, tags: ["Pool", "Restaurant", "Near airport"] },
      { id: "andaman-3", name: "Barefoot at Havelock", area: "Govind Nagar Beach", rating: 4, pricePerNight: 17000, tags: ["Beachfront", "Dive centre", "Spa"] }
    ],
    transport: [
      { mode: "Flight", route: "Chennai/Kolkata/Delhi to Port Blair", fareRange: "₹6,000–13,000", duration: "2h – 3h 30m" },
      { mode: "Cab / auto", route: "Port Blair to Havelock Makruzz ferry", fareRange: "₹1,300–1,900", duration: "1h 30m" },
      { mode: "Cab / auto", route: "Havelock scooter or auto hire", fareRange: "₹500–1,000 per day", duration: "Self-drive" },
      { mode: "Cab / auto", route: "Port Blair airport to hotel taxi", fareRange: "₹300–600", duration: "15–25m" }
    ]
  }
];

module.exports = { destinations };
