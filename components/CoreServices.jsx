import Link from "next/link";
import Reveal from "./Reveal";
import { SERVICES } from "@/lib/services";
import MediaFrame from "./MediaFrame";
import CarCarrierIllustration from "./CarCarrierIllustration";

const ACCENTS = {
  primary: "bg-primary-50 text-primary-600",
  secondary: "bg-secondary-50 text-secondary-600",
  accent: "bg-accent-50 text-accent-600",
};

export default function CoreServices() {
  return (
    <section className="bg-ink-900 py-24 sm:py-28">
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
              className="group inline-flex items-center gap-2 font-mono text-[12.5px] uppercase tracking-widest2 transition-colors duration-200 text-primary-300 hover:text-primary"
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
                {/* <div className="flex items-center justify-between">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${ACCENTS[service.accent]} transition-transform duration-400 ease-signature group-hover:scale-110`}>
                    <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      {service.icon}
                    </svg>
                  </span>
                  <span className="font-mono text-[11px] text-white/25">{service.code}</span>
                </div> */}
                <h3 className="mt-2 mb-8 font-display text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-white/50">
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
