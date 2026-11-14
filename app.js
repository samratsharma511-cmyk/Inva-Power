/**
 * INVA POWER - High Performance Battery E-Commerce Store
 * Selkirk-Inspired Athletic & Industrial Design
 */

const PRODUCTS = [
  // ----------------- TRUCK BATTERIES (EXPRESS SERIES) -----------------
  {
    id: "inva-truck-180",
    name: "Inva Power Express 180Ah Heavy Truck Battery",
    series: "Express",
    brand: "Inva Power",
    category: "truck",
    capacity: 180,
    unit: "Ah",
    price: 11500,
    mrp: 14900,
    scrapDiscount: 2200,
    warranty: "36 Months (24M Free + 12M Pro-rata)",
    image: "assets/inva-truck-express.svg",
    rating: 4.9,
    reviews: 142,
    badge: "HEAVY HAULER FLAGSHIP",
    voltage: "12V",
    cca: "1050 A",
    weight: "48.5 kg",
    dimensions: "508 x 222 x 257 mm",
    description: "Built for long-haul interstate commercial trucks and multi-axle trailers. Engineered with reinforced antimony-lead alloy plates for vibration-proof reliability on harsh Indian highways.",
    compatibleVehicles: ["Tata Signa 4825", "Ashok Leyland 4220", "BharatBenz 3528C", "Eicher Pro 6035", "Mahindra Blazo X"],
    variants: [
      { ah: 135, price: 7500, name: "135Ah (JCB & Earthmover)" },
      { ah: 150, price: 8800, name: "150Ah (Medium Truck)" },
      { ah: 165, price: 9800, name: "165Ah (Heavy Haul)" },
      { ah: 180, price: 11500, name: "180Ah (Multi-Axle Commercial)" }
    ]
  },
  {
    id: "inva-truck-165",
    name: "Inva Power Express 165Ah Commercial Truck Battery",
    series: "Express",
    brand: "Inva Power",
    category: "truck",
    capacity: 165,
    unit: "Ah",
    price: 9800,
    mrp: 12900,
    scrapDiscount: 1900,
    warranty: "36 Months (24M Free + 12M Pro-rata)",
    image: "assets/inva-truck-express.svg",
    rating: 4.8,
    reviews: 98,
    badge: "FLEET FAVORITE",
    voltage: "12V",
    cca: "950 A",
    weight: "44.0 kg",
    dimensions: "505 x 215 x 250 mm",
    description: "Designed for intermediate commercial vehicles and regional transport fleets requiring dependable cold starts and high cyclic endurance.",
    compatibleVehicles: ["Tata LPT 1613", "Ashok Leyland Boss 1215", "Eicher Pro 3015", "SML Isuzu Supreme"],
    variants: [
      { ah: 135, price: 7500, name: "135Ah" },
      { ah: 150, price: 8800, name: "150Ah" },
      { ah: 165, price: 9800, name: "165Ah" },
      { ah: 180, price: 11500, name: "180Ah" }
    ]
  },
  {
    id: "inva-truck-150",
    name: "Inva Power Express 150Ah Commercial Battery",
    series: "Express",
    brand: "Inva Power",
    category: "truck",
    capacity: 150,
    unit: "Ah",
    price: 8800,
    mrp: 11500,
    scrapDiscount: 1600,
    warranty: "36 Months (24M Free + 12M Pro-rata)",
    image: "assets/inva-truck-express.svg",
    rating: 4.8,
    reviews: 116,
    badge: "BEST VALUE TRUCK",
    voltage: "12V",
    cca: "880 A",
    weight: "41.0 kg",
    dimensions: "505 x 182 x 240 mm",
    description: "Factory balanced lead density for optimal cranking amps, low electrolyte loss, and rapid recharging under demanding alternator profiles.",
    compatibleVehicles: ["Tata 1109", "Ashok Leyland Guru", "Eicher Pro 2095", "School Buses & Commercial Cranes"],
    variants: [
      { ah: 135, price: 7500, name: "135Ah" },
      { ah: 150, price: 8800, name: "150Ah" },
      { ah: 165, price: 9800, name: "165Ah" },
      { ah: 180, price: 11500, name: "180Ah" }
    ]
  },
  {
    id: "inva-truck-135",
    name: "Inva Power Express 135Ah JCB & Heavy Duty Battery",
    series: "Express",
    brand: "Inva Power",
    category: "truck",
    capacity: 135,
    unit: "Ah",
    price: 7500,
    mrp: 9900,
    scrapDiscount: 1400,
    warranty: "36 Months (24M Free + 12M Pro-rata)",
    image: "assets/inva-truck-express.svg",
    rating: 4.9,
    reviews: 84,
    badge: "JCB SPECIAL",
    voltage: "12V",
    cca: "820 A",
    weight: "36.5 kg",
    dimensions: "505 x 182 x 230 mm",
    description: "Heavy duty construction built specifically for earthmovers, backhoes (JCB 3DX), tippers, and severe mining terrain with shock-resistant poly-grid casing.",
    compatibleVehicles: ["JCB 3DX Super", "CAT Backhoe Loader", "L&T Komatsu", "Tata Tipper 912"],
    variants: [
      { ah: 135, price: 7500, name: "135Ah (JCB Special)" },
      { ah: 150, price: 8800, name: "150Ah" },
      { ah: 165, price: 9800, name: "165Ah" },
      { ah: 180, price: 11500, name: "180Ah" }
    ]
  },

  // ----------------- TRACTOR BATTERIES (JAI KISAN SERIES) -----------------
  {
    id: "inva-tractor-100",
    name: "Inva Power Jai Kisan 100Ah Tractor Battery",
    series: "Jai Kisan",
    brand: "Inva Power",
    category: "tractor",
    capacity: 100,
    unit: "Ah",
    price: 6200,
    mrp: 8200,
    scrapDiscount: 1200,
    warranty: "48 Months (24M Free + 24M Pro-rata)",
    image: "assets/inva-tractor-jaikisan.svg",
    rating: 4.9,
    reviews: 175,
    badge: "JAI KISAN • 100AH",
    voltage: "12V",
    cca: "720 A",
    weight: "26.5 kg",
    dimensions: "410 x 175 x 235 mm",
    description: "Specially formulated for high HP heavy duty agricultural tractors and combine harvesters. Sustained cranking power even in peak winter sowing seasons.",
    compatibleVehicles: ["Mahindra Arjun Novo 605", "John Deere 5310 4WD", "Swaraj 963 FE", "New Holland 5620", "Sonalika Tiger 60"],
    variants: [
      { ah: 70, price: 5200, name: "70Ah (Mini Tractor)" },
      { ah: 88, price: 5800, name: "88Ah (Standard Farm)" },
      { ah: 100, price: 6200, name: "100Ah (Heavy 4WD Farm)" }
    ]
  },
  {
    id: "inva-tractor-88",
    name: "Inva Power Jai Kisan 88Ah Tractor Battery",
    series: "Jai Kisan",
    brand: "Inva Power",
    category: "tractor",
    capacity: 88,
    unit: "Ah",
    price: 5800,
    mrp: 7500,
    scrapDiscount: 1100,
    warranty: "48 Months (24M Free + 24M Pro-rata)",
    image: "assets/inva-tractor-jaikisan.svg",
    rating: 4.9,
    reviews: 210,
    badge: "FARMERS CHOICE #1",
    voltage: "12V",
    cca: "650 A",
    weight: "23.5 kg",
    dimensions: "360 x 175 x 230 mm",
    description: "The most trusted workhorse tractor battery across India. Heavy selenium alloy plates offer supreme corrosion resistance in dusty and humid field conditions.",
    compatibleVehicles: ["Mahindra 575 DI", "Swaraj 744 FE", "Eicher 380", "Massey Ferguson 241 DI", "Farmtrac 60 Powermaxx"],
    variants: [
      { ah: 70, price: 5200, name: "70Ah" },
      { ah: 88, price: 5800, name: "88Ah" },
      { ah: 100, price: 6200, name: "100Ah" }
    ]
  },
  {
    id: "inva-tractor-70",
    name: "Inva Power Jai Kisan 70Ah Tractor Battery",
    series: "Jai Kisan",
    brand: "Inva Power",
    category: "tractor",
    capacity: 70,
    unit: "Ah",
    price: 5200,
    mrp: 6700,
    scrapDiscount: 1000,
    warranty: "48 Months (24M Free + 24M Pro-rata)",
    image: "assets/inva-tractor-jaikisan.svg",
    rating: 4.8,
    reviews: 95,
    badge: "JAI KISAN COMPACT",
    voltage: "12V",
    cca: "580 A",
    weight: "19.8 kg",
    dimensions: "305 x 172 x 225 mm",
    description: "Ideal for orchard tractors, mini tractors (up to 30 HP), and threshers. Rugged handle and compact footprint with leak-proof vent caps.",
    compatibleVehicles: ["Mahindra Yuvraj 215", "Sonalika GT 22", "Captain 250 DI", "VST Shakti MT 270"],
    variants: [
      { ah: 70, price: 5200, name: "70Ah" },
      { ah: 88, price: 5800, name: "88Ah" },
      { ah: 100, price: 6200, name: "100Ah" }
    ]
  },

  // ----------------- INVERTER BATTERIES (TALL TUBULAR) -----------------
  {
    id: "inva-inverter-150",
    name: "Inva Power 150Ah Tall Tubular Inverter Battery",
    series: "Tubular Pro",
    brand: "Inva Power",
    category: "inverter",
    capacity: 150,
    unit: "Ah",
    price: 9000,
    mrp: 12500,
    scrapDiscount: 1800,
    warranty: "60 Months (36M Free + 24M Pro-rata)",
    image: "assets/inva-inverter-tubular.svg",
    rating: 4.9,
    reviews: 320,
    badge: "TOP SELLER • HOME & SHOP",
    voltage: "12V",
    cca: "N/A (C20 Rating)",
    weight: "51.0 kg",
    dimensions: "502 x 191 x 440 mm",
    description: "High-density tall tubular technology with 99.99% pure virgin lead spine casting. Delivers 4-6 hours continuous backup for fans, lights, LED TVs, and home Wi-Fi.",
    compatibleVehicles: ["Home Inverter 800VA - 1100VA", "Retail Shops", "Medical Clinics", "Small Offices"],
    variants: [
      { ah: 150, price: 9000, name: "150Ah (4-5 Hrs Backup)" },
      { ah: 180, price: 10500, name: "180Ah (6-7 Hrs Backup)" },
      { ah: 200, price: 12500, name: "200Ah (8-9 Hrs Backup)" },
      { ah: 220, price: 13500, name: "220Ah (10+ Hrs Backup)" }
    ]
  },
  {
    id: "inva-inverter-180",
    name: "Inva Power 180Ah Tall Tubular Inverter Battery",
    series: "Tubular Pro",
    brand: "Inva Power",
    category: "inverter",
    capacity: 180,
    unit: "Ah",
    price: 10500,
    mrp: 14200,
    scrapDiscount: 2000,
    warranty: "60 Months (36M Free + 24M Pro-rata)",
    image: "assets/inva-inverter-tubular.svg",
    rating: 4.9,
    reviews: 188,
    badge: "EXTRA BACKUP 180AH",
    voltage: "12V",
    cca: "N/A (C20 Rating)",
    weight: "56.0 kg",
    dimensions: "502 x 191 x 440 mm",
    description: "Equipped with 6 ceramic float indicators and high electrolyte reserve. Engineered specifically for areas experiencing frequent 6-8 hour blackouts.",
    compatibleVehicles: ["Home Inverter 1000VA - 1500VA", "Supermarkets", "Restaurants", "Solar Inverters"],
    variants: [
      { ah: 150, price: 9000, name: "150Ah" },
      { ah: 180, price: 10500, name: "180Ah" },
      { ah: 200, price: 12500, name: "200Ah" },
      { ah: 220, price: 13500, name: "220Ah" }
    ]
  },
  {
    id: "inva-inverter-200",
    name: "Inva Power 200Ah Tall Tubular Inverter Battery",
    series: "Tubular Pro",
    brand: "Inva Power",
    category: "inverter",
    capacity: 200,
    unit: "Ah",
    price: 12500,
    mrp: 16800,
    scrapDiscount: 2300,
    warranty: "60 Months (36M Free + 24M Pro-rata)",
    image: "assets/inva-inverter-tubular.svg",
    rating: 4.9,
    reviews: 145,
    badge: "MAXIMUM CAPACITY",
    voltage: "12V",
    cca: "N/A (C20 Rating)",
    weight: "62.0 kg",
    dimensions: "505 x 195 x 450 mm",
    description: "Ultra-heavy duty tall tubular battery for homes with heavy appliance loads (refrigerators, multiple coolers, desktop PCs, security cameras).",
    compatibleVehicles: ["High Capacity Inverter 1400VA - 2500VA", "Duplex Homes", "Hospitals", "Petrol Pumps"],
    variants: [
      { ah: 150, price: 9000, name: "150Ah" },
      { ah: 180, price: 10500, name: "180Ah" },
      { ah: 200, price: 12500, name: "200Ah" },
      { ah: 220, price: 13500, name: "220Ah" }
    ]
  },
  {
    id: "inva-inverter-220",
    name: "Inva Power 220Ah Jumbo Tubular Inverter Battery",
    series: "Tubular Pro",
    brand: "Inva Power",
    category: "inverter",
    capacity: 220,
    unit: "Ah",
    price: 13500,
    mrp: 18500,
    scrapDiscount: 2500,
    warranty: "60 Months (36M Free + 24M Pro-rata)",
    image: "assets/inva-inverter-tubular.svg",
    rating: 5.0,
    reviews: 92,
    badge: "JUMBO MONSTER 220AH",
    voltage: "12V",
    cca: "N/A (C20 Rating)",
    weight: "66.5 kg",
    dimensions: "508 x 200 x 460 mm",
    description: "The pinnacle of lead-acid tubular energy storage. Maximum backup duration with ultra-thick positive gauntlets and low internal resistance.",
    compatibleVehicles: ["Commercial Complexes", "2.5kVA+ Solar Inverter Systems", "Data Centers", "Large Bungalows"],
    variants: [
      { ah: 150, price: 9000, name: "150Ah" },
      { ah: 180, price: 10500, name: "180Ah" },
      { ah: 200, price: 12500, name: "200Ah" },
      { ah: 220, price: 13500, name: "220Ah" }
    ]
  },

  // ----------------- BIKE BATTERIES (INVA POWER) -----------------
  {
    id: "inva-bike-5",
    name: "Inva Power MotoVibe 5Ah VRLA Bike Battery",
    series: "MotoVibe",
    brand: "Inva Power",
    category: "bike",
    capacity: 5,
    unit: "Ah",
    price: 1250,
    mrp: 1650,
    scrapDiscount: 150,
    warranty: "48 Months (24M Free + 24M Pro-rata)",
    image: "assets/inva-bike-power.svg",
    rating: 4.8,
    reviews: 260,
    badge: "ZERO MAINTENANCE",
    voltage: "12V",
    cca: "80 A",
    weight: "1.95 kg",
    dimensions: "120 x 60 x 130 mm",
    description: "Absorbent Glass Mat (AGM) VRLA sealed lead acid battery. 100% spill-proof, quick cold cranking, and vibration proof for two-wheelers.",
    compatibleVehicles: ["Honda Activa 3G/4G/5G/6G", "Hero Splendor Plus", "Hero HF Deluxe", "Bajaj Platina", "TVS Jupiter"],
    variants: [
      { ah: 5, price: 1250, name: "5Ah (Scooters & Commuters)" },
      { ah: 7, price: 1650, name: "7Ah (150-200cc Bikes)" },
      { ah: 9, price: 1950, name: "9Ah (Cruisers & 250cc+)" }
    ]
  },
  {
    id: "inva-bike-7",
    name: "Inva Power MotoVibe 7Ah Performance Bike Battery",
    series: "MotoVibe",
    brand: "Inva Power",
    category: "bike",
    capacity: 7,
    unit: "Ah",
    price: 1650,
    mrp: 2150,
    scrapDiscount: 200,
    warranty: "48 Months (24M Free + 24M Pro-rata)",
    image: "assets/inva-bike-power.svg",
    rating: 4.9,
    reviews: 134,
    badge: "HIGH CRANKING 7AH",
    voltage: "12V",
    cca: "120 A",
    weight: "2.55 kg",
    dimensions: "150 x 87 x 94 mm",
    description: "High-surge cranking power for modern fuel-injected bikes with self-start, digital dashboards, and LED lighting fixtures.",
    compatibleVehicles: ["Bajaj Pulsar 150/180/220", "Yamaha FZ/R15", "TVS Apache RTR 160/200", "KTM Duke 200"],
    variants: [
      { ah: 5, price: 1250, name: "5Ah" },
      { ah: 7, price: 1650, name: "7Ah" },
      { ah: 9, price: 1950, name: "9Ah" }
    ]
  },

  // ----------------- COMPETITOR BRANDS: EXIDE -----------------
  {
    id: "exide-truck-180",
    name: "Exide Xpress 180Ah Heavy Commercial Battery",
    series: "Xpress",
    brand: "Exide",
    category: "truck",
    capacity: 180,
    unit: "Ah",
    price: 13900,
    mrp: 16500,
    scrapDiscount: 2200,
    warranty: "36 Months (18M Free + 18M Pro-rata)",
    image: "assets/exide-truck.svg",
    rating: 4.7,
    reviews: 189,
    badge: "EXIDE OFFICIAL",
    voltage: "12V",
    cca: "980 A",
    weight: "51.0 kg",
    dimensions: "508 x 222 x 257 mm",
    description: "Standard OEM fitment for heavy multi-axle trucks and buses. Built with Exide's proven hybrid grid alloy.",
    compatibleVehicles: ["Tata Signa", "Ashok Leyland Captain", "BharatBenz"]
  },
  {
    id: "exide-truck-150",
    name: "Exide Xpress 150Ah Commercial Truck Battery",
    series: "Xpress",
    brand: "Exide",
    category: "truck",
    capacity: 150,
    unit: "Ah",
    price: 10800,
    mrp: 13200,
    scrapDiscount: 1600,
    warranty: "36 Months (18M Free + 18M Pro-rata)",
    image: "assets/exide-truck.svg",
    rating: 4.6,
    reviews: 140,
    badge: "EXIDE COMMERCIAL",
    voltage: "12V",
    cca: "840 A",
    weight: "42.5 kg",
    dimensions: "505 x 182 x 240 mm",
    description: "Exide heavy duty commercial series with factory electrolyte filling and leak-resistant vent plugs.",
    compatibleVehicles: ["Tata 1109", "Ashok Leyland Ecomet", "Eicher Trucks"]
  },
  {
    id: "exide-inverter-150",
    name: "Exide Invamaster 150Ah Tall Tubular Battery",
    series: "Invamaster",
    brand: "Exide",
    category: "inverter",
    capacity: 150,
    unit: "Ah",
    price: 11400,
    mrp: 14800,
    scrapDiscount: 1800,
    warranty: "48 Months (36M Free + 12M Pro-rata)",
    image: "assets/exide-inverter.svg",
    rating: 4.7,
    reviews: 410,
    badge: "EXIDE TUBULAR",
    voltage: "12V",
    cca: "N/A",
    weight: "53.0 kg",
    dimensions: "500 x 190 x 440 mm",
    description: "Exide Invamaster tall tubular deep cycle battery for residential power backup.",
    compatibleVehicles: ["All 12V Home Inverters"]
  },
  {
    id: "exide-tractor-88",
    name: "Exide Jai Kisan 88Ah Heavy Duty Tractor Battery",
    series: "Jai Kisan",
    brand: "Exide",
    category: "tractor",
    capacity: 88,
    unit: "Ah",
    price: 6900,
    mrp: 8600,
    scrapDiscount: 1100,
    warranty: "36 Months (18M Free + 18M Pro-rata)",
    image: "assets/inva-tractor-jaikisan.svg",
    rating: 4.7,
    reviews: 150,
    badge: "EXIDE TRACTOR",
    voltage: "12V",
    cca: "630 A",
    weight: "24.0 kg",
    dimensions: "360 x 175 x 230 mm",
    description: "Exide Agri series specially crafted for agricultural equipment and harsh rural power draws.",
    compatibleVehicles: ["Mahindra 575 DI", "Swaraj 744", "John Deere"]
  },

  // ----------------- COMPETITOR BRANDS: LUMINOUS -----------------
  {
    id: "luminous-inverter-150",
    name: "Luminous Red Charge 150Ah Tall Tubular Battery",
    series: "Red Charge",
    brand: "Luminous",
    category: "inverter",
    capacity: 150,
    unit: "Ah",
    price: 11200,
    mrp: 14500,
    scrapDiscount: 1800,
    warranty: "36 Months (36M Free Replacement)",
    image: "assets/luminous-inverter.svg",
    rating: 4.8,
    reviews: 380,
    badge: "LUMINOUS RED CHARGE",
    voltage: "12V",
    cca: "N/A",
    weight: "52.0 kg",
    dimensions: "502 x 191 x 440 mm",
    description: "Rugged tubular design with high acid volume per ampere hour to withstand long power outages.",
    compatibleVehicles: ["Luminous Inverters", "Microtek", "Amaron Inverters"]
  },
  {
    id: "luminous-inverter-180",
    name: "Luminous Inverlast 180Ah Tall Tubular Battery",
    series: "Inverlast",
    brand: "Luminous",
    category: "inverter",
    capacity: 180,
    unit: "Ah",
    price: 12900,
    mrp: 16200,
    scrapDiscount: 2000,
    warranty: "48 Months (36M Free + 12M Pro-rata)",
    image: "assets/luminous-inverter.svg",
    rating: 4.8,
    reviews: 215,
    badge: "LUMINOUS INVERLAST",
    voltage: "12V",
    cca: "N/A",
    weight: "58.0 kg",
    dimensions: "502 x 191 x 440 mm",
    description: "Special puncture resistant polyethylene separator for minimal internal shorts and long cycling.",
    compatibleVehicles: ["Luminous 1.5kVA - 2kVA systems", "Homes & Shops"]
  }
];

// STATE MANAGEMENT
let state = {
  products: [...PRODUCTS],
  categoryFilter: 'all',
  brandFilter: 'all',
  capacityFilter: 'all',
  searchQuery: '',
  sortBy: 'featured',
  cart: [],
  activeQuickViewProduct: null,
  activeCheckoutStep: 1,
  selectedPaymentMethod: 'online', // 'online' or 'cod'
  onlineSubMethod: 'upi', // 'upi', 'card', 'netbanking'
  customerDetails: {
    fullName: '',
    phone: '',
    address: '',
    pincode: '',
    city: 'New Delhi',
    state: 'Delhi',
    installPreference: true
  },
  lastConfirmedOrder: null
};

// DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', () => {
  renderProductGrid();
  setupFilterListeners();
  setupCartEvents();
  setupFinderWidget();
  setupScrapCalculator();
  updateCartBadge();
});

// RENDER PRODUCTS
function renderProductGrid() {
  const container = document.getElementById('product-grid');
  if (!container) return;

  let filtered = state.products.filter(item => {
    // Category filter
    if (state.categoryFilter !== 'all' && item.category !== state.categoryFilter) return false;
    // Brand filter
    if (state.brandFilter !== 'all' && item.brand.toLowerCase() !== state.brandFilter.toLowerCase()) return false;
    // Capacity filter
    if (state.capacityFilter !== 'all') {
      const cap = item.capacity;
      if (state.capacityFilter === 'low' && cap >= 100) return false;
      if (state.capacityFilter === 'mid' && (cap < 100 || cap > 165)) return false;
      if (state.capacityFilter === 'high' && cap <= 165) return false;
    }
    // Search filter
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      const match = item.name.toLowerCase().includes(q) ||
                    item.brand.toLowerCase().includes(q) ||
                    item.series.toLowerCase().includes(q) ||
                    item.category.toLowerCase().includes(q) ||
                    (item.compatibleVehicles && item.compatibleVehicles.some(v => v.toLowerCase().includes(q)));
      if (!match) return false;
    }
    return true;
  });

  // Sorting
  if (state.sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'capacity-high') {
    filtered.sort((a, b) => b.capacity - a.capacity);
  } else if (state.sortBy === 'featured') {
    // Inva Power first, then rating
    filtered.sort((a, b) => {
      if (a.brand === 'Inva Power' && b.brand !== 'Inva Power') return -1;
      if (a.brand !== 'Inva Power' && b.brand === 'Inva Power') return 1;
      return b.rating - a.rating;
    });
  }

  const countBadge = document.getElementById('results-count');
  if (countBadge) {
    countBadge.textContent = `${filtered.length} Batteries Found`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center bg-gray-900/60 rounded-2xl border border-gray-800 p-8">
        <i class="fa-solid fa-car-battery text-5xl text-gray-600 mb-4"></i>
        <h3 class="text-xl font-bold text-white mb-2">No matching batteries found</h3>
        <p class="text-gray-400 mb-6">Try clearing your filters or search terms.</p>
        <button onclick="resetFilters()" class="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition">
          Reset All Filters
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(product => {
    const isOurBrand = product.brand === 'Inva Power';
    const effectivePriceWithScrap = product.price - product.scrapDiscount;

    // Capacity variant pill rendering
    let variantPills = '';
    if (product.variants && product.variants.length > 0) {
      variantPills = `
        <div class="mt-3 pt-3 border-t border-gray-800">
          <div class="flex items-center justify-between text-xs text-gray-400 mb-1.5">
            <span>Select Ah Capacity:</span>
            <span class="text-emerald-400 font-medium">All In Stock</span>
          </div>
          <div class="flex flex-wrap gap-1.5">
            ${product.variants.map(v => `
              <button 
                onclick="selectCapacityVariant('${product.id}', ${v.ah}, ${v.price}, event)"
                class="px-2.5 py-1 text-xs rounded border transition ${v.ah === product.capacity ? 'bg-red-600/30 border-red-500 text-white font-bold' : 'bg-gray-800/80 border-gray-700 text-gray-300 hover:border-gray-500'}"
              >
                ${v.ah} Ah
              </button>
            `).join('')}
          </div>
        </div>
      `;
    }

    return `
      <div class="bg-gray-900/90 rounded-2xl border ${isOurBrand ? 'border-red-600/40 shadow-lg shadow-red-950/20' : 'border-gray-800'} overflow-hidden flex flex-col card-hover-effect relative group">
        
        <!-- Top Badges -->
        <div class="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
          <span class="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-md text-white tracking-wider ${isOurBrand ? 'bg-gradient-to-r from-red-600 to-amber-600 shadow-md' : 'bg-gray-800 text-gray-200 border border-gray-700'}">
            ${product.badge}
          </span>
          ${isOurBrand ? `
            <span class="bg-black/80 backdrop-blur-md text-emerald-400 border border-emerald-500/40 text-[10px] font-bold px-2 py-0.5 rounded">
              ⚡ DIRECT FACTORY BRAND
            </span>
          ` : ''}
        </div>

        <div class="absolute top-3 right-3 z-10">
          <span class="text-xs font-semibold px-2 py-1 rounded bg-black/70 backdrop-blur-md text-gray-300 border border-gray-700 flex items-center gap-1">
            <i class="fa-solid fa-star text-amber-400 text-[10px]"></i> ${product.rating}
            <span class="text-gray-400 text-[10px]">(${product.reviews})</span>
          </span>
        </div>

        <!-- Product Image Preview -->
        <div class="relative bg-gradient-to-b from-gray-800/60 to-gray-950 p-6 flex items-center justify-center min-h-[220px] overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 cursor-pointer" onclick="openQuickView('${product.id}')">
          <img src="${product.image}" alt="${product.name}" class="h-44 w-auto object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-105" />
          
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
            <button onclick="openQuickView('${product.id}'); event.stopPropagation();" class="px-4 py-2 bg-white text-gray-950 text-xs font-bold rounded-lg shadow hover:bg-gray-200 transition flex items-center gap-1.5">
              <i class="fa-solid fa-eye"></i> Quick View
            </button>
          </div>
        </div>

        <!-- Product Details -->
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <!-- Brand & Series -->
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-xs font-bold uppercase tracking-wider ${isOurBrand ? 'text-red-500' : 'text-gray-400'}">
                ${product.brand} • ${product.series}
              </span>
              <span class="text-[11px] text-gray-400 font-mono bg-gray-800 px-2 py-0.5 rounded border border-gray-700">
                ${product.capacity} ${product.unit}
              </span>
            </div>

            <h3 class="text-base font-bold text-white group-hover:text-red-400 transition cursor-pointer line-clamp-2" onclick="openQuickView('${product.id}')">
              ${product.name}
            </h3>

            <!-- Specs line -->
            <div class="mt-2.5 flex items-center gap-2 text-xs text-gray-400 flex-wrap">
              <span class="flex items-center gap-1">
                <i class="fa-solid fa-shield text-emerald-400"></i> ${product.warranty.split('(')[0].trim()}
              </span>
              <span>•</span>
              <span class="flex items-center gap-1">
                <i class="fa-solid fa-bolt text-amber-400"></i> ${product.voltage}
              </span>
              ${product.cca !== 'N/A' && product.cca !== 'N/A (C20 Rating)' ? `
                <span>•</span>
                <span class="text-sky-400">${product.cca} CCA</span>
              ` : ''}
            </div>

            <!-- Capacity variants if any -->
            ${variantPills}
          </div>

          <!-- Pricing & Cart Button -->
          <div class="mt-5 pt-3.5 border-t border-gray-800">
            <!-- Dual Price display: Regular & with Scrap Exchange -->
            <div class="flex items-baseline justify-between mb-1">
              <div class="flex items-baseline gap-2">
                <span class="text-2xl font-black text-white font-mono">
                  ₹${product.price.toLocaleString('en-IN')}
                </span>
                <span class="text-xs text-gray-500 line-through">
                  ₹${product.mrp.toLocaleString('en-IN')}
                </span>
              </div>
              <span class="text-[11px] font-bold text-red-400 bg-red-950/60 border border-red-800 px-1.5 py-0.5 rounded">
                ${Math.round(((product.mrp - product.price) / product.mrp) * 100)}% OFF
              </span>
            </div>

            <!-- Old Battery Scrap Price Banner -->
            <div class="bg-emerald-950/40 border border-emerald-500/30 rounded-lg p-2 mb-3.5 flex items-center justify-between text-xs">
              <span class="text-emerald-300 font-medium flex items-center gap-1">
                <i class="fa-solid fa-recycle text-emerald-400"></i> With Old Scrap Exchange:
              </span>
              <span class="font-bold text-emerald-400 font-mono text-sm">
                ₹${effectivePriceWithScrap.toLocaleString('en-IN')}
              </span>
            </div>

            <!-- Action Buttons -->
            <div class="grid grid-cols-2 gap-2">
              <button 
                onclick="addToCart('${product.id}', false)"
                class="w-full py-2.5 px-3 bg-gray-800 hover:bg-gray-700 text-white font-bold text-xs rounded-xl border border-gray-700 hover:border-gray-600 transition flex items-center justify-center gap-1.5"
              >
                <i class="fa-solid fa-cart-plus text-red-500"></i> Add to Cart
              </button>

              <button 
                onclick="buyNow('${product.id}')"
                class="w-full py-2.5 px-3 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-red-700/30 transition flex items-center justify-center gap-1.5"
              >
                <i class="fa-solid fa-bolt"></i> Buy Now
              </button>
            </div>
            
            <div class="mt-2 text-[11px] text-center text-gray-400 flex items-center justify-center gap-3">
              <span><i class="fa-solid fa-truck-fast text-sky-400"></i> Free Delivery</span>
              <span><i class="fa-solid fa-money-bill-wave text-emerald-400"></i> COD Available</span>
            </div>
          </div>
        </div>

      </div>
    `;
  }).join('');
}

// CAPACITY VARIANT SELECTOR
window.selectCapacityVariant = function(productId, targetAh, targetPrice, event) {
  event.stopPropagation();
  const prodIndex = state.products.findIndex(p => p.id === productId);
  if (prodIndex !== -1) {
    state.products[prodIndex].capacity = targetAh;
    state.products[prodIndex].price = targetPrice;
    state.products[prodIndex].mrp = Math.round(targetPrice * 1.3);
    state.products[prodIndex].scrapDiscount = Math.round(targetPrice * 0.18);
    renderProductGrid();
  }
};

// FILTER LISTENERS
function setupFilterListeners() {
  // Category tabs
  const categoryTabs = document.querySelectorAll('[data-category-filter]');
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      categoryTabs.forEach(t => t.classList.remove('active-category-tab'));
      tab.classList.add('active-category-tab');
      state.categoryFilter = tab.getAttribute('data-category-filter');
      renderProductGrid();
    });
  });

  // Brand chips
  const brandChips = document.querySelectorAll('[data-brand-filter]');
  brandChips.forEach(chip => {
    chip.addEventListener('click', () => {
      brandChips.forEach(c => c.classList.remove('active-brand-chip', 'bg-white', 'text-gray-950'));
      chip.classList.add('active-brand-chip', 'bg-white', 'text-gray-950');
      state.brandFilter = chip.getAttribute('data-brand-filter');
      renderProductGrid();
    });
  });

  // Search Input
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderProductGrid();
    });
  }

  // Sort Dropdown
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderProductGrid();
    });
  }

  // Capacity Filter Dropdown
  const capSelect = document.getElementById('capacity-select');
  if (capSelect) {
    capSelect.addEventListener('change', (e) => {
      state.capacityFilter = e.target.value;
      renderProductGrid();
    });
  }
}

// RESET FILTERS
window.resetFilters = function() {
  state.categoryFilter = 'all';
  state.brandFilter = 'all';
  state.capacityFilter = 'all';
  state.searchQuery = '';
  state.sortBy = 'featured';

  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) sortSelect.value = 'featured';

  const capSelect = document.getElementById('capacity-select');
  if (capSelect) capSelect.value = 'all';

  const categoryTabs = document.querySelectorAll('[data-category-filter]');
  categoryTabs.forEach((t, i) => {
    if (i === 0) t.classList.add('active-category-tab');
    else t.classList.remove('active-category-tab');
  });

  const brandChips = document.querySelectorAll('[data-brand-filter]');
  brandChips.forEach((c, i) => {
    if (i === 0) c.classList.add('active-brand-chip', 'bg-white', 'text-gray-950');
    else c.classList.remove('active-brand-chip', 'bg-white', 'text-gray-950');
  });

  renderProductGrid();
};

// CART MANAGEMENT
function setupCartEvents() {
  const openCartBtn = document.getElementById('open-cart-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartBackdrop = document.getElementById('cart-backdrop');
  const cartDrawer = document.getElementById('cart-drawer');

  const toggleCart = (show) => {
    if (show) {
      renderCartItems();
      cartBackdrop.classList.remove('hidden');
      cartDrawer.classList.remove('translate-x-full');
    } else {
      cartDrawer.classList.add('translate-x-full');
      setTimeout(() => cartBackdrop.classList.add('hidden'), 300);
    }
  };

  if (openCartBtn) openCartBtn.addEventListener('click', () => toggleCart(true));
  if (closeCartBtn) closeCartBtn.addEventListener('click', () => toggleCart(false));
  if (cartBackdrop) cartBackdrop.addEventListener('click', (e) => {
    if (e.target === cartBackdrop) toggleCart(false);
  });

  window.toggleCartDrawer = toggleCart;
}

window.addToCart = function(productId, openDrawer = true) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId && item.capacity === product.capacity);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      brand: product.brand,
      category: product.category,
      capacity: product.capacity,
      price: product.price,
      scrapDiscount: product.scrapDiscount,
      image: product.image,
      quantity: 1,
      withScrapExchange: true // default to giving scrap discount
    });
  }

  updateCartBadge();
  showToastNotification(`Added "${product.name}" to cart!`);

  if (openDrawer && window.toggleCartDrawer) {
    window.toggleCartDrawer(true);
  }
};

window.buyNow = function(productId) {
  window.addToCart(productId, false);
  openCheckoutModal();
};

function updateCartBadge() {
  const countBadge = document.getElementById('cart-badge-count');
  const floatingBadge = document.getElementById('floating-cart-badge');
  const floatingTotal = document.getElementById('floating-cart-total');
  const mobileBottomBadge = document.getElementById('mobile-bottom-cart-badge');
  
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = state.cart.reduce((sum, item) => {
    const scrap = item.withScrapExchange ? item.scrapDiscount * item.quantity : 0;
    return sum + (item.price * item.quantity) - scrap;
  }, 0);

  if (countBadge) {
    countBadge.textContent = totalCount;
    countBadge.classList.add('cart-bump');
    setTimeout(() => countBadge.classList.remove('cart-bump'), 400);
  }

  if (floatingBadge) {
    floatingBadge.textContent = totalCount;
    floatingBadge.classList.add('cart-bump');
    setTimeout(() => floatingBadge.classList.remove('cart-bump'), 400);
  }

  if (mobileBottomBadge) {
    mobileBottomBadge.textContent = totalCount;
    mobileBottomBadge.classList.add('cart-bump');
    setTimeout(() => mobileBottomBadge.classList.remove('cart-bump'), 400);
  }

  if (floatingTotal) {
    floatingTotal.textContent = `₹${totalAmount.toLocaleString('en-IN')}`;
  }
}

function renderCartItems() {
  const container = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal');
  const scrapDiscountEl = document.getElementById('cart-scrap-savings');
  const grandTotalEl = document.getElementById('cart-grand-total');
  const checkoutBtn = document.getElementById('cart-checkout-btn');

  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center text-gray-400">
        <i class="fa-solid fa-cart-arrow-down text-5xl text-gray-700 mb-3"></i>
        <p class="font-bold text-white text-lg">Your Cart is Empty</p>
        <p class="text-sm text-gray-500 mt-1">Explore our Inva Power commercial and inverter batteries.</p>
        <button onclick="window.toggleCartDrawer(false)" class="mt-4 px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg transition">
          Browse Batteries
        </button>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '₹0';
    if (scrapDiscountEl) scrapDiscountEl.textContent = '- ₹0';
    if (grandTotalEl) grandTotalEl.textContent = '₹0';
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  let subtotal = 0;
  let totalScrapDiscount = 0;

  container.innerHTML = state.cart.map((item, index) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    const itemScrapSavings = item.withScrapExchange ? item.scrapDiscount * item.quantity : 0;
    totalScrapDiscount += itemScrapSavings;

    return `
      <div class="bg-gray-800/80 rounded-xl p-3.5 border border-gray-700/80 flex flex-col gap-3">
        <div class="flex items-start gap-3">
          <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-contain bg-gray-950 rounded-lg p-1.5 border border-gray-800 flex-shrink-0" />
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-bold uppercase text-red-400">${item.brand} • ${item.capacity}Ah</span>
              <button onclick="removeFromCart(${index})" class="text-gray-500 hover:text-red-400 text-xs">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
            <h4 class="text-xs font-bold text-white truncate">${item.name}</h4>
            <div class="text-xs font-mono font-bold text-gray-300 mt-1">
              ₹${item.price.toLocaleString('en-IN')} each
            </div>
          </div>
        </div>

        <!-- Scrap Trade-In Switch -->
        <div class="bg-gray-900/90 rounded-lg p-2 border border-gray-800 flex items-center justify-between text-xs">
          <div class="flex items-center gap-1.5 text-gray-300">
            <i class="fa-solid fa-recycle text-emerald-400"></i>
            <span>Exchange Old Battery:</span>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              class="sr-only peer" 
              ${item.withScrapExchange ? 'checked' : ''} 
              onchange="toggleScrapForCartItem(${index}, this.checked)"
            >
            <div class="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"></div>
          </label>
        </div>

        ${item.withScrapExchange ? `
          <div class="text-[11px] text-emerald-400 font-semibold flex items-center justify-between bg-emerald-950/30 px-2 py-1 rounded">
            <span>Old battery scrap rebate applied:</span>
            <span>- ₹${(item.scrapDiscount * item.quantity).toLocaleString('en-IN')}</span>
          </div>
        ` : ''}

        <!-- Quantity & Item Subtotal -->
        <div class="flex items-center justify-between pt-1 border-t border-gray-700/50">
          <div class="flex items-center gap-2">
            <button onclick="changeCartQty(${index}, -1)" class="w-6 h-6 rounded bg-gray-700 hover:bg-gray-600 text-white font-bold text-xs flex items-center justify-center">
              -
            </button>
            <span class="text-xs font-bold text-white px-2">${item.quantity}</span>
            <button onclick="changeCartQty(${index}, 1)" class="w-6 h-6 rounded bg-gray-700 hover:bg-gray-600 text-white font-bold text-xs flex items-center justify-center">
              +
            </button>
          </div>
          <div class="text-right">
            <span class="text-xs text-gray-400">Net: </span>
            <span class="text-sm font-bold text-white font-mono">
              ₹${(itemTotal - itemScrapSavings).toLocaleString('en-IN')}
            </span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const grandTotal = subtotal - totalScrapDiscount;

  if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  if (scrapDiscountEl) scrapDiscountEl.textContent = `- ₹${totalScrapDiscount.toLocaleString('en-IN')}`;
  if (grandTotalEl) grandTotalEl.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
  if (checkoutBtn) checkoutBtn.disabled = false;
}

window.changeCartQty = function(index, delta) {
  if (!state.cart[index]) return;
  state.cart[index].quantity += delta;
  if (state.cart[index].quantity <= 0) {
    state.cart.splice(index, 1);
  }
  updateCartBadge();
  renderCartItems();
};

window.removeFromCart = function(index) {
  state.cart.splice(index, 1);
  updateCartBadge();
  renderCartItems();
};

window.toggleScrapForCartItem = function(index, checked) {
  if (state.cart[index]) {
    state.cart[index].withScrapExchange = checked;
    renderCartItems();
  }
};

// CHECKOUT MODAL & STEPPER
window.openCheckoutModal = function() {
  if (state.cart.length === 0) {
    alert("Please add at least one battery to the cart before checking out.");
    return;
  }
  // Close cart drawer if open
  if (window.toggleCartDrawer) window.toggleCartDrawer(false);

  state.activeCheckoutStep = 1;
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.remove('hidden');
    renderCheckoutStep();
  }
};

window.closeCheckoutModal = function() {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.add('hidden');
};

function renderCheckoutStep() {
  const stepContainer = document.getElementById('checkout-step-content');
  if (!stepContainer) return;

  const totalScrap = state.cart.reduce((sum, item) => sum + (item.withScrapExchange ? item.scrapDiscount * item.quantity : 0), 0);
  const totalItemCost = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const grandTotal = totalItemCost - totalScrap;

  // Step 1: Delivery Address & Technician Slot
  if (state.activeCheckoutStep === 1) {
    stepContainer.innerHTML = `
      <div>
        <div class="flex items-center justify-between pb-3 mb-4 border-b border-gray-800">
          <h3 class="text-lg font-bold text-white flex items-center gap-2">
            <span class="w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center font-bold">1</span>
            Delivery &amp; Installation Address
          </h3>
          <span class="text-xs text-emerald-400 font-semibold"><i class="fa-solid fa-check"></i> Free Doorstep Fitment</span>
        </div>

        <form id="checkout-address-form" onsubmit="submitAddressStep(event)" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-semibold text-gray-300 mb-1">Full Name *</label>
              <input type="text" id="cust-name" required value="${state.customerDetails.fullName || 'Rajesh Sharma'}" class="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500">
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-300 mb-1">Mobile Number (For Delivery OTP) *</label>
              <input type="tel" id="cust-phone" required pattern="[0-9]{10}" placeholder="10-digit mobile" value="${state.customerDetails.phone || '9876543210'}" class="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500">
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-gray-300 mb-1">Complete Street Address (House/Shop No., Landmark) *</label>
            <input type="text" id="cust-address" required value="${state.customerDetails.address || 'Shop No. 14, Main Transport Nagar, Ring Road'}" class="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500">
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div>
              <div class="flex items-center justify-between mb-1">
                <label class="block text-xs font-semibold text-gray-300">Pin Code *</label>
                <span id="pincode-status" class="text-[10px] text-gray-400">6 digits</span>
              </div>
              <input 
                type="text" 
                id="cust-pincode" 
                required 
                maxlength="6"
                pattern="[0-9]{6}" 
                placeholder="e.g. 135001"
                value="${state.customerDetails.pincode || ''}" 
                oninput="handlePincodeLookup(this.value)"
                class="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500 font-mono tracking-wider"
              >
            </div>
            <div>
              <div class="flex items-center justify-between mb-1">
                <label class="block text-xs font-semibold text-gray-300">City / District *</label>
                <span id="city-auto-tag" class="text-[10px] text-emerald-400 hidden font-bold"><i class="fa-solid fa-wand-magic-sparkles"></i> Auto</span>
              </div>
              <input 
                type="text" 
                id="cust-city" 
                required
                placeholder="Auto-detected from Pin"
                value="${state.customerDetails.city || ''}" 
                class="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500 transition-colors"
              >
            </div>
            <div class="col-span-2 md:col-span-1">
              <div class="flex items-center justify-between mb-1">
                <label class="block text-xs font-semibold text-gray-300">State *</label>
                <span id="state-auto-tag" class="text-[10px] text-emerald-400 hidden font-bold"><i class="fa-solid fa-wand-magic-sparkles"></i> Auto</span>
              </div>
              <input 
                type="text" 
                id="cust-state" 
                required
                placeholder="Auto-detected from Pin"
                value="${state.customerDetails.state || ''}" 
                class="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500 transition-colors"
              >
            </div>
          </div>

          <div class="bg-gray-800/60 p-3 rounded-xl border border-gray-700 flex items-start gap-3">
            <input type="checkbox" id="install-check" checked class="mt-1 w-4 h-4 rounded text-red-600 focus:ring-0 bg-gray-900 border-gray-700">
            <label for="install-check" class="text-xs text-gray-300 cursor-pointer">
              <span class="font-bold text-white">Free Doorstep Installation &amp; Testing:</span>
              Our certified battery technician will bring testing meters, install your new Inva Power battery, apply anti-corrosion petroleum jelly to terminals, and test alternator charging voltage at zero extra fee.
            </label>
          </div>

          <!-- Order Summary Pill -->
          <div class="bg-gray-950 p-3 rounded-xl border border-gray-800 flex items-center justify-between">
            <span class="text-xs text-gray-400">Total Payable (${state.cart.length} items):</span>
            <span class="text-base font-black text-red-400 font-mono">₹${grandTotal.toLocaleString('en-IN')}</span>
          </div>

          <div class="flex items-center justify-end gap-3 pt-3">
            <button type="button" onclick="closeCheckoutModal()" class="px-5 py-2.5 rounded-lg border border-gray-700 text-gray-300 text-xs font-bold hover:bg-gray-800">
              Cancel
            </button>
            <button type="submit" class="px-6 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow-lg shadow-red-700/40 flex items-center gap-2">
              Continue to Payment Options <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </form>
      </div>
    `;
  }

  // Step 2: Payment Options (Online Payment & COD)
  else if (state.activeCheckoutStep === 2) {
    stepContainer.innerHTML = `
      <div>
        <div class="flex items-center justify-between pb-3 mb-4 border-b border-gray-800">
          <h3 class="text-lg font-bold text-white flex items-center gap-2">
            <span class="w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center font-bold">2</span>
            Choose Payment Method
          </h3>
          <span class="text-xs text-gray-400">Order Ref: INVA-${Math.floor(100000 + Math.random() * 900000)}</span>
        </div>

        <!-- Payable Breakdown Banner -->
        <div class="bg-gradient-to-r from-gray-900 to-gray-800 p-4 rounded-xl border border-gray-700 mb-5 flex items-center justify-between">
          <div>
            <div class="text-xs text-gray-400">Delivering to: <span class="text-white font-medium">${state.customerDetails.fullName} (${state.customerDetails.phone})</span></div>
            <div class="text-xs text-gray-400 truncate max-w-xs mt-0.5">${state.customerDetails.address}, ${state.customerDetails.city}</div>
          </div>
          <div class="text-right">
            <div class="text-xs text-gray-400">Final Bill:</div>
            <div class="text-2xl font-black text-white font-mono">₹${grandTotal.toLocaleString('en-IN')}</div>
          </div>
        </div>

        <!-- Method Tabs (Online vs COD) -->
        <div class="grid grid-cols-2 gap-3 mb-5">
          <button 
            type="button" 
            onclick="selectPaymentType('online')"
            class="p-4 rounded-xl border text-left transition flex flex-col justify-between ${state.selectedPaymentMethod === 'online' ? 'bg-red-950/30 border-red-500 ring-1 ring-red-500' : 'bg-gray-800/80 border-gray-700 hover:border-gray-600'}"
          >
            <div class="flex items-center justify-between">
              <span class="font-bold text-sm text-white flex items-center gap-2">
                <i class="fa-solid fa-credit-card text-sky-400"></i> Online Payment
              </span>
              <span class="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold">FAST DISPATCH</span>
            </div>
            <p class="text-xs text-gray-400 mt-2">Instant UPI (GPay/PhonePe), Credit/Debit Card, NetBanking</p>
          </button>

          <button 
            type="button" 
            onclick="selectPaymentType('cod')"
            class="p-4 rounded-xl border text-left transition flex flex-col justify-between ${state.selectedPaymentMethod === 'cod' ? 'bg-emerald-950/30 border-emerald-500 ring-1 ring-emerald-500' : 'bg-gray-800/80 border-gray-700 hover:border-gray-600'}"
          >
            <div class="flex items-center justify-between">
              <span class="font-bold text-sm text-white flex items-center gap-2">
                <i class="fa-solid fa-hand-holding-dollar text-emerald-400"></i> Cash on Delivery (COD)
              </span>
              <span class="text-[10px] bg-sky-500/20 text-sky-400 px-2 py-0.5 rounded font-bold">PAY AT DOORSTEP</span>
            </div>
            <p class="text-xs text-gray-400 mt-2">Pay in cash or UPI directly to technician after free battery installation</p>
          </button>
        </div>

        <!-- Selected Payment Detail Panel -->
        <div class="bg-gray-900 rounded-xl p-4 border border-gray-800 mb-6">
          ${state.selectedPaymentMethod === 'online' ? `
            <!-- ONLINE PAYMENT SUB-OPTIONS -->
            <div>
              <div class="flex items-center gap-2 mb-4 border-b border-gray-800 pb-2">
                <button type="button" onclick="setOnlineSubTab('upi')" class="text-xs font-bold px-3 py-1.5 rounded-lg transition ${state.onlineSubMethod === 'upi' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'}">
                  <i class="fa-brands fa-google-pay"></i> UPI QR &amp; Apps
                </button>
                <button type="button" onclick="setOnlineSubTab('card')" class="text-xs font-bold px-3 py-1.5 rounded-lg transition ${state.onlineSubMethod === 'card' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'}">
                  <i class="fa-solid fa-credit-card"></i> Card (Visa/Master/RuPay)
                </button>
                <button type="button" onclick="setOnlineSubTab('netbanking')" class="text-xs font-bold px-3 py-1.5 rounded-lg transition ${state.onlineSubMethod === 'netbanking' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'}">
                  <i class="fa-solid fa-building-columns"></i> Net Banking
                </button>
              </div>

              ${state.onlineSubMethod === 'upi' ? `
                <div class="flex flex-col md:flex-row items-center gap-6 py-2">
                  <div class="qr-container text-center">
                    <!-- SVG Mock QR Code -->
                    <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="100" height="100" fill="white"/>
                      <rect x="10" y="10" width="25" height="25" fill="#0b0f17"/>
                      <rect x="15" y="15" width="15" height="15" fill="white"/>
                      <rect x="19" y="19" width="7" height="7" fill="#0b0f17"/>
                      <rect x="65" y="10" width="25" height="25" fill="#0b0f17"/>
                      <rect x="70" y="15" width="15" height="15" fill="white"/>
                      <rect x="74" y="19" width="7" height="7" fill="#0b0f17"/>
                      <rect x="10" y="65" width="25" height="25" fill="#0b0f17"/>
                      <rect x="15" y="70" width="15" height="15" fill="white"/>
                      <rect x="19" y="74" width="7" height="7" fill="#0b0f17"/>
                      <!-- Data dots -->
                      <rect x="40" y="15" width="5" height="10" fill="#dc2626"/>
                      <rect x="50" y="20" width="8" height="5" fill="#0b0f17"/>
                      <rect x="42" y="38" width="16" height="6" fill="#0b0f17"/>
                      <rect x="68" y="45" width="20" height="8" fill="#dc2626"/>
                      <rect x="45" y="65" width="8" height="15" fill="#0b0f17"/>
                      <rect x="60" y="70" width="18" height="8" fill="#0b0f17"/>
                      <rect x="70" y="85" width="14" height="6" fill="#0b0f17"/>
                    </svg>
                    <div class="text-[10px] font-bold text-gray-800 mt-1">Scan with any UPI App</div>
                  </div>

                  <div class="flex-1 space-y-3 w-full">
                    <div class="text-xs font-semibold text-gray-300">
                      Scan using Google Pay, PhonePe, Paytm, or BHIM.
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="text-xs text-gray-400">UPI ID:</span>
                      <code class="text-xs bg-gray-950 px-2.5 py-1 rounded text-red-400 font-mono border border-gray-800">invapower@icici</code>
                    </div>
                    <div class="p-3 bg-gray-950/70 rounded-lg border border-gray-800 text-[11px] text-gray-400">
                      🔒 256-bit Secure Encrypted Payment Gateway. Instant payment confirmation &amp; digital tax invoice sent to WhatsApp &amp; SMS.
                    </div>
                  </div>
                </div>
              ` : ''}

              ${state.onlineSubMethod === 'card' ? `
                <div class="space-y-3">
                  <div>
                    <label class="block text-xs text-gray-300 font-semibold mb-1">Card Number</label>
                    <input type="text" placeholder="XXXX XXXX XXXX 4242" value="4532 •••• •••• 8821" class="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none">
                  </div>
                  <div class="grid grid-cols-2 gap-3">
                    <div>
                      <label class="block text-xs text-gray-300 font-semibold mb-1">Expiry Date</label>
                      <input type="text" placeholder="MM/YY" value="08/29" class="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none">
                    </div>
                    <div>
                      <label class="block text-xs text-gray-300 font-semibold mb-1">CVV</label>
                      <input type="password" placeholder="•••" value="842" class="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none">
                    </div>
                  </div>
                </div>
              ` : ''}

              ${state.onlineSubMethod === 'netbanking' ? `
                <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                  <label class="bg-gray-800 p-2.5 rounded-lg border border-gray-700 flex items-center gap-2 cursor-pointer hover:border-red-500">
                    <input type="radio" name="nb-bank" checked class="text-red-600"> <span>HDFC Bank</span>
                  </label>
                  <label class="bg-gray-800 p-2.5 rounded-lg border border-gray-700 flex items-center gap-2 cursor-pointer hover:border-red-500">
                    <input type="radio" name="nb-bank" class="text-red-600"> <span>SBI</span>
                  </label>
                  <label class="bg-gray-800 p-2.5 rounded-lg border border-gray-700 flex items-center gap-2 cursor-pointer hover:border-red-500">
                    <input type="radio" name="nb-bank" class="text-red-600"> <span>ICICI Bank</span>
                  </label>
                  <label class="bg-gray-800 p-2.5 rounded-lg border border-gray-700 flex items-center gap-2 cursor-pointer hover:border-red-500">
                    <input type="radio" name="nb-bank" class="text-red-600"> <span>Axis Bank</span>
                  </label>
                </div>
              ` : ''}
            </div>
          ` : `
            <!-- CASH ON DELIVERY PANEL -->
            <div class="space-y-3">
              <div class="flex items-center gap-3 text-emerald-400">
                <i class="fa-solid fa-circle-check text-2xl"></i>
                <div>
                  <h4 class="text-sm font-bold text-white">Cash on Delivery Confirmed</h4>
                  <p class="text-xs text-gray-400">No advance payment required. Inspect battery manufacturing date and warranty seal before paying.</p>
                </div>
              </div>

              <div class="bg-gray-950 p-3 rounded-lg border border-gray-800 text-xs text-gray-300 space-y-1.5">
                <div class="flex items-center justify-between">
                  <span>Amount to pay technician at delivery:</span>
                  <span class="font-bold text-white font-mono text-sm">₹${grandTotal.toLocaleString('en-IN')}</span>
                </div>
                <div class="flex items-center justify-between text-emerald-400">
                  <span>Old Scrap Battery Handover:</span>
                  <span>Yes (₹${totalScrap.toLocaleString('en-IN')} already deducted)</span>
                </div>
                <div class="text-[11px] text-gray-400 pt-1 border-t border-gray-800">
                  Technician accepts both Cash and GPay/PhonePe QR scan upon arrival.
                </div>
              </div>
            </div>
          `}
        </div>

        <div class="flex items-center justify-between pt-3 border-t border-gray-800">
          <button type="button" onclick="state.activeCheckoutStep = 1; renderCheckoutStep();" class="px-4 py-2 text-xs font-bold text-gray-400 hover:text-white">
            <i class="fa-solid fa-arrow-left"></i> Back to Address
          </button>

          <button 
            type="button" 
            onclick="completeOrderPlacement()"
            class="px-7 py-3 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-sm shadow-xl shadow-red-700/30 flex items-center gap-2"
          >
            <i class="fa-solid fa-lock"></i> 
            ${state.selectedPaymentMethod === 'online' ? `Pay ₹${grandTotal.toLocaleString('en-IN')} & Confirm Order` : `Place COD Order (₹${grandTotal.toLocaleString('en-IN')})`}
          </button>
        </div>
      </div>
    `;
  }

  // Step 3: Confirmation Screen
  else if (state.activeCheckoutStep === 3) {
    const order = state.lastConfirmedOrder;
    if (!order) return;

    stepContainer.innerHTML = `
      <div class="text-center py-4">
        <div class="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center text-3xl mx-auto mb-3 shadow-lg shadow-emerald-950/40">
          <i class="fa-solid fa-check"></i>
        </div>

        <h3 class="text-2xl font-black text-white heading-font">ORDER CONFIRMED!</h3>
        <p class="text-sm text-gray-400 mt-1">Thank you, <span class="text-white font-bold">${order.customer.fullName}</span>. Your battery is scheduled for dispatch.</p>

        <!-- Order Info Card -->
        <div class="bg-gray-900 border border-gray-800 rounded-xl p-4 my-5 text-left max-w-lg mx-auto space-y-3">
          <div class="flex items-center justify-between pb-2 border-b border-gray-800">
            <div>
              <span class="text-[10px] text-gray-400 uppercase tracking-wider">Order Reference</span>
              <div class="text-sm font-mono font-bold text-red-400">${order.orderId}</div>
            </div>
            <div class="text-right">
              <span class="text-[10px] text-gray-400 uppercase tracking-wider">Payment Mode</span>
              <div class="text-xs font-bold text-white uppercase">${order.paymentMethod === 'online' ? 'Paid Online (UPI/Card)' : 'Cash on Delivery (COD)'}</div>
            </div>
          </div>

          <div class="text-xs text-gray-300 space-y-1">
            <div class="flex justify-between">
              <span class="text-gray-400">Estimated Delivery:</span>
              <span class="text-emerald-400 font-bold">Tomorrow by 11:30 AM</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Technician Contact:</span>
              <span class="text-white">Assigned (SMS sent to ${order.customer.phone})</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Delivery Location:</span>
              <span class="text-white truncate max-w-[200px]">${order.customer.address}, ${order.customer.city}</span>
            </div>
            <div class="flex justify-between pt-2 border-t border-gray-800">
              <span class="text-gray-400 font-bold">Total Amount:</span>
              <span class="text-base font-bold font-mono text-white">₹${order.totalAmount.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex flex-wrap items-center justify-center gap-3">
          <button onclick="downloadMockInvoice()" class="px-5 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-bold text-xs border border-gray-700 transition flex items-center gap-1.5">
            <i class="fa-solid fa-file-invoice"></i> View Tax Invoice
          </button>

          <button onclick="closeCheckoutModal(); resetCartAfterOrder();" class="px-6 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition">
            Continue Shopping
          </button>
        </div>
      </div>
    `;
  }
}

// ================= PINCODE AUTO-LOOKUP SYSTEM =================
const PINCODE_OFFLINE_DB = {
  // Haryana (Yamunanagar & surrounding circles requested)
  "135001": { city: "Yamunanagar", state: "Haryana" },
  "135002": { city: "Jagadhri", state: "Haryana" },
  "135003": { city: "Yamunanagar", state: "Haryana" },
  "135004": { city: "Yamunanagar", state: "Haryana" },
  "135101": { city: "Radaur", state: "Haryana" },
  "135102": { city: "Bilaspur", state: "Haryana" },
  "135103": { city: "Chhachhrauli", state: "Haryana" },
  "135106": { city: "Sadhaura", state: "Haryana" },
  "133001": { city: "Ambala", state: "Haryana" },
  "134003": { city: "Panchkula", state: "Haryana" },
  "132001": { city: "Karnal", state: "Haryana" },
  "132103": { city: "Panipat", state: "Haryana" },
  "131001": { city: "Sonipat", state: "Haryana" },
  "136027": { city: "Kaithal", state: "Haryana" },
  "136118": { city: "Kurukshetra", state: "Haryana" },
  "121001": { city: "Faridabad", state: "Haryana" },
  "121002": { city: "Faridabad", state: "Haryana" },
  "122001": { city: "Gurugram", state: "Haryana" },
  "122018": { city: "Gurugram", state: "Haryana" },
  "124001": { city: "Rohtak", state: "Haryana" },
  "125001": { city: "Hisar", state: "Haryana" },

  // Delhi NCR
  "110001": { city: "New Delhi", state: "Delhi" },
  "110002": { city: "Central Delhi", state: "Delhi" },
  "110005": { city: "Karol Bagh", state: "Delhi" },
  "110006": { city: "Chandni Chowk", state: "Delhi" },
  "110019": { city: "Kalkaji", state: "Delhi" },
  "110020": { city: "Okhla", state: "Delhi" },
  "110024": { city: "South Delhi", state: "Delhi" },
  "110033": { city: "Adarsh Nagar", state: "Delhi" },
  "110034": { city: "Pitampura", state: "Delhi" },
  "110085": { city: "Rohini", state: "Delhi" },
  "110092": { city: "Laxmi Nagar", state: "Delhi" },
  "201301": { city: "Noida", state: "Uttar Pradesh" },
  "201310": { city: "Greater Noida", state: "Uttar Pradesh" },
  "201001": { city: "Ghaziabad", state: "Uttar Pradesh" },

  // Punjab & Chandigarh
  "160001": { city: "Chandigarh", state: "Chandigarh" },
  "160017": { city: "Chandigarh", state: "Chandigarh" },
  "160071": { city: "Mohali", state: "Punjab" },
  "141001": { city: "Ludhiana", state: "Punjab" },
  "143001": { city: "Amritsar", state: "Punjab" },
  "144001": { city: "Jalandhar", state: "Punjab" },
  "147001": { city: "Patiala", state: "Punjab" },

  // Uttar Pradesh & Uttarakhand
  "226001": { city: "Lucknow", state: "Uttar Pradesh" },
  "208001": { city: "Kanpur", state: "Uttar Pradesh" },
  "282001": { city: "Agra", state: "Uttar Pradesh" },
  "221001": { city: "Varanasi", state: "Uttar Pradesh" },
  "250001": { city: "Meerut", state: "Uttar Pradesh" },
  "248001": { city: "Dehradun", state: "Uttarakhand" },
  "249401": { city: "Haridwar", state: "Uttarakhand" },

  // Rajasthan
  "302001": { city: "Jaipur", state: "Rajasthan" },
  "342001": { city: "Jodhpur", state: "Rajasthan" },
  "313001": { city: "Udaipur", state: "Rajasthan" },
  "324001": { city: "Kota", state: "Rajasthan" },

  // Other Major Metros
  "400001": { city: "Mumbai", state: "Maharashtra" },
  "411001": { city: "Pune", state: "Maharashtra" },
  "500001": { city: "Hyderabad", state: "Telangana" },
  "560001": { city: "Bengaluru", state: "Karnataka" },
  "600001": { city: "Chennai", state: "Tamil Nadu" },
  "700001": { city: "Kolkata", state: "West Bengal" },
  "800001": { city: "Patna", state: "Bihar" },
  "380001": { city: "Ahmedabad", state: "Gujarat" }
};

function getFallbackStateFromPincode(pin) {
  const p2 = pin.substring(0, 2);
  if (p2 === '11') return { city: "Delhi", state: "Delhi" };
  if (p2 === '12' || p2 === '13') return { city: "Yamunanagar / Haryana", state: "Haryana" };
  if (p2 === '14' || p2 === '15') return { city: "Punjab", state: "Punjab" };
  if (p2 === '16') return { city: "Chandigarh", state: "Chandigarh" };
  if (p2 === '17') return { city: "Himachal Pradesh", state: "Himachal Pradesh" };
  if (p2 === '18' || p2 === '19') return { city: "Jammu & Kashmir", state: "Jammu & Kashmir" };
  if (['20','21','22','23','25','26','27','28'].includes(p2)) return { city: "Uttar Pradesh", state: "Uttar Pradesh" };
  if (p2 === '24') return { city: "Uttarakhand", state: "Uttarakhand" };
  if (['30','31','32','33','34'].includes(p2)) return { city: "Rajasthan", state: "Rajasthan" };
  if (['36','37','38','39'].includes(p2)) return { city: "Gujarat", state: "Gujarat" };
  if (['40','41','42','43','44'].includes(p2)) return { city: "Maharashtra", state: "Maharashtra" };
  if (['45','46','47','48'].includes(p2)) return { city: "Madhya Pradesh", state: "Madhya Pradesh" };
  if (p2 === '49') return { city: "Chhattisgarh", state: "Chhattisgarh" };
  if (['50','51','52','53'].includes(p2)) return { city: "Telangana / AP", state: "Telangana" };
  if (['56','57','58','59'].includes(p2)) return { city: "Karnataka", state: "Karnataka" };
  if (['60','61','62','63','64'].includes(p2)) return { city: "Tamil Nadu", state: "Tamil Nadu" };
  if (['67','68','69'].includes(p2)) return { city: "Kerala", state: "Kerala" };
  if (['70','71','72','73','74'].includes(p2)) return { city: "West Bengal", state: "West Bengal" };
  if (['75','76','77'].includes(p2)) return { city: "Odisha", state: "Odisha" };
  if (['78','79'].includes(p2)) return { city: "Assam / NE", state: "Assam" };
  if (['80','81','82','83','84','85'].includes(p2)) return { city: "Bihar / Jharkhand", state: "Bihar" };
  return null;
}

window.handlePincodeLookup = function(val) {
  const pin = val.replace(/\D/g, '').slice(0, 6);
  const pinInput = document.getElementById('cust-pincode');
  if (pinInput && pinInput.value !== pin) pinInput.value = pin;

  const cityInput = document.getElementById('cust-city');
  const stateInput = document.getElementById('cust-state');
  const statusEl = document.getElementById('pincode-status');
  const cityTag = document.getElementById('city-auto-tag');
  const stateTag = document.getElementById('state-auto-tag');

  if (pin.length < 6) {
    if (statusEl) statusEl.innerHTML = `<span class="text-gray-400">${pin.length}/6 digits</span>`;
    if (cityTag) cityTag.classList.add('hidden');
    if (stateTag) stateTag.classList.add('hidden');
    return;
  }

  if (statusEl) statusEl.innerHTML = `<span class="text-sky-400"><i class="fa-solid fa-spinner fa-spin"></i> Checking...</span>`;

  let matched = false;

  // 1. Instant Offline Lookup (Zero latency)
  if (PINCODE_OFFLINE_DB[pin]) {
    const res = PINCODE_OFFLINE_DB[pin];
    applyCityAndState(res.city, res.state);
    matched = true;
  } else {
    const fallback = getFallbackStateFromPincode(pin);
    if (fallback) {
      applyCityAndState(fallback.city, fallback.state);
      matched = true;
    }
  }

  // 2. Query official India Post API for exact post-office subdistrict
  fetch(`https://api.postalpincode.in/pincode/${pin}`)
    .then(r => r.json())
    .then(data => {
      if (data && data[0] && data[0].Status === 'Success' && data[0].PostOffice && data[0].PostOffice.length > 0) {
        const po = data[0].PostOffice[0];
        const city = po.District || po.Name || po.Block;
        const st = po.State;
        applyCityAndState(city, st);
      }
    })
    .catch(() => {
      // offline lookup already applied
    });

  function applyCityAndState(c, s) {
    if (cityInput && c) {
      cityInput.value = c;
      cityInput.classList.remove('border-red-500');
      cityInput.classList.add('border-emerald-500');
      setTimeout(() => cityInput.classList.remove('border-emerald-500'), 1500);
    }
    if (stateInput && s) {
      stateInput.value = s;
      stateInput.classList.remove('border-red-500');
      stateInput.classList.add('border-emerald-500');
      setTimeout(() => stateInput.classList.remove('border-emerald-500'), 1500);
    }
    if (statusEl) {
      statusEl.innerHTML = `<span class="text-emerald-400 font-bold"><i class="fa-solid fa-circle-check"></i> Auto-filled</span>`;
    }
    if (cityTag) cityTag.classList.remove('hidden');
    if (stateTag) stateTag.classList.remove('hidden');

    state.customerDetails.pincode = pin;
    state.customerDetails.city = c;
    state.customerDetails.state = s;
  }
};

window.submitAddressStep = function(event) {
  event.preventDefault();
  state.customerDetails.fullName = document.getElementById('cust-name').value;
  state.customerDetails.phone = document.getElementById('cust-phone').value;
  state.customerDetails.address = document.getElementById('cust-address').value;
  state.customerDetails.pincode = document.getElementById('cust-pincode').value;
  state.customerDetails.city = document.getElementById('cust-city').value;
  state.customerDetails.state = document.getElementById('cust-state').value;
  state.customerDetails.installPreference = document.getElementById('install-check').checked;

  state.activeCheckoutStep = 2;
  renderCheckoutStep();
};

window.selectPaymentType = function(type) {
  state.selectedPaymentMethod = type;
  renderCheckoutStep();
};

window.setOnlineSubTab = function(sub) {
  state.onlineSubMethod = sub;
  renderCheckoutStep();
};

window.completeOrderPlacement = function() {
  const totalScrap = state.cart.reduce((sum, item) => sum + (item.withScrapExchange ? item.scrapDiscount * item.quantity : 0), 0);
  const totalItemCost = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const grandTotal = totalItemCost - totalScrap;

  const orderId = "INVA-" + Math.floor(100000 + Math.random() * 900000);

  state.lastConfirmedOrder = {
    orderId: orderId,
    date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    customer: { ...state.customerDetails },
    items: [...state.cart],
    totalAmount: grandTotal,
    scrapSavings: totalScrap,
    paymentMethod: state.selectedPaymentMethod
  };

  state.activeCheckoutStep = 3;
  renderCheckoutStep();
};

window.resetCartAfterOrder = function() {
  state.cart = [];
  updateCartBadge();
  renderProductGrid();
};

window.downloadMockInvoice = function() {
  const order = state.lastConfirmedOrder;
  if (!order) return;

  const invoiceHtml = `
    <html>
      <head>
        <title>Invoice - ${order.orderId}</title>
        <style>
          body { font-family: 'Helvetica Neue', Arial, sans-serif; padding: 40px; color: #1e293b; }
          .header { display: flex; justify-content: space-between; border-bottom: 2px solid #ef4444; padding-bottom: 20px; }
          .logo { font-size: 24px; font-weight: 900; color: #dc2626; }
          .table { width: 100%; border-collapse: collapse; margin-top: 30px; }
          .table th, .table td { border: 1px solid #e2e8f0; padding: 10px; text-align: left; }
          .table th { background: #f8fafc; font-size: 12px; }
          .total { font-size: 18px; font-weight: bold; text-align: right; margin-top: 20px; color: #0f172a; }
          .badge { background: #dcfce7; color: #15803d; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="logo">INVA POWER BATTERIES PVT. LTD.</div>
            <p style="font-size: 12px; color: #64748b; margin: 4px 0;">Official Tax Invoice &amp; Warranty Card<br/>GSTIN: 07AAACI8492K1Z9</p>
          </div>
          <div style="text-align: right;">
            <p><strong>Invoice #: ${order.orderId}</strong></p>
            <p style="font-size: 12px; color: #64748b;">Date: ${order.date}</p>
            <span class="badge">STATUS: CONFIRMED</span>
          </div>
        </div>

        <div style="margin-top: 20px; font-size: 13px;">
          <strong>Billed &amp; Delivered To:</strong><br/>
          ${order.customer.fullName}<br/>
          Phone: ${order.customer.phone}<br/>
          ${order.customer.address}, ${order.customer.city}, ${order.customer.state} - ${order.customer.pincode}
        </div>

        <table class="table">
          <thead>
            <tr>
              <th>Item Description</th>
              <th>Capacity</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Scrap Rebate</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            ${order.items.map(item => `
              <tr>
                <td><strong>${item.name}</strong><br/><small style="color: #64748b;">Brand: ${item.brand}</small></td>
                <td>${item.capacity} Ah</td>
                <td>${item.quantity}</td>
                <td>₹${item.price.toLocaleString('en-IN')}</td>
                <td style="color: #16a34a;">- ₹${(item.withScrapExchange ? item.scrapDiscount * item.quantity : 0).toLocaleString('en-IN')}</td>
                <td><strong>₹${((item.price * item.quantity) - (item.withScrapExchange ? item.scrapDiscount * item.quantity : 0)).toLocaleString('en-IN')}</strong></td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div class="total">
          Net Payable Amount: ₹${order.totalAmount.toLocaleString('en-IN')}<br/>
          <small style="font-size: 12px; color: #16a34a;">Total Scrap Battery Rebate Saved: ₹${order.scrapSavings.toLocaleString('en-IN')}</small>
        </div>

        <div style="margin-top: 40px; border-top: 1px dashed #cbd5e1; padding-top: 15px; font-size: 11px; color: #64748b;">
          * Retain this tax invoice for claiming official Inva Power 36 to 60 Months Nationwide Replacement Warranty. Doorstep warranty service available via toll-free helpline 1800-890-INVA.
        </div>
      </body>
    </html>
  `;

  const newWindow = window.open('', '_blank');
  newWindow.document.write(invoiceHtml);
  newWindow.document.close();
};

// QUICK VIEW MODAL
window.openQuickView = function(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  state.activeQuickViewProduct = product;
  const modal = document.getElementById('quickview-modal');
  const content = document.getElementById('quickview-content');

  if (modal && content) {
    const isOurBrand = product.brand === 'Inva Power';
    const effectivePriceWithScrap = product.price - product.scrapDiscount;

    content.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Visual Column -->
        <div class="bg-gray-950 p-8 rounded-2xl border border-gray-800 flex flex-col items-center justify-center relative">
          <span class="absolute top-4 left-4 bg-red-600 text-white font-extrabold text-[11px] px-3 py-1 rounded-md tracking-wider uppercase">
            ${product.badge}
          </span>
          <img src="${product.image}" alt="${product.name}" class="h-64 w-auto object-contain drop-shadow-2xl mb-4" />
          <div class="text-xs text-gray-400 font-mono flex items-center gap-4">
            <span>Dimensions: ${product.dimensions}</span>
            <span>•</span>
            <span>Weight: ${product.weight}</span>
          </div>
        </div>

        <!-- Spec Column -->
        <div class="flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs font-bold uppercase tracking-wider text-red-500">${product.brand}</span>
              <span class="text-gray-600">•</span>
              <span class="text-xs font-semibold text-gray-400 uppercase">${product.category} Battery</span>
            </div>

            <h2 class="text-2xl font-bold text-white heading-font mb-2">${product.name}</h2>
            <p class="text-xs text-gray-300 leading-relaxed mb-4">${product.description}</p>

            <!-- Technical Spec Grid -->
            <div class="grid grid-cols-2 gap-2 text-xs mb-5">
              <div class="bg-gray-800/80 p-2.5 rounded-lg border border-gray-700">
                <span class="text-gray-400 block text-[10px]">BATTERY CAPACITY</span>
                <span class="font-bold text-white text-sm">${product.capacity} ${product.unit}</span>
              </div>
              <div class="bg-gray-800/80 p-2.5 rounded-lg border border-gray-700">
                <span class="text-gray-400 block text-[10px]">WARRANTY</span>
                <span class="font-bold text-emerald-400 text-sm">${product.warranty}</span>
              </div>
              <div class="bg-gray-800/80 p-2.5 rounded-lg border border-gray-700">
                <span class="text-gray-400 block text-[10px]">VOLTAGE</span>
                <span class="font-bold text-sky-400 text-sm">${product.voltage} Lead-Acid</span>
              </div>
              <div class="bg-gray-800/80 p-2.5 rounded-lg border border-gray-700">
                <span class="text-gray-400 block text-[10px]">COLD CRANKING AMPS</span>
                <span class="font-bold text-amber-400 text-sm">${product.cca}</span>
              </div>
            </div>

            <!-- Compatible Vehicles -->
            ${product.compatibleVehicles ? `
              <div class="mb-5">
                <span class="text-xs font-bold text-gray-300 block mb-1.5">Recommended Vehicle / Fitment:</span>
                <div class="flex flex-wrap gap-1.5">
                  ${product.compatibleVehicles.map(v => `
                    <span class="text-[11px] bg-gray-800 border border-gray-700 text-gray-300 px-2 py-0.5 rounded">
                      ${v}
                    </span>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Price & Actions -->
          <div class="pt-4 border-t border-gray-800">
            <div class="flex items-baseline gap-3 mb-2">
              <span class="text-3xl font-black text-white font-mono">₹${product.price.toLocaleString('en-IN')}</span>
              <span class="text-sm text-gray-500 line-through">₹${product.mrp.toLocaleString('en-IN')}</span>
              <span class="text-xs font-bold text-emerald-400">Save ₹${(product.mrp - product.price).toLocaleString('en-IN')}</span>
            </div>

            <div class="bg-emerald-950/40 border border-emerald-500/30 rounded-lg p-2.5 mb-4 text-xs flex items-center justify-between">
              <span class="text-emerald-300 font-medium">With Old Battery Scrap Exchange:</span>
              <span class="font-bold text-emerald-400 text-base font-mono">₹${effectivePriceWithScrap.toLocaleString('en-IN')}</span>
            </div>

            <div class="flex gap-3">
              <button onclick="addToCart('${product.id}', true); closeQuickView();" class="flex-1 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl transition shadow-lg shadow-red-700/30 flex items-center justify-center gap-2">
                <i class="fa-solid fa-cart-plus"></i> Add To Cart
              </button>
              <button onclick="buyNow('${product.id}'); closeQuickView();" class="flex-1 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-xl border border-gray-700 transition flex items-center justify-center gap-2">
                <i class="fa-solid fa-bolt text-amber-400"></i> Instant Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
  }
};

window.closeQuickView = function() {
  const modal = document.getElementById('quickview-modal');
  if (modal) modal.classList.add('hidden');
};

// VEHICLE FINDER WIDGET
function setupFinderWidget() {
  const typeSelect = document.getElementById('finder-type');
  const makeSelect = document.getElementById('finder-make');
  const findBtn = document.getElementById('finder-submit-btn');

  const MAKES = {
    truck: ["Tata Motors (Signa, Prima, LPT)", "Ashok Leyland (Boss, Captain, 4220)", "BharatBenz", "Eicher Commercial", "JCB Earthmovers"],
    tractor: ["Mahindra Tractors (Arjun, 575 DI)", "Swaraj (744, 963 FE)", "John Deere (5310, 5050)", "Sonalika", "Eicher Tractor"],
    inverter: ["Home Inverter (800VA - 1100VA)", "Heavy Duty Inverter (1400VA - 2500VA)", "Solar Hybrid Inverter", "Commercial Shop Backup"],
    bike: ["Hero (Splendor, HF Deluxe)", "Honda (Activa, Shine)", "Bajaj (Pulsar, Platina)", "TVS (Apache, Jupiter)", "Yamaha (FZ, R15)"]
  };

  if (typeSelect && makeSelect) {
    typeSelect.addEventListener('change', (e) => {
      const selected = e.target.value;
      const options = MAKES[selected] || [];
      makeSelect.innerHTML = options.map(m => `<option value="${m}">${m}</option>`).join('');
    });
  }

  if (findBtn) {
    findBtn.addEventListener('click', () => {
      const type = typeSelect ? typeSelect.value : 'truck';
      state.categoryFilter = type;
      // Update UI active tab
      const categoryTabs = document.querySelectorAll('[data-category-filter]');
      categoryTabs.forEach(t => {
        if (t.getAttribute('data-category-filter') === type) t.classList.add('active-category-tab');
        else t.classList.remove('active-category-tab');
      });

      renderProductGrid();

      // Scroll smoothly to products section
      const target = document.getElementById('collection-section');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

// SCRAP VALUE CALCULATOR WIDGET (WEIGHT-BASED @ ₹120/KG)
function setupScrapCalculator() {
  const weightInput = document.getElementById('calc-weight');
  const resultDisplay = document.getElementById('calc-result');
  const breakdownDisplay = document.getElementById('calc-breakdown');
  const SCRAP_RATE_PER_KG = 120; // Official scrap rate requested: ₹120 per kg

  const updateScrapValue = () => {
    if (!weightInput || !resultDisplay) return;
    const weight = parseFloat(weightInput.value) || 0;
    const rebate = Math.round(weight * SCRAP_RATE_PER_KG);

    resultDisplay.textContent = `₹${rebate.toLocaleString('en-IN')}`;
    if (breakdownDisplay) {
      breakdownDisplay.textContent = `${weight} kg × ₹${SCRAP_RATE_PER_KG}/kg`;
    }
  };

  if (weightInput) {
    weightInput.addEventListener('input', updateScrapValue);
  }

  window.setScrapWeightPreset = function(kg) {
    if (weightInput) {
      weightInput.value = kg;
      updateScrapValue();
    }
  };

  updateScrapValue();
}

// TOAST NOTIFICATION
function showToastNotification(message) {
  const existing = document.getElementById('inva-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'inva-toast';
  toast.className = 'fixed bottom-6 right-6 z-50 bg-gray-900 border border-red-500/50 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 text-xs font-semibold animate-bounce';
  toast.innerHTML = `
    <i class="fa-solid fa-circle-check text-emerald-400 text-base"></i>
    <span>${message}</span>
  `;

  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3200);
}

// HERO TAB SWITCHER (TRUCK VS INVERTER)
window.switchHeroTab = function(type) {
  const truckTab = document.getElementById('hero-tab-truck');
  const inverterTab = document.getElementById('hero-tab-inverter');
  const badge = document.getElementById('hero-badge');
  const priceTag = document.getElementById('hero-price-tag');
  const img = document.getElementById('hero-battery-img');
  const specSeries = document.getElementById('hero-spec-series');
  const specType = document.getElementById('hero-spec-type');
  const specScrap = document.getElementById('hero-spec-scrap');
  const ctaBtn = document.getElementById('hero-cta-btn');

  if (!truckTab || !inverterTab || !badge) return;

  if (type === 'truck') {
    truckTab.className = "flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition bg-red-600 text-white shadow";
    inverterTab.className = "flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition text-gray-400 hover:text-white";
    badge.innerHTML = `<i class="fa-solid fa-crown text-amber-400"></i> OUR SIGNATURE FLAGSHIP`;
    badge.className = "text-xs font-black uppercase text-red-500 tracking-wider flex items-center gap-1.5";
    priceTag.textContent = "180 Ah • ₹11,500";
    priceTag.className = "text-xs bg-red-600/20 text-red-400 font-bold px-2 py-0.5 rounded border border-red-500/30";
    img.src = "assets/inva-truck-express.svg";
    specSeries.textContent = "EXPRESS";
    specType.textContent = "HEAVY TRUCK";
    specType.className = "font-bold text-amber-400";
    specScrap.textContent = "₹9,300";
    ctaBtn.innerHTML = `<i class="fa-solid fa-cart-plus"></i> Add Express 180Ah to Cart (₹11,500)`;
    ctaBtn.onclick = function() { addToCart('inva-truck-180', true); };
  } else {
    truckTab.className = "flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition text-gray-400 hover:text-white";
    inverterTab.className = "flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition bg-sky-600 text-white shadow";
    badge.innerHTML = `<i class="fa-solid fa-bolt text-sky-400"></i> TALL TUBULAR INVERTER`;
    badge.className = "text-xs font-black uppercase text-sky-400 tracking-wider flex items-center gap-1.5";
    priceTag.textContent = "150-220 Ah • From ₹9,000";
    priceTag.className = "text-xs bg-sky-600/20 text-sky-400 font-bold px-2 py-0.5 rounded border border-sky-500/30";
    img.src = "assets/inva-inverter-tubular.svg";
    specSeries.textContent = "TUBULAR PRO";
    specType.textContent = "HOME INVERTER";
    specType.className = "font-bold text-sky-400";
    specScrap.textContent = "From ₹7,200";
    ctaBtn.innerHTML = `<i class="fa-solid fa-cart-plus"></i> Add Inverter 150Ah to Cart (₹9,000)`;
    ctaBtn.onclick = function() { addToCart('inva-inverter-150', true); };
  }
};

