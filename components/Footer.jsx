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
      { label: "hello@tranzent.co", href: "mailto:hello@tranzent.co" },
      { label: "+234 800 000 0000", href: "tel:+2348000000000" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-900 text-white">
      <div className="step-divider h-1.5 w-full" />
      <div className="container-brand py-16 sm:py-28 relative">
        <div className="scroll-to-top absolute top-[2rem] right-[1.56rem] md:right-[2rem] lg:top-[2rem] lg:right-[3.5rem]">
          <ScrollTopButton />
        </div>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo variant="light" withTagline />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/55">
              A purpose-driven mobility and logistics enterprise, moving vehicles
              and freight with insured precision, transparent tracking, and
              absolute peace of mind — from first mile to final delivery.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 ease-signature hover:-translate-y-1 hover:border-primary hover:text-primary hover:shadow-glow-primary"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="eyebrow text-white/40">{col.title}</h3>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[14.5px] text-white/70 transition-colors duration-200 hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-6">
            <p className="font-mono text-[12px] text-white/35">
              © {new Date().getFullYear()} Tranzent. All rights reserved.
            </p>
            <p className="hidden font-mono text-[12px] uppercase tracking-widest2 text-white/35 sm:block">
              Beyond Delivery
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
