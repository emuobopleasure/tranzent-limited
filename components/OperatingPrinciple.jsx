import Reveal from "./Reveal";
import MediaFrame from "./MediaFrame";

export default function OperatingPrinciple() {
  return (
    <section className="bg-paper">
      <div className="container-brand">
        <Reveal>
          <MediaFrame
            src="/images/truck-carrier.png"
            alt="A Tranzent car carrier on the road"
            className="h-[280px] rounded-[28px] shadow-card sm:h-[380px] md:h-[520px] lg:h-[620px]"
            overlay="bottom"
            fallback={
              <svg
                className="h-24 w-24 text-secondary/30"
                viewBox="0 0 100 100"
                fill="none"
                aria-hidden="true"
              >
                <path d="M10 85h18v-18h18v-18h18v-18h18" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          >
            <div className="flex h-full flex-col justify-end p-8 sm:p-10">
              <p className="max-w-lg font-display text-lg font-medium leading-snug text-white sm:text-2xl">
                &ldquo;You feel the difference, driven by care, remembered for the experience.&rdquo;
              </p>
              <span className="mt-4 block font-mono text-[11px] uppercase tracking-widest2 text-white/80">
                Tranzent Operating Principle
              </span>
            </div>
          </MediaFrame>
        </Reveal>
      </div>
    </section>
  );
}