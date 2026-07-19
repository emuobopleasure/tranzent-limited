import Link from "next/link";
import Logo from "./Logo";
import ScrollTopButton from "./ScrollTopButton";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/tranzent-limited/",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z",
  },
  {
    label: "X / Twitter",
    href: "https://x.com/Tranzent_Ltd",
    path: "M3 3h4.6l4.16 5.66L16.6 3H21l-6.98 8.34L21.4 21h-4.6l-4.55-6.2L6.6 21H2.2l7.4-8.85L3 3Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/tranzent_limited/",
    path: "M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 2A2.5 2.5 0 0 0 5 7.5v9A2.5 2.5 0 0 0 7.5 19h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 16.5 5h-9ZM12 7.8a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4Zm0 2a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4Zm4.6-3.6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/Tranzent/",
    path: "M13.5 21v-7.2h2.4l.36-2.8h-2.76V9.1c0-.81.22-1.36 1.39-1.36h1.48V5.2A19.8 19.8 0 0 0 14.1 5c-2.13 0-3.6 1.3-3.6 3.68V11H8.1v2.8h2.4V21h3Z",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/2348107168919?text=Hi%20Tranzent%2C%20I%27d%20like%20to%20enquire%20about%20a%20delivery.",
    path: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.83L2 22l5.36-1.4c1.38.75 2.96 1.18 4.66 1.18h.02c5.46 0 9.91-4.45 9.91-9.91 0-2.64-1.03-5.13-2.91-7C17.14 3.03 14.65 2 12.04 2Zm.01 1.67c2.21 0 4.28.86 5.84 2.42a8.19 8.19 0 0 1 2.42 5.83c0 4.55-3.71 8.25-8.27 8.25a8.27 8.27 0 0 1-4.19-1.14l-.3-.18-3.18.83.85-3.1-.2-.32a8.2 8.2 0 0 1-1.27-4.38c0-4.56 3.71-8.21 8.3-8.21Zm-3.72 4.6c-.15 0-.4.06-.61.29-.21.24-.8.78-.8 1.9s.82 2.21.94 2.36c.11.15 1.59 2.52 3.9 3.44 1.92.76 2.31.6 2.73.57.42-.04 1.34-.55 1.53-1.08.19-.53.19-.98.13-1.08-.06-.1-.21-.15-.44-.27-.23-.11-1.34-.66-1.55-.74-.21-.08-.36-.11-.51.12-.15.23-.58.74-.71.89-.13.15-.26.17-.49.06-.23-.11-.96-.36-1.83-1.14-.68-.6-1.13-1.35-1.27-1.58-.13-.23-.01-.35.1-.47.11-.11.23-.27.35-.4.11-.13.15-.23.23-.38.08-.15.04-.29-.02-.4-.06-.11-.51-1.26-.72-1.72-.19-.44-.38-.38-.51-.39-.13-.01-.28-.01-.43-.01Z",
  },
];

const COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About Tranzent", href: "/about" },
      { label: "The Standard", href: "/#the-standard" },
      { label: "Careers", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Vehicle Transportation", href: "/services#transportation" },
      { label: "Enclosed & High-Value Haul", href: "/services#enclosed" },
      { label: "Fleet & Dealer Logistics", href: "/services#fleet" },
      { label: "Mobility Consulting", href: "/services#consulting" },
    ],
  },
  {
    title: "Get in Touch",
    links: [
      { label: "Request a Quote", href: "/contact" },
      { label: "tranzent.limited@gmail.com", href: "mailto:tranzent.limited@gmail.com" },
      // { label: "+234 812 959 8167", href: "tel:+2348000000000" },
      // { label: "+234 800 000 0000", href: "tel:+2348000000000" },
      // { label: "+234 800 000 0000", href: "tel:+2348000000000" },
    ],
  },
];

const OFFICES = [
  {
    title: "Our Offices",
    offices: [
      { city: "Abuja", phone: "+234 812 959 8167", href: "tel:+2348129598167" },
      { city: "Lagos", phone: "+234 810 716 8919", href: "tel:+2348107168919" },
      { city: "Kaduna", phone: "+234 807 587 1214", href: "tel:+2348075871214" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-900 text-white">
      <div className="step-divider h-1.5 w-full" />
      <div className="container-brand py-16 sm:py-28 relative">
        <div className="scroll-to-top absolute top-[2rem] right-[1.56rem] md:right-[2rem] lg:top-[2rem] lg:right-[3.5rem]">
          <ScrollTopButton />
        </div>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_2fr]">
          <div>
            <Logo ring="accent" />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/90">
              A purpose-driven mobility and logistics enterprise, moving vehicles
              and freight with insured precision, transparent tracking, and
              absolute peace of mind from first mile to final delivery.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/55 text-white/70 transition-all duration-300 ease-signature hover:-translate-y-1 hover:border-primary hover:text-primary hover:shadow-glow-primary"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
            <div className="mt-8 flex items-start gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-primary-300" aria-hidden="true">
                <path d="M12 22s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12Zm0-9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              <div>
                <span className="block max-w-[15rem] text-[14px] leading-relaxed text-white/70">
                  Plot 809, A-Close, 64 Crescent, Gwarinpa, Abuja, Nigeria
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="eyebrow text-white/55">{col.title}</h3>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {col.links.map((link) => (
                    <li key={link.label} className="break-all md:break-keep">
                      <Link
                        href={link.href}
                        className="text-[14.5px] text-white/90 transition-colors duration-200 hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {OFFICES.map((col) => (
              <div key={col.title}>
                <h3 className="eyebrow text-white/55">{col.title}</h3>
                <ul className="mt-5 flex flex-col gap-4">
                  {col.offices.map((office) => (
                    <li key={office.phone}>

                      <a href={office.href}
                        className="group block text-[14.5px] transition-colors duration-200"
                      >
                        <span className="block font-mono text-[10.5px] uppercase tracking-widest2 text-white/45">
                          {office.city}
                        </span>
                        <span className="mt-1 block text-white/90 group-hover:text-primary">
                          {office.phone}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-6">
            <p className="font-mono text-[12px] text-white/50">
              © {new Date().getFullYear()} Tranzent Limited. All rights reserved.
            </p>
            {/* <p className="hidden font-mono text-[12px] uppercase tracking-widest2 text-white/50 sm:block">
              Beyond Delivery
            </p> */}
          </div>
        </div>
      </div>
    </footer >
  );
}
