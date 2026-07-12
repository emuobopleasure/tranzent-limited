function CarSilhouette({ x, y, scale = 1, color = "white", opacity = 0.5 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} stroke={color} strokeOpacity={opacity} strokeWidth="2.5" fill="none" strokeLinejoin="round" strokeLinecap="round">
      <path d="M0 34 H92 a6 6 0 0 0 6-6 v-6 H-6 v6 a6 6 0 0 0 6 6Z" />
      <path d="M6 22 L18 4 h56 l12 18" />
      <line x1="34" y1="4" x2="34" y2="22" />
      <line x1="58" y1="4" x2="58" y2="22" />
      <circle cx="18" cy="34" r="7" />
      <circle cx="74" cy="34" r="7" />
    </g>
  );
}

export default function CarCarrierIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 1000 520" fill="none" className={className} preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      {/* sky glow */}
      <circle cx="860" cy="120" r="140" fill="#F7941D" fillOpacity="0.12" />
      <circle cx="860" cy="120" r="70" fill="#F7941D" fillOpacity="0.18" />

      {/* road */}
      <line x1="0" y1="470" x2="1000" y2="470" stroke="white" strokeOpacity="0.14" strokeWidth="2" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <rect key={i} x={i * 110 + 10} y="466" width="46" height="6" rx="3" fill="white" fillOpacity="0.1" />
      ))}

      {/* trailer frame */}
      <rect x="330" y="150" width="600" height="270" rx="10" stroke="white" strokeOpacity="0.16" strokeWidth="2.5" />
      <line x1="330" y1="290" x2="930" y2="290" stroke="white" strokeOpacity="0.14" strokeWidth="2" />
      {/* ramp supports */}
      <line x1="420" y1="150" x2="450" y2="290" stroke="white" strokeOpacity="0.14" strokeWidth="2" />
      <line x1="820" y1="150" x2="850" y2="290" stroke="white" strokeOpacity="0.14" strokeWidth="2" />

      {/* upper deck cars */}
      <CarSilhouette x="400" y="175" scale="1.65" color="#25AAE1" opacity="0.6" />
      <CarSilhouette x="640" y="175" scale="1.65" color="white" opacity="0.4" />

      {/* lower deck cars */}
      <CarSilhouette x="470" y="325" scale="1.5" color="white" opacity="0.35" />
      <CarSilhouette x="700" y="325" scale="1.5" color="#1AB42E" opacity="0.5" />

      {/* cab */}
      <path
        d="M120 420V300c0-10 6-19 15-23l100-40a26 26 0 0 1 10-2h95c15 0 27 12 27 27v158"
        stroke="white"
        strokeOpacity="0.5"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M235 258h72c8 0 14 6 14 14v46h-114l8-42c2-11 10-18 20-18Z"
        stroke="#25AAE1"
        strokeOpacity="0.55"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="150" cy="378" r="9" fill="#F7941D" fillOpacity="0.75" />

      {/* chassis + wheels */}
      <line x1="120" y1="420" x2="930" y2="420" stroke="white" strokeOpacity="0.22" strokeWidth="3" />
      {[195, 470, 545, 800, 875].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="452" r="26" stroke="white" strokeOpacity="0.28" strokeWidth="4" />
          <circle cx={cx} cy="452" r="8" fill="white" fillOpacity="0.22" />
        </g>
      ))}

      {/* motion streaks */}
      <line x1="0" y1="400" x2="70" y2="400" stroke="#1AB42E" strokeOpacity="0.45" strokeWidth="3" strokeLinecap="round" />
      <line x1="0" y1="380" x2="40" y2="380" stroke="#1AB42E" strokeOpacity="0.28" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
