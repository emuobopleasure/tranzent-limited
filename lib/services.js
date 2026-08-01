export const SERVICES = [
  {
    id: "transportation",
    code: "S1",
    title: "Vehicle Delivery & Logistics",
    short: "Driven transport and haulage for single vehicles, moved door-to-door.",
    copy:
      "From a single sedan to a rare collector's piece, we move vehicles by the method that suits them best. A vetted driver behind the wheel, or a certified carrier. Condition reports are captured at pickup and delivery, so what left your hands is exactly what arrives.",
    points: ["Door-to-door vehicle delivery", "Driven and carrier transport options", "Pickup, delivery, and condition reports"],
    subServices: [
      {
        title: "Driven Vehicle Transport",
        description:
          "A vetted, insured driver delivers your vehicle safely and directly to its destination.",
        image: "/images/services/driven-transport.jpg",
      },
      {
        title: "Open Vehicle Haulage",
        description:
          "Standard open-carrier transport for everyday vehicles, secured and moved at competitive rates.",
        image: "/images/services/open-haulage.png",
      },
      {
        title: "Enclosed Vehicle Haulage",
        description:
          "Premium enclosed transport that protects your vehicle every mile.",
        image: "/images/services/enclosed-haulage.jpg",
      },
      {
        title: "Vehicle Recovery & Towing",
        description:
          "Fast, reliable recovery and towing for broken-down or non-running vehicles.",
        image: "/images/services/recovery.jpg",
      },
    ],
    accent: "primary",
    image: null,
    icon: (
      <path d="M3 13.5 5 8h9l3.5 5.5H21a1 1 0 0 1 1 1V17a1 1 0 0 1-1 1h-1.5a2.5 2.5 0 1 1-5 0h-5a2.5 2.5 0 1 1-5 0H3a1 1 0 0 1-1-1v-3.5a1 1 0 0 1 1-1Zm3 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 10l-1.2 2H13l-1.4-2H6Z" />
    ),
  },
  {
    id: "spare-parts",
    code: "S2",
    title: "Spare Parts Procurement & Delivery",
    short: "Genuine spare parts, sourced and delivered with confidence",
    copy:
      "Source genuine spare parts without the hassle. We help you procure, inspect, and deliver the right parts safely and on time.",
    points: ["Genuine parts from trusted suppliers", "Nationwide pickup and delivery", "Fast, secure, and tracked shipments"],
    accent: "accent",
    image: "/images/services/spare-parts.jpg",
    icon: (
      <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm2 3v6h12V9H6Zm-1 9h14v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1Z" />
    ),
  },
  {
    id: "inspection",
    code: "S3",
    title: "Vehicle Inspection & Document Validation",
    short: "Verified inspections and trusted document checks.",
    copy:
      "Make informed decisions before you buy, sell, or move a vehicle. We inspect its condition and verify key documents for added confidence.",
    points: ["Comprehensive vehicle condition reports", "Ownership and document verification", "Photo and inspection evidence"],
    accent: "secondary",
    image: "/images/services/inspection.jpg",
    icon: (
      <path d="M3 10h6v9H3v-9Zm8-6h6v15h-6V4Zm8 9h2v6h-2v-6ZM4 21h4v-1H4v1Zm8 0h4v-1h-4v1Zm7 0h3v-1h-3v1Z" />
    ),
  },
  {
    id: "recovery",
    code: "S4",
    title: "Vehicle Recovery & Automotive Services",
    short: "Recovery, towing, and automotive support when you need it most.",
    copy:
      "Comprehensive recovery and automotive services for broken-down, damaged, or non-running vehicles, delivered with speed, care, and reliability.",
    points: ["Vehicle recovery and towing", "Roadside assistance and vehicle support", "Secure transport to your destination"],
    accent: "primary",
    image: "/images/services/vehicle-towing.jpg",
    icon: (
      <path d="M12 2 2 7v2h20V7L12 2Zm-8 8h3v9H4v-9Zm6.5 0h3v9h-3v-9ZM17 10h3v9h-3v-9ZM2 21h20v2H2v-2Z" />
    ),
  },
];
