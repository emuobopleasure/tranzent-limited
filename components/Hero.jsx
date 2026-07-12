import PillButton from "./PillButton";
import AvatarCluster from "./AvatarCluster";
import MediaFrame from "./MediaFrame";
import CarCarrierIllustration from "./CarCarrierIllustration";

// Hero background photo. Swap this file at /public/images/hero-car-carrier.jpg
// for a different shot any time — everything else updates automatically.
const HERO_IMAGE = "/images/hero-car-carrier.jpg";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-900 h-screen">
      <MediaFrame
        src={HERO_IMAGE}
        alt="Tranzent car carrier truck loaded with vehicles"
        className="absolute inset-0 bg-current h-dvh w-full"
        imgClassName="object-[center_52%] sm:object-[center_40%] animate-hero-zoom"
        overlay="none"
        priority
        fallback={<CarCarrierIllustration className="h-full w-full animate-hero-zoom" />}
      />
      {/* legibility scrim — tuned to keep the photo visible while the text stays readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-900/85 via-ink-900/50 to-ink-900/10 sm:via-ink-900/35 sm:to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink-900/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-900/70 to-transparent" />

      <div className="container-brand absolute lg:left-20 top-[2px] pb-16 pt-[148px] sm:pb-24 sm:pt-[172px] lg:pb-28">
        <div className="max-w-xl">
          {/* <span className="eyebrow text-primary-300 drop-shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            Vehicle Transportation &amp; Logistics
          </span> */}

          <h1 className="mt-6 font-display text-[40px] font-semibold leading-[1.06] tracking-tightest text-white drop-shadow-[0_2px_18px_rgba(11,20,36,0.55)] sm:text-[52px] lg:text-[58px]">
            Move vehicles forward, without the guesswork.
          </h1>

          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-white/85 drop-shadow-[0_1px_10px_rgba(11,20,36,0.5)] sm:text-[17px]">
            Tranzent moves vehicles, fleets, and freight across Nigerian
            roads with insured precision and live visibility — so every
            handover feels less like a shipment, and more like a promise
            kept.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <PillButton href="/contact" variant="primary">
              Request a Quote
            </PillButton>
            <a
              href="/services"
              className="inline-flex items-center text-[14.5px] font-medium text-white/90 drop-shadow-sm transition-colors duration-200 border border-white rounded-full btn-ghost-light hover:text-ink-900 hover:bg-primary-50 py-3 gap-2"
            >
              Explore Services
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 12 12 2M12 2H4M12 2v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="mt-12 border-t border-white/20 pt-7">
            <AvatarCluster caption="Trusted by fleet operators and dealerships nationwide" />
          </div>
        </div>
      </div>
    </section>
  );
}
