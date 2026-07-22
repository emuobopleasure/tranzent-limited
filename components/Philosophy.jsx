import Reveal from "./Reveal";
import MediaFrame from "./MediaFrame";

const PILLARS = [
  {
    word: "Transit",
    definition: "The movement.",
    copy: "Every route planned, every checkpoint verified, every handover accounted for. Motion with a method behind it.",
  },
  {
    word: "Zen",
    definition: "The peace of mind.",
    copy: "No anxious follow-up calls, no guessing where things stand. Just the quiet confidence that it's being handled.",
  },
];

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 sm:py-32">
      <div className="container-brand">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <Reveal>
            <span className="eyebrow text-ink-500">
              <span className="h-[3.5px] w-6 rounded-full bg-accent" />
              The Tranzent Philosophy
            </span>
            <h2 className="mt-5 font-display text-[32px] font-semibold leading-[1.12] tracking-tightest text-ink-900 sm:text-[42px]">
              Transit, plus Zen.
              <br />
              Two words. One standard.
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink-500">
              Tranzent was built on a simple belief: logistics shouldn't cost you your peace of mind. The name fuses <em className="not-italic text-ink-700 font-medium">transit</em>, the discipline of movement, with <em className="not-italic text-ink-700 font-medium">zen</em>, the calm that comes from knowing it's in good hands. That fusion is our operating standard, not a marketing line.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.word} delay={i * 120}>
                <div className="relative flex h-full flex-col rounded-3xl border border-line bg-white p-8 shadow-card">
                  {/* <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink-300">
                    {pillar.definition}
                  </span> */}
                  <h3 className="mb-6 font-display text-3xl font-semibold text-ink-900">
                    {pillar.word}
                  </h3>
                  <p className="text-[14.5px] leading-relaxed text-ink-500">
                    {pillar.copy}
                  </p>
                </div>
              </Reveal>
            ))}

            {/* <Reveal delay={240} className="sm:col-span-2">
              <MediaFrame
                src="/images/truck-carrier.png"
                alt="A Tranzent car carrier on the road"
                className="h-56 rounded-3xl sm:h-64 lg:h-80 opacity-[1]"
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
                  <p className="max-w-lg font-display text-xl font-medium leading-snug text-white sm:text-2xl">
                    &ldquo;You feel the difference &mdash; driven by care, remembered
                    for the experience.&rdquo;
                  </p>
                  <span className="mt-4 block font-mono text-[11px] uppercase tracking-widest2 text-white/60">
                    Tranzent Operating Principle
                  </span>
                </div>
              </MediaFrame>
            </Reveal> */}
          </div>
        </div>
        <div className="pt-12 lg:pt-24">
          <Reveal delay={240} className="sm:col-span-2">
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
                <p className="max-w-lg font-display text-xl font-medium leading-snug text-white sm:text-2xl">
                  "You feel the difference, driven by care, remembered for the experience."
                </p>
                <span className="mt-4 block font-mono text-[11px] uppercase tracking-widest2 text-white/70">
                  Tranzent Operating Principle
                </span>
              </div>
            </MediaFrame>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
