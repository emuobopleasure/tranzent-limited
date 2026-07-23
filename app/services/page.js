import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import MediaFrame from "@/components/MediaFrame";
import { SERVICES } from "@/lib/services";

export const metadata = {
  title: "Services",
  description:
    "Explore Tranzent's core services - vehicle transportation, enclosed high-value haul, fleet & dealer logistics, and mobility consulting.",
};

const ACCENTS = {
  primary: "bg-primary-50 text-primary-600 border-primary-200",
  secondary: "bg-secondary-50 text-secondary-600 border-secondary-200",
  accent: "bg-accent-50 text-accent-600 border-accent-200",
};

const PROCESS = [
  { step: "Inquiry", copy: "Share what needs to move — vehicle, fleet, or freight — and your preferred timeline." },
  { step: "Routed Quote", copy: "We assess distance, handling requirements, and insurance needs, then respond within one business day." },
  { step: "Scheduled Pickup", copy: "A vetted crew arrives at the agreed window with a documented condition report." },
  { step: "Tracked Transit", copy: "Live checkpoint updates keep you informed from origin to destination." },
  { step: "Verified Handover", copy: "Delivery is confirmed against the original condition report, signed off on-site." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Move"
        title="Specialised transport, matched to what you're moving."
        copy="From a single vehicle to a high-value collector's piece or an entire dealer fleet, Tranzent routes it through the handling standard it deserves"
      />

      <section className="bg-paper py-24 sm:py-28">
        <div className="container-brand flex flex-col gap-24 sm:gap-28">
          {SERVICES.map((service, i) => {
            const palette = ACCENTS[service.accent];
            const reversed = i % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal className={reversed ? "lg:order-2" : ""}>
                  {/* <span className="font-mono text-[12px] text-ink-300">{service.code}</span>
                  <div className={`mt-4 flex h-14 w-14 items-center justify-center rounded-2xl border ${palette}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      {service.icon}
                    </svg>
                  </div> */}
                  <div className="flex items-start gap-x-4">
                    <span className="eyebrow text-primary-300 pt-[1.1rem] lg:pt-5">
                      <span className="h-[3px] w-6 rounded-full bg-accent" />

                    </span>
                    <h2 className="font-display text-[28px] font-semibold leading-tight tracking-tightest text-ink-900 sm:text-[34px]">
                      {service.title}
                    </h2>
                  </div>
                  <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-ink-500">
                    {service.copy}
                  </p>
                  {service.points.length > 0 && (
                    <ul className="mt-7 flex flex-col gap-3.5">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-[14.5px] text-ink-700">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-secondary-600" aria-hidden="true">
                            <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}

                  {service.subServices && (
                    <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                      {service.subServices.map((sub) => (
                        <div
                          key={sub.title}
                          className="rounded-2xl border border-line bg-white p-5 transition-colors duration-300 ease-signature hover:border-primary-200"
                        >
                          <h3 className="font-display text-[15px] font-semibold text-ink-900">
                            {sub.title}
                          </h3>
                          <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-500">
                            {sub.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </Reveal>

                <Reveal delay={120} className={reversed ? "lg:order-1" : ""}>
                  {service.image ? (
                    <MediaFrame
                      src={service.image}
                      alt={service.title}
                      className="h-[320px] rounded-[28px] shadow-card sm:h-[380px] lg:h-[580px] xl:h-[520px]"
                      overlay="bottom"
                      fallback={
                        <span className={`flex h-16 w-16 items-center justify-center rounded-2xl border ${palette}`}>
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            {service.icon}
                          </svg>
                        </span>
                      }
                    >
                      <div className="absolute bottom-0 left-0 p-7 sm:p-8">
                        {/* <p className="font-mono text-[11px] uppercase tracking-widest2 text-white/60">
                          Service {service.code}
                        </p> */}
                        <p className="mt-2 font-display text-lg font-semibold text-white sm:text-xl">
                          {service.short}
                        </p>
                      </div>
                    </MediaFrame>
                  ) : (
                    <div className="relative overflow-hidden rounded-[28px] border border-line bg-white p-10 shadow-card sm:p-12">
                      <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full ${palette.split(" ")[0]} opacity-60`} />
                      <div className="relative flex h-full flex-col justify-between gap-10">
                        <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${palette}`}>
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            {service.icon}
                          </svg>
                        </div>
                        <div>
                          {/* <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink-300">
                            Service {service.code}
                          </p> */}
                          <p className="mt-2 font-display text-xl font-semibold text-ink-900">
                            {service.short}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-ink-900 py-24 sm:py-28">
        <div className="container-brand">
          <Reveal>
            {/* <span className="eyebrow text-primary-300">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              How It Works
            </span> */}
            <h2 className="mt-5 max-w-xl font-display text-[30px] font-semibold leading-tight tracking-tightest text-white sm:text-[38px]">
              From inquiry to handover, in five checkpoints.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-5">
            {PROCESS.map((item, i) => (
              <Reveal key={item.step} delay={i * 90} className="h-full">
                <div className="flex h-full flex-col justify-between bg-ink-900 p-6 sm:p-7">
                  <span className="font-mono text-[11px] text-white/30">0{i + 1}</span>
                  <div>
                    <h3 className="mt-8 font-display text-base font-semibold text-white sm:text-lg">
                      {item.step}
                    </h3>
                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-white/50">
                      {item.copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Have something specific in mind?"
        title="Tell us the route, we'll handle the rest."
        copy="Get a routed quote matched to your exact vehicle, timeline, and handling requirements."
      />
    </>
  );
}
