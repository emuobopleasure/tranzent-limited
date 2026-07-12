export default function TruckMark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 920 420"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Trailer */}
      <rect x="300" y="90" width="520" height="200" rx="14" stroke="white" strokeOpacity="0.14" strokeWidth="2.5" />
      <line x1="300" y1="150" x2="820" y2="150" stroke="white" strokeOpacity="0.1" strokeWidth="1.5" />
      <line x1="420" y1="90" x2="420" y2="290" stroke="white" strokeOpacity="0.1" strokeWidth="1.5" />
      <line x1="600" y1="90" x2="600" y2="290" stroke="white" strokeOpacity="0.1" strokeWidth="1.5" />

      {/* Cab */}
      <path
        d="M60 290V190c0-8 5-15 12-18l70-28a20 20 0 0 1 8-1.6h72c11 0 20 9 20 20v128"
        stroke="#25AAE1"
        strokeOpacity="0.55"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M145 145h58c6 0 11 5 11 11v37h-90l6-33c1.6-8.7 8.7-15 15-15Z"
        stroke="#25AAE1"
        strokeOpacity="0.4"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Headlight */}
      <circle cx="70" cy="255" r="7" fill="#F7941D" fillOpacity="0.7" />
      {/* Chassis line */}
      <line x1="60" y1="290" x2="820" y2="290" stroke="white" strokeOpacity="0.18" strokeWidth="2.5" />

      {/* Wheels */}
      <circle cx="120" cy="320" r="30" stroke="white" strokeOpacity="0.25" strokeWidth="4" />
      <circle cx="120" cy="320" r="9" fill="white" fillOpacity="0.2" />
      <circle cx="360" cy="320" r="30" stroke="white" strokeOpacity="0.25" strokeWidth="4" />
      <circle cx="360" cy="320" r="9" fill="white" fillOpacity="0.2" />
      <circle cx="440" cy="320" r="30" stroke="white" strokeOpacity="0.25" strokeWidth="4" />
      <circle cx="440" cy="320" r="9" fill="white" fillOpacity="0.2" />
      <circle cx="680" cy="320" r="30" stroke="white" strokeOpacity="0.25" strokeWidth="4" />
      <circle cx="680" cy="320" r="9" fill="white" fillOpacity="0.2" />
      <circle cx="760" cy="320" r="30" stroke="white" strokeOpacity="0.25" strokeWidth="4" />
      <circle cx="760" cy="320" r="9" fill="white" fillOpacity="0.2" />

      {/* Motion lines */}
      <line x1="0" y1="330" x2="45" y2="330" stroke="#1AB42E" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round" />
      <line x1="0" y1="350" x2="30" y2="350" stroke="#1AB42E" strokeOpacity="0.3" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
