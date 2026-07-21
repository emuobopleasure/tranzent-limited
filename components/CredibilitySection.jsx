import Reveal from "./Reveal";
import ShipmentCard from "./ShipmentCard";
import RouteCard from "./RouteCard";

export default function CredibilitySection() {
  return (
    <section className="CredibilitySection relative overflow-hidden bg-ink-900 py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-secondary/10 blur-[100px]" />

      <div className="container-brand relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          {/* <span className="eyebrow text-primary-300">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            Live Visibility
          </span> */}
          <h2 className="mt-5 max-w-md font-display text-[30px] font-semibold leading-tight tracking-tightest text-white sm:text-[38px]">
            Track every mile, in real time.
          </h2>
          <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-white/60">
            Every shipment on Tranzent runs through the same dashboard our coordinators use. Checkpoint updates, live routing, and a transparent status trail from pickup to handover. No app to install. No guessing where things stand.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {[
              "Checkpoint-verified status updates",
              "Live route and ETA tracking",
              "One dashboard, shared with you",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[14.5px] text-white/75">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 text-secondary-400" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto flex max-w-md flex-col gap-6 sm:flex-row sm:items-end sm:justify-center lg:mx-0 lg:max-w-none lg:justify-end">
            <div className="sm:-translate-y-4">
              <ShipmentCard className="!w-full sm:!w-[280px]" />
            </div>
            <div>
              <RouteCard className="!w-full sm:!w-[280px]" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
