const AVATARS = [
  { bg: "bg-primary-400", ring: "ring-ink-900" },
  { bg: "bg-secondary-400", ring: "ring-ink-900" },
  { bg: "bg-accent-400", ring: "ring-ink-900" },
];

function PersonGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="4" fill="white" fillOpacity="0.9" />
      <path d="M4 20c1.6-4 4.8-6 8-6s6.4 2 8 6" stroke="white" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function AvatarCluster({ caption = "Trusted by fleet operators and dealerships", variant = "light" }) {
  const textColor = variant === "light" ? "text-white/70" : "text-ink-500";
  return (
    <div className="flex items-center gap-3.5">
      <div className="flex -space-x-3">
        {AVATARS.map((a, i) => (
          <span
            key={i}
            className={`flex h-9 w-9 items-center justify-center rounded-full ring-2 ${a.ring} ${a.bg}`}
          >
            <PersonGlyph />
          </span>
        ))}
      </div>
      <p className={`max-w-[13rem] text-[13px] leading-snug ${textColor}`}>{caption}</p>
    </div>
  );
}
