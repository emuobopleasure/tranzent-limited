"use client";

export function SuccessModalContent({ title, message, onClose, actionLabel = "Done" }) {
    return (
        <div className="relative overflow-hidden rounded-3xl">
            {/* brand arrow motif — replaces the old gradient strip */}
            <svg
                viewBox="82 116 402 396"
                className="pointer-events-none absolute left-[-1rem] top-[0.5rem] h-[7rem] w-40 text-primary/10 sm:h-[7rem] sm:w-48"
                aria-hidden="true"
            >
                <g fill="currentColor">
                    <path d="m260.629 119.476 218.051 11.43a4.247 4.247 0 0 1 4.022 4.388l-7.34 211.804c-7.048 37.245-41.971 37.508-44.809 37.228-31.992-3.147-42.481-17.307-40.907-50.348 1.774-34.924 6.351-80.251 10.064-120.657.405-4.409-3.144-8.18-7.571-8.119-52.22.719-100.217 5.506-139.929.143-19.995-2.7-34.685-20.312-34.585-44.437 1.527-20.408 9.963-37.761 43.004-41.432" />
                    <path d="m128.088 244.521 218.051 11.43a4.247 4.247 0 0 1 4.022 4.388l-7.34 211.804c-7.048 37.245-41.971 37.508-44.809 37.228-31.992-3.147-42.481-17.307-40.907-50.348 1.774-34.924 6.351-80.251 10.064-120.657.405-4.409-3.144-8.18-7.571-8.119-52.22.719-100.217 5.506-139.929.143-19.995-2.7-34.685-20.312-34.585-44.437 1.527-20.408 9.963-37.76 43.004-41.432" />
                </g>
            </svg>

            <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center border rounded-full border-ink-400 text-ink-400 transition-colors duration-200 hover:bg-mist hover:text-ink-900"
            >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2 2l12 12M14 2 2 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
            </button>

            <div className="relative flex flex-col items-center px-8 pb-10 pt-12 text-center sm:px-10">
                <div className="relative flex h-20 w-20 items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-secondary-50" />
                    <span className="absolute inset-0 rounded-full bg-secondary/20 animate-pulse-ring" />
                    <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-secondary-50 text-secondary-600 animate-pop-in">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path
                                d="M20 6 9 17l-5-5"
                                stroke="currentColor"
                                strokeWidth="2.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeDasharray="48"
                                className="animate-draw-check"
                            />
                        </svg>
                    </span>
                </div>

                <h3 className="mt-7 font-display text-2xl font-semibold text-ink-900">{title}</h3>
                <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-ink-500">{message}</p>

                <button type="button" onClick={onClose} className="btn-primary mt-8">
                    {actionLabel}
                </button>
            </div>
        </div>
    );
}

export function ErrorModalContent({ title = "Something went wrong.", message, onClose, actionLabel = "Try again" }) {
    return (
        <div className="relative overflow-hidden rounded-3xl">
            {/* brand arrow motif — replaces the old gradient strip */}
            <svg
                viewBox="82 116 402 396"
                className="pointer-events-none absolute left-[-1rem] top-[0.5rem] h-[7rem] w-40 text-accent/10 sm:h-[7rem] sm:w-48"
                aria-hidden="true"
            >
                <g fill="currentColor">
                    <path d="m260.629 119.476 218.051 11.43a4.247 4.247 0 0 1 4.022 4.388l-7.34 211.804c-7.048 37.245-41.971 37.508-44.809 37.228-31.992-3.147-42.481-17.307-40.907-50.348 1.774-34.924 6.351-80.251 10.064-120.657.405-4.409-3.144-8.18-7.571-8.119-52.22.719-100.217 5.506-139.929.143-19.995-2.7-34.685-20.312-34.585-44.437 1.527-20.408 9.963-37.761 43.004-41.432" />
                    <path d="m128.088 244.521 218.051 11.43a4.247 4.247 0 0 1 4.022 4.388l-7.34 211.804c-7.048 37.245-41.971 37.508-44.809 37.228-31.992-3.147-42.481-17.307-40.907-50.348 1.774-34.924 6.351-80.251 10.064-120.657.405-4.409-3.144-8.18-7.571-8.119-52.22.719-100.217 5.506-139.929.143-19.995-2.7-34.685-20.312-34.585-44.437 1.527-20.408 9.963-37.76 43.004-41.432" />
                </g>
            </svg>


            <button
                type="button"
                onClick={onClose}
                // aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center border rounded-full border-ink-400 text-ink-400 transition-colors duration-200 hover:bg-mist hover:text-ink-900"
            >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2 2l12 12M14 2 2 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
            </button>

            <div className="relative flex flex-col items-center px-8 pb-10 pt-12 text-center sm:px-10">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-50 text-accent-600 animate-shake">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M12 8v5M12 16.5v.01" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                        <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="2" />
                    </svg>
                </span>

                <h3 className="mt-7 font-display text-2xl font-semibold text-ink-900">{title}</h3>
                <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-ink-500">{message}</p>

                <button type="button" onClick={onClose} className="btn-primary mt-8">
                    {actionLabel}
                </button>
            </div>
        </div>
    );
}