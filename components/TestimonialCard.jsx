"use client";

import MediaFrame from "./MediaFrame";


function Glyph({ children, className = "h-[22px] w-[22px]" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={className}
        >
            {children}
        </svg>
    );
}

function IconCircle({ children, size = "h-11 w-11" }) {
    return (
        <span
            className={`flex ${size} shrink-0 items-center justify-center rounded-full border border-primary/50 text-primary-600`}
        >
            {children}
        </span>
    );
}

const ICONS = {
    play: (
        <>
            <circle cx="12" cy="12" r="8.5" />
            <path d="M10.4 8.9v6.2l5.2-3.1-5.2-3.1Z" />
        </>
    ),
    quote: (
        <>
            <path d="M5 5h14a1 1 0 0 1 1 1v9.2a1 1 0 0 1-1 1h-6.6L8 19.8v-3.6H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
            <path d="M8 9.2h8M8 12.2h5" />
        </>
    ),
    route: (
        <>
            <circle cx="6" cy="17.5" r="2" />
            <circle cx="18" cy="6.5" r="2" />
            <path d="M8 17.5h5.5a3 3 0 0 0 0-6h-3a3 3 0 0 1 0-5H16" />
        </>
    ),
    car: (
        <>
            <path d="M4 16.5v-3.4c0-.6.3-1.2.9-1.5l1.5-3.2A1.8 1.8 0 0 1 8.1 7.3h7.8a1.8 1.8 0 0 1 1.7 1.1l1.5 3.2c.6.3.9.9.9 1.5v3.4" />
            <path d="M4 12h16" />
            <circle cx="7.6" cy="16.5" r="1.6" />
            <circle cx="16.4" cy="16.5" r="1.6" />
            <path d="M9.2 16.5h5.6" />
        </>
    ),
};

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

/** Link with the same bordered arrow circle used on the other CTAs. */
function SourceLink({ href, children }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="group/src inline-flex items-center gap-2.5 text-[13.5px] font-medium text-ink-700 transition-colors duration-300 hover:text-primary-600"
        >
            {children}
            <span className="flex h-8 w-8 items-center justify-center rounded-full text-ink-700 ring-1 ring-inset ring-ink-900/15 transition-all duration-300 ease-signature group-hover/src:bg-primary group-hover/src:text-white group-hover/src:ring-primary">
                <svg
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                    className="h-3 w-3 transition-transform duration-300 ease-signature group-hover/src:-translate-y-0.5 group-hover/src:translate-x-0.5"
                >
                    <path d="M2 12 12 2M12 2H4M12 2v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
        </a>
    );
}

/* ---------- content helpers ---------- */

/** "Delivery for Mr. Chris" (service defaults to Delivery). */
function cardTitle(item) {
    return `${item.service || "Delivery"} for ${item.name}`;
}

function sourceLabel(item) {
    return item.videoType === "instagram" ? "View on Instagram" : "View original";
}

/** Route and Vehicle rows. Only rows with data are rendered. */
function Details({ item }) {
    const rows = [
        item.destination && { key: "route", label: "Route", value: item.destination },
        item.vehicle && { key: "car", label: "Vehicle", value: item.vehicle },
    ].filter(Boolean);

    if (rows.length === 0) return null;

    return (
        <ul className="space-y-4">
            {rows.map((r) => (
                <li key={r.key} className="flex items-center gap-4">
                    <IconCircle>
                        <Glyph>{ICONS[r.key]}</Glyph>
                    </IconCircle>
                    <div className="min-w-0">
                        <p className="font-mono text-[10.5px] uppercase tracking-widest2 text-ink-400">{r.label}</p>
                        <p className="mt-0.5 text-[15px] font-medium leading-snug text-ink-900">{r.value}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

/** Card header: icon circle + small label, one consistent row. */
function CardLabel({ icon, children, right }) {
    return (
        <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
                <IconCircle>
                    <Glyph>{icon}</Glyph>
                </IconCircle>
                <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink-500">{children}</span>
            </div>
            {right}
        </div>
    );
}

/* ---------- card ---------- */


export default function TestimonialCard({ item, onPlay, onWarm }) {
    const shell =
        "flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-card transition-all duration-400 ease-signature hover:-translate-y-1.5 hover:shadow-lift";
    const body = "flex flex-1 flex-col gap-6 p-6 sm:p-7";

    if (item.type === "written") {
        return (
            <div className={shell}>
                <div className={body}>
                    <CardLabel icon={ICONS.quote} right={<StarRow />}>
                        Written review
                    </CardLabel>

                    <div>
                        <h3 className="font-display text-[21px] font-semibold leading-snug tracking-tightest text-ink-900">
                            {cardTitle(item)}
                        </h3>
                        <p className="mt-3 text-[15px] leading-relaxed text-ink-600">&ldquo;{item.quote}&rdquo;</p>
                    </div>

                    <Details item={item} />

                    {item.sourceUrl && (
                        <div className="mt-auto border-t border-line pt-5">
                            <SourceLink href={item.sourceUrl}>View original review</SourceLink>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // video
    return (
        <div className={shell}>
            {item.thumbnail && (
                <button
                    type="button"
                    onClick={() => onPlay?.(item)}
                    onMouseEnter={onWarm}
                    aria-label={`Play video review by ${item.name}`}
                    className="group relative h-48 w-full shrink-0 active:scale-[0.98]"
                >
                    <MediaFrame
                        src={item.thumbnail}
                        alt={`${item.name} video testimonial`}
                        className="h-full w-full"
                        imgClassName="transition-transform duration-500 ease-signature group-hover:scale-105"
                        overlay="full"
                    />
                    <span className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-ink-900 shadow-lift transition-transform duration-300 ease-signature group-hover:scale-110 group-active:scale-95">
                            <Glyph className="h-6 w-6">{ICONS.play}</Glyph>
                        </span>
                    </span>
                </button>
            )}

            <div className={body}>
                <CardLabel icon={ICONS.play}>Video review</CardLabel>

                <h3 className="font-display text-[21px] font-semibold leading-snug tracking-tightest text-ink-900">
                    {cardTitle(item)}
                </h3>

                <Details item={item} />

                <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-t border-line pt-5">
                    <button
                        type="button"
                        onClick={() => onPlay?.(item)}
                        onMouseEnter={onWarm}
                        className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-[13.5px] font-medium text-white transition-all duration-300 ease-signature hover:bg-ink-700 active:scale-95"
                    >
                        <Glyph className="h-4 w-4">{ICONS.play}</Glyph>
                        Watch review
                    </button>
                    {item.sourceUrl && <SourceLink href={item.sourceUrl}>{sourceLabel(item)}</SourceLink>}
                </div>
            </div>
        </div>
    );
}