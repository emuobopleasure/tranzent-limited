"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import Modal from "./Modal";
import TestimonialCard from "./TestimonialCard";
import InstagramEmbed from "./InstagramEmbed";
import { TESTIMONIALS, SHOW_WRITTEN_TESTIMONIALS } from "@/lib/testimonials";

const FILTERS = [
    { key: "all", label: "All" },
    { key: "written", label: "Written" },
    { key: "video", label: "Video" },
];

function preloadInstagramScript() {
    if (typeof window === "undefined") return;
    if (window.instgrm || document.getElementById("instagram-embed-script")) return;
    const script = document.createElement("script");
    script.id = "instagram-embed-script";
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
}

/** Fallback for self-hosted videos (anything that isn't an Instagram embed). */
function VideoPlayer({ item }) {
    return (
        <video
            src={item.videoSrc}
            poster={item.thumbnail}
            controls
            playsInline
            autoPlay
            className="w-full rounded-2xl bg-black"
        />
    );
}

function CloseIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2 2l12 12M14 2 2 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    );
}

export default function TestimonialsSection({ showHeading = true, limit }) {
    // Written reviews are on hold: hide them before applying `limit`
    const available = TESTIMONIALS.filter(
        (t) => SHOW_WRITTEN_TESTIMONIALS || t.type !== "written"
    );
    const base = limit ? available.slice(0, limit) : available;

    // Only offer filters for categories that actually have items
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
                {showHeading && (
                    <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                        <Reveal>
                            <h2 className="mt-5 max-w-xl font-display text-[32px] font-semibold leading-tight tracking-tightest sm:text-[40px]">
                                Real hauls, real feedback.
                            </h2>
                        </Reveal>
                        <Reveal delay={80}>
                            <Link
                                href="/testimonials"
                                className="group inline-flex items-center gap-2 font-mono text-[12.5px] uppercase tracking-widest2 text-ink-500 transition-colors duration-200 hover:text-primary-600"
                            >
                                View all testimonials
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    className="transition-transform duration-300 ease-signature group-hover:translate-x-1"
                                    aria-hidden="true"
                                >
                                    <path d="M2 12 12 2M12 2H4M12 2v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </Reveal>
                    </div>
                )}

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
                            <TestimonialCard
                                item={item}
                                onPlay={setActiveVideo}
                                onWarm={preloadInstagramScript}
                            />
                        </Reveal>
                    ))}
                </div>
            </div>

            <Modal open={Boolean(activeVideo)} onClose={() => setActiveVideo(null)}>
                {activeVideo && (
                    <div key={activeVideo.id} className="animate-pop-in">
                        <div className="sticky top-0 z-20 flex items-center justify-between bg-gradient-to-b from-white via-white/95 to-transparent px-3 pb-3 pt-3 sm:px-4 sm:pt-4">
                            <p className="text-[13px] font-medium text-ink-500">Review by {activeVideo.name}</p>
                            <button
                                type="button"
                                onClick={() => setActiveVideo(null)}
                                aria-label="Close"
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-ink-500 shadow-card ring-1 ring-line transition-all duration-200 ease-signature hover:-translate-y-0.5 hover:bg-mist hover:text-ink-900 active:scale-90"
                            >
                                <CloseIcon />
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