import PillButton from "./PillButton";
import AvatarCluster from "./AvatarCluster";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-start overflow-hidden bg-[#3f6199]">
      {/* background image */}
      <picture className="absolute inset-0 -z-10 block">
        <source media="(min-width: 768px)" srcSet="/images/hero-desktop.webp" type="image/webp" />
        <source media="(min-width: 768px)" srcSet="/images/hero-desktop.webp" type="image/jpeg" />
        <source srcSet="/images/hero-mobile.webp" type="image/webp" />
        <img
          src="/images/hero-mobile.webp"
          alt="Tranzent car carrier truck loaded with vehicles"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full origin-bottom animate-hero-zoom object-cover object-bottom"
        />
      </picture>

      {/* legibility scrims — kept light so the truck stays bright */}
      {/* top: nav + headline */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-ink-900/60 via-ink-900/20 to-transparent to-60%" />
      {/* left: only where the desktop text sits */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden bg-gradient-to-r from-ink-900/40 via-ink-900/10 to-transparent md:block" />

      {/* bottom scrim so the trust caption reads over the road */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink-900/75 to-transparent" />

      {/* text + buttons */}
      <div className="container-brand relative flex min-h-[100svh] flex-col pt-16 md:block md:min-h-0 md:pb-44 md:pt-32 lg:pt-36">
        {/* mobile: one evenly spaced group, centred in the sky between the navbar and the truck */}
        <div className="flex flex-1 flex-col justify-center pb-[30svh] text-center sm:text-left md:block md:max-w-xl md:pb-0 lg:max-w-2xl">
          <div>
            <h1 className="font-display text-[32px] font-semibold leading-[1.08] tracking-tightest text-white drop-shadow-[0_2px_18px_rgba(11,20,36,0.55)] sm:text-[42px] md:text-[48px] lg:text-[clamp(44px,6.2vh,60px)]">
              Reliable vehicle transport starts here.
            </h1>

            {/* hidden on short phones so it never reaches the truck */}
            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white drop-shadow-[0_1px_10px_rgba(11,20,36,0.55)] sm:mx-0 sm:text-[16px] md:max-w-lg md:text-[17px] max-[430px]:[@media(max-height:720px)]:hidden">
              Tranzent Limited transports vehicles, fleets, and freight across Nigerian roads with insured precision and live visibility, so every handover feels less like a shipment and more like a promise kept.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3.5 sm:flex-row sm:items-center sm:gap-5 md:mt-9">
            {/* Primary: brand blue, lifted off the sky by a soft dark shadow + a fine top highlight */}
            <PillButton
              href="/quote"
              variant="primary"
              className="w-full max-w-[300px] justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_12px_28px_-8px_rgba(11,20,36,0.65)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_16px_34px_-8px_rgba(11,20,36,0.75)] sm:w-auto sm:max-w-none sm:justify-start"
            >
              Request a Quote
            </PillButton>

            {/* Secondary: dark glass, hairline border, bordered arrow */}
            <a
              href="/services"
              className="group inline-flex h-12 w-full max-w-[300px] items-center justify-between gap-4 rounded-full border border-white/60 bg-white/75 py-1.5 pl-6 pr-1.5 text-[14.5px] font-semibold text-ink-900 shadow-[0_6px_18px_-8px_rgba(11,20,36,0.35)] backdrop-blur-md transition-all duration-300 ease-signature hover:bg-white active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 motion-reduce:transition-none sm:w-auto sm:max-w-none sm:border-white/70 sm:bg-ink-900/10 sm:text-white sm:shadow-none sm:backdrop-blur-[4px] sm:hover:bg-ink-900/25"
            >
              <span>Explore Services</span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink-900/80 bg-transparent text-ink-900/80 transition-transform duration-300 ease-signature group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none sm:border-white/70 sm:text-white">
                <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" className="h-3.5 w-3.5">
                  <path d="M2 12 12 2M12 2H4M12 2v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* trust caption — pinned to the very bottom of the hero on every screen */}
      <div className="container-brand absolute inset-x-0 bottom-0 lg:bottom-5">
        <div className="border-t border-white/20 pb-5 pt-4 sm:pb-6 sm:pt-5 w-full">
          <AvatarCluster caption="Trusted by fleet operators and dealerships nationwide" />
        </div>
      </div>
    </section>
  );
}