import Reveal from "./Reveal";

const CARDS = [
  {
    title: "Fully Insured Assets",
    copy:
      "Every vehicle and shipment is covered end-to-end, with transparent policy documentation shared before pickup — not after something goes wrong.",
    tag: "Coverage",
    span: "lg:col-span-3 lg:row-span-2",
    accent: "primary",
    icon: (
      <path d="M12 3 4 6.5V11c0 5 3.4 9.2 8 10.4 4.6-1.2 8-5.4 8-10.4V6.5L12 3Zm0 4 2.3 4.7 5.2.7-3.75 3.6.9 5.15L12 18.7l-4.65 2.45.9-5.15L4.5 12.4l5.2-.7L12 7Z" />
    ),
  },
  {
    title: "Real-Time Transparency",
    copy:
      "Track every movement with live status updates and checkpoint verification, visible to you the moment it happens.",
    tag: "Visibility",
    span: "lg:col-span-3",
    accent: "secondary",
    icon: (
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Zm10 3.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7Z" />
    ),
  },
  {
    title: "On-Time Guarantee",
    copy:
      "Proactive routing and constant checkpoint updates, backed by a promise to communicate before you're ever asked to.",
    tag: "Reliability",
    span: "lg:col-span-2",
    accent: "accent",
    icon: (
      <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Zm.75-15h-1.5v6l5.25 3.15.75-1.23-4.5-2.67V7Z" />
    ),
  },
  {
    title: "Vetted Handling Crews",
    copy:
      "Trained, background-checked operators at every checkpoint — because peace of mind starts with who's behind the wheel.",
    tag: "Integrity",
    span: "lg:col-span-3",
    accent: "primary",
    icon: (
      <path d="M12 2 4 5v6c0 5.2 3.4 9.9 8 11 4.6-1.1 8-5.8 8-11V5l-8-3Zm-1.2 13.2L7 11.4l1.4-1.4 2.4 2.4 5.4-5.4 1.4 1.4-6.8 6.8Z" />
    ),
  },
];

const ACCENTS = {
  primary: { bg: "bg-primary-50", text: "text-primary-600", ring: "group-hover:border-primary-300" },
  secondary: { bg: "bg-secondary-50", text: "text-secondary-600", ring: "group-hover:border-secondary-300" },
  accent: { bg: "bg-accent-50", text: "text-accent-600", ring: "group-hover:border-accent-300" },
};

export default function TrustMatrix() {
  return (
    <section id="the-standard" className="standard-section scroll-mt-24 bg-paper py-24 sm:py-28">
      <div className="container-brand">
        <Reveal>
          {/* <span className="eyebrow text-ink-500">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            The Standard
          </span> */}
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
                  <div>
                    <div className="flex items-center justify-between">
                      {/* <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${palette.bg} ${palette.text} transition-transform duration-400 ease-signature group-hover:scale-110 group-hover:-rotate-6`}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          {card.icon}
                        </svg>
                      </span> */}
                      <span className="font-mono text-[10.5px] uppercase tracking-widest2 text-ink-300">
                        {card.tag}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold text-ink-900">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                      {card.copy}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
