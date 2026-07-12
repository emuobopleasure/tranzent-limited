export default function PageHero({ eyebrow, title, copy }) {
  return (
    <section className="relative overflow-hidden bg-ink-900 pb-20 pt-[152px] sm:pb-24 sm:pt-[172px]">
      <svg
        className="pointer-events-none absolute -right-10 top-16 h-64 w-64 text-secondary/20 sm:right-4"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <path d="M20 170h35v-35h35v-35h35v-35h35" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="container-brand relative">
        <span className="eyebrow text-primary-300">
          <span className="h-[3px] w-6 rounded-full bg-secondary" />
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-2xl font-display text-[38px] font-semibold leading-[1.08] tracking-tightest text-white sm:text-[50px]">
          {title}
        </h1>
        {copy && (
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/60 sm:text-lg">
            {copy}
          </p>
        )}
      </div>
    </section>
  );
}
