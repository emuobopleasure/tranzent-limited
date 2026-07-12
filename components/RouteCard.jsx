export default function RouteCard({ className = "" }) {
  return (
    <div className={`w-[228px] overflow-hidden rounded-3xl bg-white shadow-lift sm:w-[300px] ${className}`}>
      <div className="relative h-28 bg-mist">
        <svg viewBox="0 0 300 112" fill="none" className="h-full w-full" aria-hidden="true">
          <line x1="0" y1="14" x2="300" y2="14" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="0" y1="42" x2="300" y2="42" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="0" y1="70" x2="300" y2="70" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="0" y1="98" x2="300" y2="98" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="40" y1="0" x2="40" y2="112" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="110" y1="0" x2="110" y2="112" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="190" y1="0" x2="190" y2="112" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="260" y1="0" x2="260" y2="112" stroke="#E2E8F0" strokeWidth="1" />
          <path
            d="M15 90 C 70 90, 70 55, 120 55 S 180 20, 240 20 S 280 15, 292 12"
            stroke="#1AB42E"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="1 10"
          />
          <path
            d="M15 90 C 70 90, 70 55, 120 55 S 180 20, 240 20 S 280 15, 292 12"
            stroke="#25AAE1"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="7 200"
          />
          <circle cx="15" cy="90" r="5" fill="#0B1424" />
          <circle cx="292" cy="12" r="7" fill="#F7941D" />
          <circle cx="292" cy="12" r="7" fill="#F7941D" className="animate-pulse-ring" />

          <g>
            <g transform="translate(-7,-5)">
              <rect x="0" y="0" width="14" height="8" rx="2.5" fill="#25AAE1" />
              <rect x="3" y="-3" width="8" height="4" rx="1.5" fill="#25AAE1" />
              <circle cx="3.5" cy="8" r="2" fill="#0B1424" />
              <circle cx="10.5" cy="8" r="2" fill="#0B1424" />
            </g>
            <animateMotion
              dur="4.5s"
              repeatCount="indefinite"
              rotate="auto"
              path="M15 90 C 70 90, 70 55, 120 55 S 180 20, 240 20 S 280 15, 292 12"
            />
          </g>
        </svg>
      </div>

      <div className="grid grid-cols-3 divide-x divide-line border-t border-line">
        <div className="px-3 py-4 text-center">
          <p className="font-display text-base font-semibold text-ink-900 sm:text-lg">412km</p>
          <p className="mt-0.5 font-mono text-[9px] uppercase tracking-widest2 text-ink-300">Distance</p>
        </div>
        <div className="px-3 py-4 text-center">
          <p className="font-display text-base font-semibold text-ink-900 sm:text-lg">Today</p>
          <p className="mt-0.5 font-mono text-[9px] uppercase tracking-widest2 text-ink-300">ETA</p>
        </div>
        <div className="px-3 py-4 text-center">
          <p className="font-display text-base font-semibold text-ink-900 sm:text-lg">6h 40m</p>
          <p className="mt-0.5 font-mono text-[9px] uppercase tracking-widest2 text-ink-300">Duration</p>
        </div>
      </div>
    </div>
  );
}
