import Link from "next/link";
import Reveal from "./Reveal";
import MediaFrame from "./MediaFrame";
import CarCarrierIllustration from "./CarCarrierIllustration";

function DriverIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 600 400" fill="none" className={className} preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <circle cx="480" cy="90" r="90" fill="#25AAE1" fillOpacity="0.12" />
      <line x1="0" y1="330" x2="600" y2="330" stroke="white" strokeOpacity="0.14" strokeWidth="2" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={i * 130 + 20} y="326" width="50" height="6" rx="3" fill="white" fillOpacity="0.1" />
      ))}
      <path
        d="M120 330c0-70 40-120 110-120s110 50 110 120"
        stroke="#1AB42E"
        strokeOpacity="0.5"
        strokeWidth="3"
      />
      <circle cx="230" cy="150" r="34" stroke="white" strokeOpacity="0.4" strokeWidth="3" />
      <path d="M170 330c0-45 27-80 60-80s60 35 60 80" stroke="white" strokeOpacity="0.3" strokeWidth="3" />
      <path d="M40 260c60-30 130-30 190 0" stroke="#F7941D" strokeOpacity="0.4" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

const PANELS = [
  {
    id: "carrier",
    tag: "Car Carrier Services",
    title: "Multi-vehicle carriers, purpose-built for the road.",
    copy: "Open and enclosed carriers configured for Nigerian routes — from single-vehicle relocations to full dealer-fleet loads.",
    href: "/services#transportation",
    image: "/images/services/showcase-carrier.jpg",
    fallback: <CarCarrierIllustration className="h-full w-full" />,
    span: "lg:col-span-3",
  },
  {
    id: "driven",
    tag: "Driven With Care",
    title: "Vetted drivers, trained for precision handling.",
    copy: "Every driver is background-checked and briefed on load-specific handling before a single vehicle is strapped down.",
    href: "/about",
    image: "/images/services/showcase-driven.jpg",
    fallback: <DriverIllustration className="h-full w-full" />,
    span: "lg:col-span-2",
  },
];

export default function ServiceShowcase() {
  return (
    <section className="bg-paper py-24 sm:py-28">
      <div className="container-brand">
        <Reveal>
          <span className="eyebrow text-ink-500">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            In Motion
          </span>
          <h2 className="mt-5 max-w-xl font-display text-[30px] font-semibold leading-tight tracking-tightest text-ink-900 sm:text-[38px]">
            The equipment and the people behind every load.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-5">
          {PANELS.map((panel, i) => (
            <Reveal key={panel.id} delay={i * 100} className={panel.span}>
              <Link
                href={panel.href}
                className="group relative flex h-[380px] flex-col justify-end overflow-hidden rounded-3xl shadow-card transition-all duration-500 ease-signature hover:-translate-y-1.5 hover:shadow-lift sm:h-[420px]"
              >
                <MediaFrame
                  src={panel.image}
                  alt={panel.title}
                  className="absolute inset-0"
                  imgClassName="transition-transform duration-700 ease-signature group-hover:scale-105"
                  overlay="bottom"
                  fallback={panel.fallback}
                />
                <div className="relative p-7 sm:p-9">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-mono text-[10.5px] uppercase tracking-widest2 text-white backdrop-blur-sm">
                    {panel.tag}
                  </span>
                  <h3 className="mt-4 max-w-xs font-display text-xl font-semibold text-white sm:text-2xl">
                    {panel.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-white/70">
                    {panel.copy}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium text-primary-300 opacity-0 transition-opacity duration-300 ease-signature group-hover:opacity-100">
                    Learn more
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 12 12 2M12 2H4M12 2v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
