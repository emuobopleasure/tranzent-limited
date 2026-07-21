export const SERVICES = [
  {
    id: "transportation",
    code: "S1",
    title: "Vehicle Delivery & Logistics",
    short: "Open and enclosed haul for single vehicles, moved door-to-door.",
    copy:
      "From a single sedan to a rare collector's piece, we move vehicles on certified carriers with condition reports captured at pickup and delivery, so what left your hands is exactly what arrives.",
    points: ["Door-to-door pickup & delivery", "Photo-verified condition reports", "Open & enclosed carrier options"],
    accent: "primary",
    image: "/images/services/haulage-service.png",
    icon: (
      <path d="M3 13.5 5 8h9l3.5 5.5H21a1 1 0 0 1 1 1V17a1 1 0 0 1-1 1h-1.5a2.5 2.5 0 1 1-5 0h-5a2.5 2.5 0 1 1-5 0H3a1 1 0 0 1-1-1v-3.5a1 1 0 0 1 1-1Zm3 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 10l-1.2 2H13l-1.4-2H6Z" />
    ),
  },
  {
    id: "spare-parts",
    code: "S2",
    title: "Spare Parts Procurement & Delivery",
    short: "Climate-aware, fully enclosed transport for premium and exotic vehicles.",
    copy:
      "For vehicles where exposure isn't an option, our enclosed fleet offers padded restraints, hydraulic lift-gates, and continuous route monitoring, engineered specifically for high-value, low-tolerance cargo.",
    points: ["Fully enclosed, weather-sealed trailers", "Soft-strap, non-contact restraints", "Elevated insurance ceiling on request"],
    accent: "accent",
    image: "/images/services/enclosed.jpg",
    icon: (
      <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm2 3v6h12V9H6Zm-1 9h14v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1Z" />
    ),
  },
  {
    id: "inspection",
    code: "S3",
    title: "Vehicle Inspection & Document Validation",
    short: "Multi-unit relocation for dealerships, rental fleets, and corporates.",
    copy:
      "We coordinate simultaneous multi-vehicle movements. Inter-state stock transfers, auction pickups, and rental repositioning all run through a single point of contact with consolidated reporting.",
    points: ["Simultaneous multi-unit scheduling", "Dedicated fleet account manager", "Consolidated billing & reporting"],
    accent: "secondary",
    image: null,
    icon: (
      <path d="M3 10h6v9H3v-9Zm8-6h6v15h-6V4Zm8 9h2v6h-2v-6ZM4 21h4v-1H4v1Zm8 0h4v-1h-4v1Zm7 0h3v-1h-3v1Z" />
    ),
  },
  {
    id: "recovery",
    code: "S4",
    title: "Vehicle Recovery & Automotive Services",
    short: "Route, fleet, and logistics-tech strategy for scaling operations.",
    copy:
      "As we grow beyond delivery into mobility technology, our advisory arm helps businesses design leaner transport networks, evaluate fleet tech, and build logistics operations that scale without friction.",
    points: ["Network & route optimisation", "Fleet technology evaluation", "Operational process design"],
    accent: "primary",
    image: null,
    icon: (
      <path d="M12 2 2 7v2h20V7L12 2Zm-8 8h3v9H4v-9Zm6.5 0h3v9h-3v-9ZM17 10h3v9h-3v-9ZM2 21h20v2H2v-2Z" />
    ),
  },
];
