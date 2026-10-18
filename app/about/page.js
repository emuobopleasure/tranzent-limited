import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import MediaFrame from "@/components/MediaFrame";
import CarCarrierIllustration from "@/components/CarCarrierIllustration";
import Philosophy from "@/components/Philosophy";
import { SERVICES } from "@/lib/services";

export const metadata = {
  title: "About",
  description:
    "Tranzent Limited is a cargo and freight company specialising in professional, secure car logistics, built on transit and zen.",
};

/* ---------- data ---------- */

const FACTS = [
  { label: "Company", value: "Tranzent Limited" },
  { label: "What we do", value: "Cargo & freight · Car logistics" },
  { label: "Our promise", value: "Professional & secure car delivery" },
  { label: "Our standard", value: "Insured, documented and tracked, every time" },
];

const COMMITMENTS = [
  {
    label: "Insured, door to door",
    icon: <path d="M12 3.5 5 6v5.5c0 4.8 3 8.9 7 10 4-1.1 7-5.2 7-10V6l-7-2.5Zm-2.8 8.9 2 2 4.2-4.4" />,
  },
  {
    label: "Condition-verified pickup & delivery",
    icon: (
      <>
        <path d="M8 4.5h8a1 1 0 0 1 1 1V19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5.5a1 1 0 0 1 1-1Z" />
        <path d="M9.5 4.5V3.8A1.3 1.3 0 0 1 10.8 2.5h2.4a1.3 1.3 0 0 1 1.3 1.3v.7" />
        <path d="M9.5 12.5l1.8 1.8 3.2-3.6" />
      </>
    ),
  },
  {
    label: "Direct line to your driver",
    icon: (
      <path d="M7.5 3.5h2.2l1 4-2 1.5a11 11 0 0 0 5.3 5.3l1.5-2 4 1v2.2a1.5 1.5 0 0 1-1.6 1.5A15.5 15.5 0 0 1 6 5.1a1.5 1.5 0 0 1 1.5-1.6Z" />
    ),
  },
  {
    label: "One coordinator, start to finish",
    icon: (
      <>
        <path d="M6 21V4" />
        <path d="M6 4.5h11l-2.3 3.3L17 11H6" />
      </>
    ),
  },
];

const PROCESS = [
  { step: "Inquiry", copy: "Tell us what needs to move and when. One coordinator owns your request from here." },
  { step: "Routed quote", copy: "We assess distance, handling and insurance needs, then respond within one business day." },
  { step: "Scheduled pickup", copy: "A vetted crew arrives at the agreed window with a documented condition report." },
  { step: "Tracked transit", copy: "Checkpoint updates keep you informed from origin to destination." },
  { step: "Verified handover", copy: "Delivery is confirmed against the original condition report and signed off on site." },
];

const VALUES = [
  {
    title: "Moral Integrity",
    copy: "We quote honestly, insure fully, and communicate delays before you have to ask. Trust is the product, not the by-product.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M15 9l-2 5-5 2 2-5 5-2Z" />
      </>
    ),
  },
  {
    title: "Absolute Clarity",
    copy: "Every shipment comes with a plain-language quote, a real timeline, and status updates you don't need to decode.",
    icon: (
      <>
        <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z" />
        <circle cx="12" cy="12" r="2.6" />
      </>
    ),
  },
  {
    title: "Deliberate Movement",
    copy: "We plan routes and handling with the same care we'd want for our own vehicles. Nothing rushed, nothing guessed.",
    icon: (
      <>
        <path d="M4 17c4-1 4-10 8-10s4 9 8 10" strokeDasharray="0.5 3.8" />
        <circle cx="4" cy="17" r="1.3" />
        <circle cx="20" cy="17" r="1.3" />
      </>
    ),
  },
  {
    title: "Built to Scale",
    copy: "From single vehicles to national fleet programs, our systems are engineered to grow without losing precision.",
    icon: (
      <>
        <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" />
        <path d="M3 12l9 4.5 9-4.5" />
        <path d="M3 16.5l9 4.5 9-4.5" />
      </>
    ),
  },
];

const ROADMAP = [
  {
    stage: "Today",
    title: "Vehicle transport & haulage",
    copy: "Open and enclosed haulage, driven transport, recovery and towing, run to a documented, insured standard.",
  },
  {
    stage: "Expanding",
    title: "Fleet & dealer logistics",
    copy: "Multi-vehicle programmes for dealerships, rental fleets and corporates, with one account contact and consolidated reporting.",
  },
  {
    stage: "Building",
    title: "Mobility & logistics technology",
    copy: "Route intelligence, fleet software and consulting, engineered by the same team that still answers the phone when a car is on the road.",
  },
];

/* ---------- small pieces ---------- */

function Icon({ children, className = "h-[22px] w-[22px]" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

function Eyebrow({ children, tone = "light", bar = "bg-primary" }) {
  return (
    <span className={`eyebrow ${tone === "dark" ? "text-secondary-300" : "text-ink-500"}`}>
      <span className={`h-[3px] w-6 rounded-full ${bar}`} />
      {children}
    </span>
  );
}

/* ---------- page ---------- */

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Tranzent"
        title="Built on trust. Driven by reliability."
        copy="Tranzent was founded to make vehicle transport and logistics simpler, more reliable, and easier to trust. Today, we help individuals and businesses move vehicles and freight with confidence while building smarter mobility solutions for the future."
      />

      {/* 1 · Who we are */}
      <section className="bg-paper py-24 sm:py-28">
        <div className="container-brand grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Who we are</Eyebrow>
              <h2 className="mt-5 font-display text-[28px] font-semibold leading-[1.15] tracking-tightest text-ink-900 sm:text-[40px]">
                A cargo and freight company that treats every vehicle like it belongs to someone who cares.
              </h2>
              <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-ink-500 sm:text-[17px]">
                Tranzent Limited specialises in car logistics: moving vehicles safely between cities, with the paperwork, insurance and communication that make a handover feel like a promise kept.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <dl className="border-b border-line">
                {FACTS.map((f) => (
                  <div key={f.label} className="grid grid-cols-[110px_1fr] gap-4 border-t border-line py-4 sm:grid-cols-[130px_1fr]">
                    <dt className="font-mono text-[11px] uppercase tracking-widest2 text-ink-400">{f.label}</dt>
                    <dd className="text-[15px] font-medium text-ink-800">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2 · Name meaning (existing component) */}
      <Philosophy />

      {/* 3 · Story — image-led */}
      <section className="bg-paper py-24 sm:py-28">
        <div className="container-brand grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <MediaFrame
                src="/images/about/our-story.png"
                alt="Tranzent team and driver completing a car handover with a dealer and owner at a dealership"
                className="aspect-[4/5] rounded-[28px] shadow-lift"
                overlay="bottom"
                fallback={<CarCarrierIllustration className="h-full w-full" />}
              >
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <p className="font-display text-[17px] font-medium leading-snug text-white sm:text-lg">
                    &ldquo;From first pickup to final handover, a promise kept..&rdquo;
                  </p>
                </div>
              </MediaFrame>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <Eyebrow>Our Story</Eyebrow>
              <h2 className="mt-5 font-display text-[28px] font-semibold leading-tight tracking-tightest text-ink-900 sm:text-[38px]">
                From a single carrier route to a national standard.
              </h2>
              <div className="mt-6 flex flex-col gap-5 text-[15.5px] leading-relaxed text-ink-500 sm:text-[16.5px]">
                <p>
                  Tranzent started as a focused vehicle transportation operation, moving cars between cities for dealers who needed a partner they didn&apos;t have to babysit. What set us apart wasn&apos;t speed alone. It was the discipline behind it: documented handoffs, insured coverage as standard, and a team that treated every vehicle like it belonged to someone who cared.
                </p>
                <p>
                  That discipline is now the foundation of a larger enterprise, scaling deliberately into fleet logistics, mobility consulting, and the technology that supports both. We&apos;re not chasing volume for its own sake. Every new lane, every new service line, is added only once we can deliver it to the same standard as the first vehicle we ever moved.
                </p>
              </div>

              <ul className="mt-10 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                {COMMITMENTS.map((item) => (
                  <li key={item.label} className="flex items-center gap-4 border-t border-line py-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink-900/10 text-primary-600">
                      <Icon>{item.icon}</Icon>
                    </span>
                    <span className="text-[14.5px] font-medium leading-snug text-ink-800">{item.label}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4 · Full-width image */}
      <section className="bg-paper pb-24 sm:pb-28">
        <div className="container-brand">
          <Reveal>
            <MediaFrame
              src="/images/about/haulage-service.png"
              alt="A Tranzent-coordinated car carrier loaded and ready for the road"
              className="h-[280px] rounded-[28px] shadow-card sm:h-[380px] md:h-[520px] lg:h-[600px]"
              overlay="bottom"
              fallback={<CarCarrierIllustration className="h-full w-full" />}
            >
              <div className="absolute bottom-0 left-0 p-7 sm:p-9">
                {/* <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-mono text-[10.5px] uppercase tracking-widest2 text-white backdrop-blur-sm">
                  On the Road
                </span> */}
                <p className="mt-3 max-w-sm font-display text-lg font-semibold text-white sm:text-xl">
                  Every load documented, strapped, and monitored the same way, every time.
                </p>
              </div>
            </MediaFrame>
          </Reveal>
        </div>
      </section>

      {/* 5 · What we do — synced with lib/services */}
      <section className="bg-white py-24 sm:py-28">
        <div className="container-brand grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <Eyebrow bar="bg-accent">What we do</Eyebrow>
                <h2 className="mt-5 font-display text-[28px] font-semibold leading-tight tracking-tightest text-ink-900 sm:text-[38px]">
                  Specialised transport, matched to what you&apos;re moving.
                </h2>
                <MediaFrame
                  src="/images/about/car-carrier-loading-operation.png"
                  alt="Tranzent crew loading an SUV onto a car carrier at a vehicle yard"
                  className="mt-8 aspect-[16/10] rounded-2xl shadow-card"
                  overlay="none"
                  fallback={<CarCarrierIllustration className="h-full w-full" />}
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <ul className="border-b border-line">
                {SERVICES.map((s, i) => (
                  <li key={s.id} className="border-t border-line">
                    <Link
                      href={`/services#${s.id}`}
                      className="group flex items-start gap-5 py-6 transition-colors duration-300 sm:gap-7 sm:py-7"
                    >
                      <span className="pt-1 font-mono text-[12px] text-ink-400">0{i + 1}</span>
                      <span className="flex-1">
                        <span className="block font-display text-[19px] font-semibold text-ink-900 transition-colors duration-300 group-hover:text-primary-600 sm:text-[21px]">
                          {s.title}
                        </span>
                        <span className="mt-1.5 block max-w-md text-[14.5px] leading-relaxed text-ink-500">{s.short}</span>
                      </span>
                      <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-1 ring-inset ring-ink-900/15 text-ink-700 transition-all duration-300 ease-signature group-hover:bg-primary group-hover:text-white group-hover:ring-primary">
                        <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-300 ease-signature group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                          <path d="M2 12 12 2M12 2H4M12 2v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6 · How we work */}
      <section className="bg-paper py-24 sm:py-28">
        <div className="container-brand">
          <Reveal>
            <Eyebrow bar="bg-secondary">How we work</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-[28px] font-semibold leading-tight tracking-tightest text-ink-900 sm:text-[38px]">
              One process, the same way every time.
            </h2>
          </Reveal>

          <ol className="relative mt-14 grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6">
            {/* connecting line (desktop) */}
            <span aria-hidden="true" className="absolute left-0 right-0 top-[19px] hidden h-px bg-line md:block" />
            {PROCESS.map((p, i) => (
              <li key={p.step} className="relative md:pr-4">
                <Reveal delay={i * 80}>
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-ink-900 font-mono text-[12px] text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 font-display text-[17px] font-semibold text-ink-900">{p.step}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-500">{p.copy}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7 · Values — image + open list on dark */}
      <section className="bg-ink-900 py-24 sm:py-28">
        <div className="container-brand grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow tone="dark" bar="bg-secondary">What We Stand On</Eyebrow>
              <h2 className="mt-5 font-display text-[28px] font-semibold leading-tight tracking-tightest text-white sm:text-[38px]">
                Four values, non-negotiable at every scale.
              </h2>
              <MediaFrame
                src="/images/about/car-inspection.png"
                alt="Tranzent coordinator and car owner reviewing a vehicle condition report"
                className="mt-10 aspect-[4/3] rounded-2xl"
                overlay="none"
                fallback={<CarCarrierIllustration className="h-full w-full" />}
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} delay={i * 90}>
                  <div className="group border-t border-white/15 pt-7">
                    <div className="flex items-center justify-between">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 text-primary-300 transition-colors duration-300 ease-signature group-hover:border-primary-300/60">
                        <Icon>{v.icon}</Icon>
                      </span>
                      {/* <span className="font-mono text-[11px] tracking-widest2 text-white/40">0{i + 1}</span> */}
                    </div>
                    <h3 className="mt-6 font-display text-[19px] font-semibold text-white">{v.title}</h3>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-white/60">{v.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8 · Where we're headed */}
      <section className="bg-paper py-24 sm:py-28">
        <div className="container-brand">
          <Reveal>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <Eyebrow bar="bg-accent">Where we&apos;re headed</Eyebrow>
                <h2 className="mt-5 max-w-xl font-display text-[28px] font-semibold leading-tight tracking-tightest text-ink-900 sm:text-[38px]">
                  Beyond delivery, into mobility and logistics technology.
                </h2>
              </div>
              <p className="max-w-md text-[15.5px] leading-relaxed text-ink-500">
                Vehicle transportation is our foundation, not our ceiling. We grow only as fast as we can keep the standard.
              </p>
            </div>
          </Reveal>

          <ol className="relative mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            <span aria-hidden="true" className="absolute left-0 right-0 top-[7px] hidden h-px bg-line md:block" />
            {ROADMAP.map((r, i) => (
              <li key={r.stage} className="relative">
                <Reveal delay={i * 100}>
                  <span className={`relative block h-[15px] w-[15px] rounded-full ring-4 ring-paper ${i === 0 ? "bg-primary" : i === 1 ? "bg-secondary" : "bg-accent"}`} />
                  <p className="mt-6 font-mono text-[11px] uppercase tracking-widest2 text-ink-300">{r.stage}</p>
                  <h3 className="mt-2 font-display text-[20px] font-semibold text-ink-900">{r.title}</h3>
                  <p className="mt-3 max-w-sm text-[14.5px] leading-relaxed text-ink-500">{r.copy}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        eyebrow="Join the standard"
        title="Move with a team that treats it like their own."
      />
    </>
  );
}