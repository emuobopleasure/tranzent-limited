"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import Modal from "./Modal";
import MediaFrame from "./MediaFrame";
import InstagramEmbed from "./InstagramEmbed";
import { TESTIMONIALS, SHOW_WRITTEN_TESTIMONIALS } from "@/lib/testimonials";
import Link from "next/link";

const FILTERS = [
    { key: "all", label: "All" },
    { key: "written", label: "Written" },
    { key: "video", label: "Video" },
];

function itemMeta(item) {
    return [item.destination, item.vehicle].filter(Boolean).join(" · ");
}

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

function preloadInstagramScript() {
    if (window.instgrm || document.getElementById("instagram-embed-script")) return;
    const script = document.createElement("script");
    script.id = "instagram-embed-script";
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
}

export default function TestimonialsSection({ showHeading = true, limit }) {
    // Hide written reviews while on hold, before applying `limit`
    const available = TESTIMONIALS.filter(
        (t) => SHOW_WRITTEN_TESTIMONIALS || t.type !== "written"
    );
    const base = limit ? available.slice(0, limit) : available;

    // Only offer filter buttons for categories that actually have items
    const filters = FILTERS.filter(
        (f) => f.key === "all" || available.some((t) => t.type === f.key)
    );
    const showFilters = filters.length > 2; // "All" + one category would be redundant

    const [filter, setFilter] = useState("all");
    const [activeVideo, setActiveVideo] = useState(null);

    const visible = filter === "all" ? base : base.filter((t) => t.type === filter);

    return (
        <section className="bg-paper py-24 sm:py-28">
            <div className="container-brand">
                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                    {showHeading && (
                        <Reveal>
                            <h2 className="mt-5 max-w-xl font-display text-[32px] font-semibold leading-tight tracking-tightest sm:text-[40px]">
                                Real hauls, real feedback.
                            </h2>
                        </Reveal>
                    )}
                    {showHeading && (
                        <Reveal delay={80}>
                            <Link
                                href="/testimonials"
                                className="group inline-flex items-center gap-2 font-mono text-[12.5px] uppercase tracking-widest2 text-ink-500 transition-colors duration-200 hover:text-primary-600"
                            >
                                View all testimonials
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 ease-signature group-hover:translate-x-1" aria-hidden="true">
                                    <path d="M2 12 12 2M12 2H4M12 2v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </Reveal>
                    )}
                </div>

                {showFilters && (
                    <Reveal delay={80}>
                        <div className="mt-8 flex gap-2">
                            {filters.map((f) => (
                                <button
                                    key={f.key}
                                    type="button"
                                    onClick={() => setFilter(f.key)}
                                    className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-all duration-300 ease-signature active:scale-90 ${filter === f.key
                                        ? "border-ink-900 bg-ink-900 text-white"
                                        : "border-line bg-white text-ink-600 hover:border-ink-300"
                                        }`}
                                >
                                    {f.label}
                                </button>
                            ))}
                        </div>
                    </Reveal>
                )}

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {visible.map((item, i) => (
                        <Reveal key={item.id} delay={i * 70} className="h-full">
                            {item.type === "written" ? (
                                <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-card transition-all duration-400 ease-signature hover:-translate-y-1.5 hover:shadow-lift">
                                    <svg width="28" height="22" viewBox="0 0 28 22" fill="none" className="text-primary-200" aria-hidden="true">
                                        <path
                                            d="M0 22V13.2C0 5.9 4.7 1 11.7 0l1 3.4C8.4 4.6 6 7.1 6 10.6h5.8V22H0Zm16.2 0V13.2C16.2 5.9 20.9 1 27.9 0l1 3.4c-4.3 1.2-6.7 3.7-6.7 7.2H28V22H16.2Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-700">
                                        {item.quote}
                                    </p>
                                    <div className="mt-6 border-t border-line pt-4">
                                        {itemMeta(item) && <p className="mt-0.5 text-[13px] text-ink-400">{itemMeta(item)}</p>}                                        <p className="mt-0.5 text-[13px] text-ink-400">{item.role}</p>
                                        <div className="mt-2 flex items-center justify-between">
                                            <StarRow />
                                            {item.sourceUrl && <SourceLink href={item.sourceUrl}>View source</SourceLink>}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-card transition-all duration-400 ease-signature hover:-translate-y-1.5 hover:shadow-lift">
                                    <button
                                        type="button"
                                        onClick={() => setActiveVideo(item)}
                                        onMouseEnter={preloadInstagramScript}
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
                                            <p className="mt-0.5 text-[13px] text-ink-400">{item.role}</p>
                                        </div>
                                        {item.sourceUrl && (
                                            <div className="mt-4">
                                                <SourceLink href={item.sourceUrl}>
                                                    Video review by {item.name}
                                                </SourceLink>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </Reveal>
                    ))}
                </div>
            </div>

            <Modal open={Boolean(activeVideo)} onClose={() => setActiveVideo(null)}>
                {activeVideo && (
                    <div key={activeVideo.id} className="animate-pop-in">
                        <div className="sticky top-0 z-20 flex items-center justify-between bg-gradient-to-b from-white via-white/95 to-transparent px-3 pb-3 pt-3 sm:px-4 sm:pt-4">
                            <p className="text-[13px] font-medium text-ink-500">
                                Review by {activeVideo.name}
                            </p>
                            <button
                                type="button"
                                onClick={() => setActiveVideo(null)}
                                aria-label="Close"
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-ink-500 shadow-card ring-1 ring-line transition-all duration-200 ease-signature hover:-translate-y-0.5 hover:bg-mist hover:text-ink-900 active:scale-90"
                            >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                                    <path d="M2 2l12 12M14 2 2 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>

                        <div className="px-3 pb-5 sm:px-4">
                            {activeVideo.videoType === "instagram" ? (
                                <InstagramEmbed url={activeVideo.videoSrc} />
                            ) : (
                                <VideoPlayer item={activeVideo} />
                            )}
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
}