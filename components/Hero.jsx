import PillButton from "./PillButton";
import AvatarCluster from "./AvatarCluster";
import MediaFrame from "./MediaFrame";
import CarCarrierIllustration from "./CarCarrierIllustration";

// Hero background photo. Swap this file at /public/images/hero-image.png
// for a different shot any time — everything else updates automatically.
const HERO_IMAGE = "/images/hero-image.png";

export default function Hero() {
  return (
    <section className="relative isolate flex items-center overflow-hidden bg-ink-900 min-h-[100svh]">
      {/* background image layer — this div owns the positioning, MediaFrame just fills it */}
      <div className="absolute inset-0">
        <MediaFrame
          src={HERO_IMAGE}
          alt="Tranzent car carrier truck loaded with vehicles"
          className="h-full w-full"
          imgClassName="object-[center_28%] sm:object-[center_35%] md:object-[center_40%] lg:object-[center_42%] animate-hero-zoom"
          overlay="none"
          priority
          fallback={<CarCarrierIllustration className="h-full w-full animate-hero-zoom" />}
        />
      </div>

      {/* legibility scrim — tuned to keep the photo visible while the text stays readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-900/85 via-ink-900/50 to-ink-900/10 sm:via-ink-900/35 sm:to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink-900/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-900/70 to-transparent" />

      {/* text + buttons — sit on top of the background image */}
      <div className="container-brand relative py-20 sm:py-24 md:py-28 lg:py-0">
        <div className="max-w-xl">
          {/* <span className="eyebrow text-primary-300 drop-shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            Vehicle Transportation &amp; Logistics
          </span> */}

          <h1 className="mt-6 font-display text-[32px] font-semibold leading-[1.08] tracking-tightest text-white drop-shadow-[0_2px_18px_rgba(11,20,36,0.55)] sm:text-[42px] md:text-[50px] lg:text-[58px]">
            Move vehicles forward, without the guesswork.
          </h1>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/85 drop-shadow-[0_1px_10px_rgba(11,20,36,0.5)] sm:text-[16px] md:text-[17px]">
            Tranzent moves vehicles, fleets, and freight across Nigerian
            roads with insured precision and live visibility, so every
            handover feels less like a shipment, and more like a promise
            kept.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <PillButton href="/contact" variant="primary">
              Request a Quote
            </PillButton>
            
             <a href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white py-3 px-6 text-[14.5px] font-medium text-white/90 drop-shadow-sm transition-colors btn-ghost-light duration-200 hover:bg-primary-50 hover:text-ink-900"
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