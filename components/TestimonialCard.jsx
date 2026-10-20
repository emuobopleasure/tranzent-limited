"use client";

import MediaFrame from "./MediaFrame";

/* ---------- small pieces ---------- */

function StarRow() {
    return (
        <div className="flex gap-0.5 text-accent-500">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6L10 1.5Z" />
                </svg>
            ))}
        </div>
    );
}

function PlayGlyph() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" />
        </svg>
    );
}

function SourceLink({ href, children, className = "" }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`inline-flex items-center gap-1 text-[12px] font-medium text-primary-600 transition-colors duration-200 hover:text-primary-700 ${className}`}
        >
            {children}
            <svg width="10" height="10" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 12 12 2M12 2H4M12 2v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </a>
    );
}

/** Destination + vehicle rows. Renders only the rows that have data. */
function ItemMeta({ item }) {
    if (!item.destination && !item.vehicle) return null;
    return (
        <ul className="mt-2 space-y-1.5">
            {item.destination && (
                <li className="flex items-center gap-2 text-[13px] text-ink-500">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0 text-primary-600" aria-hidden="true">
                        <path d="M8 14.5s5-4.3 5-8.2a5 5 0 0 0-10 0c0 3.9 5 8.2 5 8.2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                        <circle cx="8" cy="6.3" r="1.7" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                    <span>{item.destination}</span>
                </li>
            )}
            {item.vehicle && (
                <li className="flex items-center gap-2 text-[13px] text-ink-500">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0 text-primary-600" aria-hidden="true">
                        <path d="M2 10.5V8.2l1.3-3a1.6 1.6 0 0 1 1.5-1h6.4a1.6 1.6 0 0 1 1.5 1l1.3 3v2.3M2 10.5h12M2 10.5v1.8M14 10.5v1.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="5" cy="10.5" r="0.9" fill="currentColor" />
                        <circle cx="11" cy="10.5" r="0.9" fill="currentColor" />
                    </svg>
                    <span>{item.vehicle}</span>
                </li>
            )}
        </ul>
    );
}

/* ---------- card ---------- */

export default function TestimonialCard({ item, onPlay, onWarm }) {
    if (item.type === "written") {
        return (
            <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-card transition-all duration-400 ease-signature hover:-translate-y-1.5 hover:shadow-lift">
                <svg width="28" height="22" viewBox="0 0 28 22" fill="none" className="text-primary-200" aria-hidden="true">
                    <path
                        d="M0 22V13.2C0 5.9 4.7 1 11.7 0l1 3.4C8.4 4.6 6 7.1 6 10.6h5.8V22H0Zm16.2 0V13.2C16.2 5.9 20.9 1 27.9 0l1 3.4c-4.3 1.2-6.7 3.7-6.7 7.2H28V22H16.2Z"
                        fill="currentColor"
                    />
                </svg>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-700">{item.quote}</p>
                <div className="mt-6 border-t border-line pt-4">
                    <p className="font-display text-[15px] font-semibold text-ink-900">{item.name}</p>
                    <ItemMeta item={item} />
                    <div className="mt-3 flex items-center justify-between">
                        <StarRow />
                        {item.sourceUrl && <SourceLink href={item.sourceUrl}>View source</SourceLink>}
                    </div>
                </div>
            </div>
        );
    }

    // video
    return (
        <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-card transition-all duration-400 ease-signature hover:-translate-y-1.5 hover:shadow-lift">
            <button
                type="button"
                onClick={() => onPlay?.(item)}
                onMouseEnter={onWarm}
                aria-label={`Play video review by ${item.name}`}
                className="group relative h-48 w-full active:scale-[0.98]"
            >
                <MediaFrame
                    src={item.thumbnail}
                    alt={`${item.name} video testimonial`}
                    className="h-full w-full"
                    imgClassName="transition-transform duration-500 ease-signature group-hover:scale-105"
                    overlay="full"
                    fallback={
                        <div className="flex h-full w-full items-center justify-center bg-ink-800 text-white/30">
                            <PlayGlyph />
                        </div>
                    }
                />
                <span className="absolute inset-0 flex items-center justify-center">
                    <span className="relative flex h-14 w-14 items-center justify-center">
                        <span className="absolute inset-0 rounded-full bg-white/70 animate-pulse-ring" />
                        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-ink-900 shadow-lift transition-transform duration-300 ease-signature group-hover:scale-110 group-active:scale-95">
                            <PlayGlyph />
                        </span>
                    </span>
                </span>
            </button>

            <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                    <p className="font-display text-[15px] font-semibold text-ink-900">{item.name}</p>
                    <ItemMeta item={item} />
                </div>
                {item.sourceUrl && (
                    <div className="mt-4">
                        <SourceLink href={item.sourceUrl}>Video review by {item.name}</SourceLink>
                    </div>
                )}
            </div>
        </div>
    );
}