import Link from "next/link";
import Reveal from "./Reveal";
import { SERVICES } from "@/lib/services";
import MediaFrame from "./MediaFrame";
import CarCarrierIllustration from "./CarCarrierIllustration";

const ICONS = {
  transportation: (
    <>
      {/* Delivery truck */}
      <path d="M3 14.5h12V8H3v6.5Z" />
      <path d="M15 10h3l3 3v1.5h-6" />
      <circle cx="6.5" cy="15.5" r="1.5" />
      <circle cx="18" cy="15.5" r="1.5" />

      {/* Car */}
      <path d="M6 8 7.5 5h5L14 8" />

      {/* Route */}
      <path d="M3 4c2-1.5 4 1.5 6 0s4-1.5 6 0" />
      <path d="M17 4h3" />
    </>
  ),

  "spare-parts": (
    <>
      {/* Simple gear */}
      <path d="M12 5.2 13.3 4l1.4 1.2-.3 1.7 1.4 1.1 1.6-.3.6 1.7-1.3 1.1.3 1.7 1.5.8-.8 1.6-1.6-.3-1.2 1.2.3 1.6-1.7.6-1-1.3h-1.7l-1 1.3-1.7-.6.3-1.6-1.2-1.2-1.6.3-.8-1.6 1.5-.8.3-1.7-1.3-1.1.6-1.7 1.6.3 1.4-1.1-.3-1.7L10.7 4 12 5.2Z" />
      <circle cx="12" cy="11.5" r="2.2" />

      {/* Delivery arrow */}
      <path d="M16 19h5" />
      <path d="m18.5 17 2.5 2-2.5 2" />
    </>
  ),

  inspection: (
    <>
      {/* Vehicle */}
      <path d="M3.5 15h10" />
      <path d="M4.5 15v-3l1.5-3h4.5l2 3v3" />
      <circle cx="6" cy="15" r="1.3" />
      <circle cx="11" cy="15" r="1.3" />

      {/* Document */}
      <path d="M16 4h4v9h-6V6l2-2Z" />
      <path d="M16 4v2h2" />

      {/* Check */}
      <path d="m15.5 10 1 1 2-2" />
    </>
  ),

  recovery: (
    <>
      {/* Tow truck */}
      <path d="M3 15h18" />
      <path d="M4 15V9h9v6" />
      <path d="M13 11h4l3 3v1" />

      {/* Recovery arm */}
      <path d="M8 9 15 4h4" />
      <path d="M19 4v5" />

      {/* Cable + hook */}
      <path d="M19 9c0 2-1 3-3 3" />
      <path d="m15 12 1 1 1-1" />

      {/* Wheels */}
      <circle cx="7" cy="16.5" r="1.4" />
      <circle cx="17" cy="16.5" r="1.4" />
    </>
  ),
};

const ACCENTS = {
  primary: "bg-primary-50 text-primary-600",
  secondary: "bg-secondary-50 text-secondary-600",
  accent: "bg-accent-50 text-accent-600",
};

export default function CoreServices() {
  return (
    <section className="core-services bg-ink-900 py-24 sm:py-28">
      {/* <div className="absolute inset-0 z-0">
        <MediaFrame className="h-full w-full" fallback={<CarCarrierIllustration className="h-full w-full animate-hero-zoom opacity-20"/>} />
      </div> */}
      <div className="core-services-section container-brand">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end lg:items-start">
          <Reveal>
            <h2 className="max-w-xl font-display text-[32px] font-semibold leading-tight tracking-tightest text-white sm:text-[40px]">
              Purpose-built transport, for every kind of cargo.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 font-mono text-[12.5px] sm:mt-[0.3rem] uppercase tracking-widest2 transition-colors duration-200 text-primary-300 hover:text-primary"
            >
              View all services
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 ease-signature group-hover:translate-x-1" aria-hidden="true">
                <path d="M2 12 12 2M12 2H4M12 2v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={i * 80} className="h-full">
              <Link
                href={`/services#${service.id}`}
                className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-400 ease-signature hover:-translate-y-1.5 hover:border-white/25 hover:bg-white/[0.06]"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/80 text-primary-300 transition-all duration-400 ease-signature group-hover:-translate-y-1 group-hover:border-primary-300/60">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {ICONS[service.id]}
                  </svg>
                </span>
                <h3 className="mt-5 mb-8 font-display text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-white/60">
                  {service.short}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-primary-300 transition-opacity duration-300 ease-signature opacity-100">
                  Learn more
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 12 12 2M12 2H4M12 2v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
