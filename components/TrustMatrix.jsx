import Reveal from "./Reveal";

const ICONS = {
  insured: (
    <path
      d="M12 3.5 5 6v5.5c0 4.8 3 8.9 7 10 4-1.1 7-5.2 7-10V6l-7-2.5Zm-2.8 8.9 2 2 4.2-4.4"
      strokeLinejoin="round"
    />
  ),
  tracking: (
    <>
      <path d="M9 21s-5-4.9-5-9.5A5 5 0 0 1 9 6.5a5 5 0 0 1 5 5c0 4.6-5 9.5-5 9.5Z" />
      <circle cx="9" cy="11.2" r="1.6" />
      <path d="M16.5 8.3a5 5 0 0 1 0 6.4M19 6a8.2 8.2 0 0 1 0 11" />
    </>
  ),
  onTime: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v5l3.2 1.8" />
    </>
  ),
  vetted: (
    <>
      <path d="M4.2 16.5a7.8 7.8 0 0 1 15.6 0" />
      <path d="M3 16.5h18" />
      <path d="M12 6.2v2.6" />
    </>
  ),
};

const CARDS = [
  {
    title: "Fully Insured Assets",
    copy:
      "Every vehicle and shipment is covered end-to-end, with transparent policy documentation shared before pickup, not after something goes wrong.",
    tag: "Coverage",
    span: "lg:col-span-3 lg:row-span-2",
    accent: "primary",
    icon: ICONS.insured
  },
  {
    title: "Real-Time Transparency",
    copy:
      "Track every movement with live status updates and checkpoint verification, visible to you the moment it happens.",
    tag: "Visibility",
    span: "lg:col-span-3",
    accent: "secondary",
    icon: ICONS.tracking
  },
  {
    title: "On-Time Guarantee",
    copy:
      "Proactive routing and constant checkpoint updates, backed by a promise to communicate before you're ever asked to.",
    tag: "Reliability",
    span: "lg:col-span-2",
    accent: "accent",
    icon: ICONS.onTime
  },
  {
    title: "Vetted Handling Crews",
    copy:
      "Trained, background-checked operators at every checkpoint, because peace of mind starts with who's behind the wheel.",
    tag: "Integrity",
    span: "lg:col-span-3",
    accent: "primary",
    icon: ICONS.vetted
  },
];

const ACCENTS = {
  primary: { border: "border-primary-500", text: "text-primary-600", ring: "group-hover:border-primary-300" },
  secondary: { border: "border-secondary-500", text: "text-secondary-600", ring: "group-hover:border-secondary-300" },
  accent: { border: "border-accent-500", text: "text-accent-600", ring: "group-hover:border-accent-300" },
};

export default function TrustMatrix() {
  return (
    <section id="the-standard" className="standard-section scroll-mt-24 bg-paper py-24 sm:py-28">
      <div className="container-brand">
        <Reveal>
          <h2 className="mt-5 max-w-xl font-display text-[32px] font-semibold leading-tight tracking-tightest sm:text-[40px]">
            The four commitments every shipment is built on.
          </h2>
        </Reveal>

        {/* CHANGED: lg:grid-cols-2 ensures a perfect 2x2 grid configuration */}
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {CARDS.map((card, i) => {
            const palette = ACCENTS[card.accent];
            return (
              /* REMOVED: card.span to keep all grid tracks completely equal. Added h-full */
              <Reveal key={card.title} delay={i * 80} className="h-full">
                <article
                  /* REMOVED: lg:w-fit (changed to w-full or left to stretch naturally) to ensure equal width */
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-line bg-white p-8 shadow-card transition-all duration-400 ease-signature hover:-translate-y-1.5 hover:shadow-lift w-full ${palette.ring}`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-14 w-14 items-center justify-center rounded-full border ${palette.border} ${palette.text} transition-all duration-400 ease-signature group-hover:-translate-y-1 group-hover:border-current`}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        {card.icon}
                      </svg>
                    </span>
                  </div>
                  <h3 className="mb-6 mt-6 font-display text-xl font-semibold text-ink-900">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                    {card.copy}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
