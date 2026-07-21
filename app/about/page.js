import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import MediaFrame from "@/components/MediaFrame";
import CarCarrierIllustration from "@/components/CarCarrierIllustration";
import Philosophy from "@/components/Philosophy";

export const metadata = {
  title: "About",
  description:
    "Tranzent is a purpose-driven enterprise scaling into logistics, vehicle transportation, mobility, and technology, built on transit and zen.",
};

const VALUES = [
  {
    title: "Moral Integrity",
    copy: "We quote honestly, insure fully, and communicate delays before you have to ask. Trust is the product, not the by-product.",
    icon: (
      <path d="M12 2 4 5v6c0 5.2 3.4 9.9 8 11 4.6-1.1 8-5.8 8-11V5l-8-3Zm-1.2 13.2L7 11.4l1.4-1.4 2.4 2.4 5.4-5.4 1.4 1.4-6.8 6.8Z" />
    ),
  },
  {
    title: "Absolute Clarity",
    copy: "Every shipment comes with a plain-language quote, a real timeline, and status updates you don't need to decode.",
    icon: (
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Zm10 3.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7Z" />
    ),
  },
  {
    title: "Deliberate Movement",
    copy: "We plan routes and handling with the same care we'd want for our own vehicles — nothing rushed, nothing guessed.",
    icon: (
      <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Zm.75-15h-1.5v6l5.25 3.15.75-1.23-4.5-2.67V7Z" />
    ),
  },
  {
    title: "Built to Scale",
    copy: "From single vehicles to national fleet programs, our systems are engineered to grow without losing precision.",
    icon: (
      <path d="M3 10h6v9H3v-9Zm8-6h6v15h-6V4Zm8 9h2v6h-2v-6ZM4 21h4v-1H4v1Zm8 0h4v-1h-4v1Zm7 0h3v-1h-3v1Z" />
    ),
  },
];

const COMMITMENTS = [
  { label: "Insured, door to door", icon: (<path d="M12 2 4 5v6c0 5.2 3.4 9.9 8 11 4.6-1.1 8-5.8 8-11V5l-8-3Zm-1.2 13.2L7 11.4l1.4-1.4 2.4 2.4 5.4-5.4 1.4 1.4-6.8 6.8Z" />) },
  { label: "Condition-verified pickup & delivery", icon: (<path d="M20 6 9 17l-5-5" />) },
  { label: "Direct line to your driver", icon: (<path d="M6.6 10.8c1.3 2.6 3.4 4.7 6 6l2-2a1 1 0 0 1 1.1-.2 8.6 8.6 0 0 0 3 .5 1 1 0 0 1 1 1V19a1 1 0 0 1-1 1A16 16 0 0 1 3 4a1 1 0 0 1 1-1h2.9a1 1 0 0 1 1 1c0 1 .2 2 .5 3a1 1 0 0 1-.2 1.1l-1.6 1.7Z" />) },
  { label: "One coordinator, start to finish", icon: (<path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Zm.75-15h-1.5v6l5.25 3.15.75-1.23-4.5-2.67V7Z" />) },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="A logistics company built the way a promise should be kept."
        copy="Tranzent began with a straightforward frustration: logistics that made people anxious instead of confident. We built the opposite and we're scaling it across mobility, vehicle transportation, and technology."
      />

      {/* <section className="bg-paper py-24 sm:py-28"> */}
      <Philosophy />
      {/* </section> */}
      <section className="bg-paper py-24 sm:py-28">
        <div className="container-brand grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <span className="eyebrow text-ink-500">
              <span className="h-[3px] w-6 rounded-full bg-primary" />
              Our Story
            </span>
            <h2 className="mt-5 font-display text-[30px] font-semibold leading-tight tracking-tightest text-ink-900 sm:text-[36px]">
              From a single carrier route to a national standard.
            </h2>
            <div className="mt-6 flex flex-col gap-5 text-[15.5px] leading-relaxed text-ink-500">
              <p>
                Tranzent started as a focused vehicle transportation operation,
                moving cars between cities for dealers who needed a partner
                they didn't have to babysit. What set us apart wasn't
                speed alone. It was the discipline behind it: documented
                handoffs, insured coverage as standard, and a team that
                treated every vehicle like it belonged to someone who cared.
              </p>
              <p>
                That discipline is now the foundation of a larger enterprise.
                Tranzent is scaling deliberately into fleet logistics,
                mobility consulting, and the technology that supports both.
                Always guided by the same fusion the name describes:{" "}
                <span className="font-medium text-ink-700">transit</span>,
                the movement, and{" "}
                <span className="font-medium text-ink-700">zen</span>, the
                peace of mind that movement shouldn't cost you.
              </p>
              <p>
                We're not chasing volume for its own sake. Every new
                lane, every new service line, is added only once we can
                deliver it to the same standard as the first vehicle we ever
                moved.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-line bg-white p-8 shadow-card sm:p-9">
              {/* <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink-300">
                What you can count on
              </p> */}
              <ul className="flex flex-col gap-5">
                {COMMITMENTS.map((item) => (
                  <li key={item.label} className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        {item.icon}
                      </svg>
                    </span>
                    <span className="text-[14.5px] font-medium text-ink-800">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5 rounded-3xl bg-ink-900 p-7">
              <p className="font-display text-lg font-medium leading-snug text-white">
                &ldquo;Driven by care. Remembered for the experience.&rdquo;
              </p>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-widest2 text-white/60">
                Tranzent, since day one
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper pb-24 sm:pb-28">
        <div className="container-brand">
          <Reveal>
            <MediaFrame
              src="/images/about/haulage-service.png"
              alt="A Tranzent-coordinated car carrier loaded and ready for the road"
              className="h-[280px] rounded-[28px] shadow-card sm:h-[380px] md:h-auto"
              overlay="bottom"
              fallback={<CarCarrierIllustration className="h-full w-full" />}
            >
              <div className="absolute bottom-0 left-0 p-7 sm:p-9">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-mono text-[10.5px] uppercase tracking-widest2 text-white backdrop-blur-sm">
                  On the Road
                </span>
                <p className="mt-3 max-w-sm font-display text-lg font-semibold text-white sm:text-xl">
                  Every load documented, strapped, and monitored the same way, every time.
                </p>
              </div>
            </MediaFrame>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-900 py-24 sm:py-28">
        <div className="container-brand">
          <Reveal>
            <span className="eyebrow text-secondary-300">
              <span className="h-[3px] w-6 rounded-full bg-secondary" />
              What We Stand On
            </span>
            <h2 className="mt-5 max-w-xl font-display text-[30px] font-semibold leading-tight tracking-tightest text-white sm:text-[38px]">
              Four values, non-negotiable at every scale.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 90}>
                <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-400 ease-signature hover:-translate-y-1.5 hover:border-white/25">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-primary-300 transition-transform duration-400 ease-signature group-hover:scale-110">
                    <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      {value.icon}
                    </svg>
                  </span>
                  <h3 className="mt-6 font-display text-lg font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-white/50">
                    {value.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 sm:py-28">
        <div className="container-brand">
          <Reveal>
            <div className="grid grid-cols-1 items-center gap-12 rounded-[32px] border border-line bg-white p-10 shadow-card sm:p-14 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="eyebrow text-ink-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Where We're Headed
                </span>
                <h2 className="mt-5 max-w-lg font-display text-[26px] font-semibold leading-tight tracking-tightest text-ink-900 sm:text-[30px]">
                  Beyond delivery — into mobility and logistics technology.
                </h2>
                <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink-500">
                  Vehicle transportation is our foundation, not our ceiling.
                  We're building toward a full mobility and logistics
                  ecosystem — fleet software, route intelligence, and
                  consulting — engineered by the same team that still answers
                  the phone when a car is on the road.
                </p>
              </div>
              <div className="flex shrink-0 items-center justify-center">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" aria-hidden="true" className="text-secondary">
                  <path d="M20 100h20v-20h20v-20h20v-20h20" stroke="currentColor" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Join the standard"
        title="Move with a team that treats it like their own."
      />
    </>
  );
}
