import Link from "next/link";
import Reveal from "./Reveal";
import PillButton from "./PillButton";

export default function CTASection({
  eyebrow = "Ready to get moving?",
  title = "Let's make your next shipment simple.",
  copy = "Tell us what you need to move, and we'll take care of the rest. Expect a tailored route quote within one business day.",
}) {
  return (
    <section className="bg-paper py-24 sm:py-28">
      <div className="container-brand">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-ink-900 px-8 py-16 sm:px-16 sm:py-20">
            <svg
              className="pointer-events-none absolute -left-10 -bottom-10 h-56 w-56 text-primary/30"
              viewBox="0 0 500 500"
              fill="none"
              aria-hidden="true"
            >
              {/* Lower-Left Arrow */}
              <path
                d="M 125 210
       H 270
       A 20 20 0 0 1 290 230
       V 435
       A 40 40 0 0 1 210 435
       V 330
       A 20 20 0 0 0 190 310
       H 125
       A 40 40 0 0 1 125 210 Z"
                fill="currentColor"
              />

              {/* Upper-Right Arrow */}
              <path
                d="M 245 90
       H 390
       A 20 20 0 0 1 410 110
       V 315
       A 40 40 0 0 1 330 315
       V 210
       A 20 20 0 0 0 310 190
       H 245
       A 40 40 0 0 1 245 90 Z"
                fill="currentColor"
              />
            </svg>
            <div className="relative mx-auto max-w-2xl text-center">
              <span className="eyebrow justify-center text-secondary-300">
                {/* <span className="h-1.5 w-1.5 rounded-full bg-secondary" /> */}
                {eyebrow}
              </span>
              <h2 className="mt-5 font-display text-[30px] font-semibold leading-tight tracking-tightest text-white sm:text-[40px]">
                {title}
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-[15.5px] leading-relaxed text-white/75">
                {copy}
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <PillButton href="/quote" variant="primary">
                  Request a Quote
                </PillButton>
                <Link
                  href="/services"
                  className="btn-ghost-light group gap-4 py-1.5 pl-6 pr-1.5 hover:bg-primary-50 hover:text-ink-900 active:bg-primary-50 active:text-ink-900"
                >
                  See Our Services
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full ring-1 ring-inset ring-white/50 transition-all duration-300 ease-signature group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:ring-ink-900/50 group-active:ring-ink-900/50">
                    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" className="h-3.5 w-3.5">
                      <path d="M2 12 12 2M12 2H4M12 2v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
