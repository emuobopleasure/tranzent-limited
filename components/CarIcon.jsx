export default function CarIcon({ className = "", color = "#25AAE1" }) {
  return (
    <svg viewBox="0 0 40 22" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 15.5V12l3-6.2A3 3 0 0 1 9.7 4h12.6a3 3 0 0 1 2.7 1.7L28 12v3.5"
        fill={color}
        stroke={color}
      />
      <path
        d="M4 15.5V12l3-6.2A3 3 0 0 1 9.7 4h12.6a3 3 0 0 1 2.7 1.7L28 12v3.5H4Z"
        fill={color}
      />
      <path d="M8.5 10.5 10.5 6h9l3 4.5H8.5Z" fill="white" fillOpacity="0.55" />
      <circle cx="10" cy="16" r="3" fill="#0B1424" />
      <circle cx="10" cy="16" r="1.2" fill="white" />
      <circle cx="23" cy="16" r="3" fill="#0B1424" />
      <circle cx="23" cy="16" r="1.2" fill="white" />
    </svg>
  );
}
