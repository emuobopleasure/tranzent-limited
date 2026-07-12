const MARK = (
  <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <circle
      cx="27"
      cy="33"
      r="21"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeDasharray="3.2 3.6"
      strokeLinecap="round"
    />
    <path
      d="M27 16v10M20 26h14"
      stroke="#25AAE1"
      strokeWidth="7"
      strokeLinecap="square"
    />
    <path
      d="M27 26v18a4 4 0 0 0 8 0"
      stroke="#25AAE1"
      strokeWidth="7"
      strokeLinecap="square"
      fill="none"
    />
    <path
      d="M40 14h11v11"
      stroke="#1AB42E"
      strokeWidth="6.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M33 21h11v11"
      stroke="#1AB42E"
      strokeWidth="6.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export default function Logo({ variant = "dark", withTagline = false, className = "" }) {
  const textColor = variant === "light" ? "text-white" : "text-ink-900";
  const tagColor = variant === "light" ? "text-white/55" : "text-ink-400";
  const markColor = variant === "light" ? "text-white/70" : "text-ink-900/70";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className={`relative block h-8 w-8 sm:h-9 sm:w-9 shrink-0 ${markColor}`}>
        {MARK}
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[19px] sm:text-[21px] font-bold tracking-tightest ${textColor}`}>
          Tranzent
        </span>
        {withTagline && (
          <span className={`mt-0.5 font-mono text-[9px] uppercase tracking-widest2 ${tagColor}`}>
            Beyond delivery
          </span>
        )}
      </span>
    </span>
  );
}
