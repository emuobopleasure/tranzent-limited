"use client";

import NigeriaMap from "./NigeriaMap";
import { getRouteFactors } from "@/lib/nigeria-locations";

const FACTOR_ICONS = {
    checkpoints: (
        <path d="M12 2 4 5v6c0 5.2 3.4 9.9 8 11 4.6-1.1 8-5.8 8-11V5l-8-3Zm-1.2 13.2L7 11.4l1.4-1.4 2.4 2.4 5.4-5.4 1.4 1.4-6.8 6.8Z" />
    ),
    road: (
        <path d="M4 3h4l1 18H5L4 3Zm11 0h4l1 18h-4l-1-18ZM11 3h1l.6 4h-2.2L11 3Zm-.4 7h2.2l.6 4h-3.4l.6-4Zm-.6 7h3.4l.3 4h-4l.3-4Z" />
    ),
    traffic: (
        <path d="M9 2h6a2 2 0 0 1 2 2v2h1v2h-1v9a2 2 0 0 1-2 2h-1v2h-2v-2h-4v2H8v-2H7a2 2 0 0 1-2-2v-9H4V6h1V4a2 2 0 0 1 2-2Zm0 4v5h6V6H9Zm-.5 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
    ),
    restStops: (
        <path d="M12 2a5 5 0 0 0-5 5c0 3.75 5 11 5 11s5-7.25 5-11a5 5 0 0 0-5-5Zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
    ),
    local: (
        <path d="M12 22s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12Zm0-9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
    ),
};

export default function RouteEstimate({ origin, destination, distanceKm, durationLabel, liveGeometry, isLive, isLoadingRoute }) {
    const ready = origin && destination && distanceKm !== null;
    const factors = ready ? getRouteFactors(origin, destination, distanceKm) : [];

    return (
        <div className="overflow-hidden rounded-2xl border border-line bg-white">
            <div className="relative h-52 bg-mist sm:h-64">
                <NigeriaMap
                    origin={origin}
                    destination={destination}
                    liveGeometry={liveGeometry}
                    isLoadingRoute={isLoadingRoute}
                    className="h-full w-full"
                />                {!ready && (
                    <div className="absolute inset-0 flex items-center justify-center bg-mist/90 px-6 text-center">
                        <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink-300">
                            Select pickup &amp; delivery states to estimate distance
                        </p>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-3 divide-x divide-line border-t border-line">
                <div className="px-3 py-4 text-center">
                    <p className="truncate font-display text-[13px] font-semibold text-ink-900 sm:text-sm" title={origin || ""}>
                        {origin || "—"}
                    </p>
                    <p className="mt-0.5 font-mono text-[9px] uppercase tracking-widest2 text-ink-400">From</p>
                </div>
                <div className="px-3 py-4 text-center">
                    <p className="font-display text-[15px] font-semibold text-ink-900 sm:text-lg">
                        {ready ? `${distanceKm} km` : "—"}
                    </p>
                    <p className="mt-0.5 font-mono text-[9px] uppercase tracking-widest2 text-ink-400">
                        {isLive ? "Road Distance" : "Est. Distance"}
                    </p>
                </div>
                <div className="px-3 py-4 text-center">
                    <p className="truncate font-display text-[13px] font-semibold text-ink-900 sm:text-sm" title={destination || ""}>
                        {destination || "—"}
                    </p>
                    <p className="mt-0.5 font-mono text-[9px] uppercase tracking-widest2 text-ink-400">To</p>
                </div>
            </div>

            {ready && (
                <>
                    <p className="border-t border-line bg-paper px-4 py-2.5 text-center text-[11.5px] leading-snug text-ink-400">
                        {isLive
                            ? `Live road route${durationLabel ? ` · ${durationLabel} drive` : ""}.  Our team confirms exact pricing when they reach out.`
                            : `Estimated route distance${durationLabel && durationLabel !== "Within state" ? ` · ${durationLabel} drive` : ""} — our team confirms exact routing and pricing when they reach out.`}
                    </p>

                    {factors.length > 0 && (
                        <div className="border-t border-line p-4 sm:p-5">
                            <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-500">
                                Factors that may affect this ETA
                            </p>
                            <ul className="mt-3 flex flex-col gap-3">
                                {factors.map((factor) => (
                                    <li key={factor.key} className="flex items-start gap-3">
                                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                {FACTOR_ICONS[factor.key]}
                                            </svg>
                                        </span>
                                        <span>
                                            <span className="block text-[13px] font-medium text-ink-800">{factor.label}</span>
                                            <span className="block text-[12.5px] leading-snug text-ink-500">{factor.note}</span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}