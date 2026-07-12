const STEPS = ["Picked Up", "In Transit", "Delivered"];

export default function ShipmentCard({ className = "" }) {
  return (
    <div className={`w-[248px] rounded-3xl bg-white p-4 shadow-lift sm:w-[300px] sm:p-6 ${className}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-300">
            Tracking ID
          </p>
          <p className="mt-1 font-display text-lg font-semibold text-ink-900">
            TZ-40217
          </p>
        </div>
        <span className="rounded-full bg-accent-50 px-3 py-1 font-mono text-[10.5px] font-medium uppercase tracking-wide text-accent-600">
          In Transit
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4 border-t border-line pt-5">
        <div>
          <p className="font-mono text-[9.5px] uppercase tracking-widest2 text-ink-300">From</p>
          <p className="mt-1 text-[13px] font-medium leading-snug text-ink-800">
            Dealer Hub,
            <br />
            Lagos
          </p>
        </div>
        <div>
          <p className="font-mono text-[9.5px] uppercase tracking-widest2 text-ink-300">To</p>
          <p className="mt-1 text-[13px] font-medium leading-snug text-ink-800">
            Client Address,
            <br />
            Abuja
          </p>
        </div>
      </div>

      <div className="mt-6">
        <div className="relative flex items-center justify-between">
          <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-line" />
          <div className="absolute left-0 top-1/2 h-[2px] w-1/2 -translate-y-1/2 bg-secondary" />
          {STEPS.map((step, i) => (
            <div key={step} className="relative z-10 flex flex-col items-center gap-2">
              <span
                className={`flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 ${
                  i <= 1 ? "border-secondary bg-secondary" : "border-line bg-white"
                }`}
              >
                {i === 1 && (
                  <span className="absolute h-3.5 w-3.5 animate-pulse-ring rounded-full bg-secondary" />
                )}
              </span>
              <span className="w-14 text-center font-mono text-[9px] uppercase tracking-wide text-ink-400">
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
