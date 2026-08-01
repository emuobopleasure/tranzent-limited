export default function QuoteIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 600 400" fill="none" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <circle cx="130" cy="80" r="100" fill="#F7941D" fillOpacity="0.12" />

      {/* clipboard */}
      <rect x="230" y="90" width="160" height="220" rx="14" stroke="white" strokeOpacity="0.5" strokeWidth="4" fill="#0B1424" fillOpacity="0.2" />
      <rect x="278" y="78" width="64" height="26" rx="8" fill="#25AAE1" fillOpacity="0.8" />

      {/* checklist lines */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="252" y={140 + i * 40} width="18" height="18" rx="5" stroke="#1AB42E" strokeOpacity="0.8" strokeWidth="3" />
          {i < 3 && (
            <path
              d={`M256 ${149 + i * 40} l5 5 l9 -9`}
              stroke="#1AB42E"
              strokeOpacity="0.9"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          )}
          <line x1="284" y1={149 + i * 40} x2="360" y2={149 + i * 40} stroke="white" strokeOpacity={i === 3 ? 0.25 : 0.45} strokeWidth="5" strokeLinecap="round" />
        </g>
      ))}

      {/* pen */}
      <path
        d="M400 260 L460 200a14 14 0 0 1 20 20l-60 60-28 8Z"
        stroke="#F7941D"
        strokeOpacity="0.9"
        strokeWidth="4"
        fill="#F7941D"
        fillOpacity="0.25"
      />
      <line x1="446" y1="214" x2="466" y2="234" stroke="#F7941D" strokeOpacity="0.9" strokeWidth="4" />

      <line x1="0" y1="340" x2="600" y2="340" stroke="white" strokeOpacity="0.12" strokeWidth="2" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={i * 160 + 30} y="336" width="60" height="6" rx="3" fill="white" fillOpacity="0.08" />
      ))}
    </svg>
  );
}