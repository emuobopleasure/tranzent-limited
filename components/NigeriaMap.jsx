"use client";

import { NIGERIA_MAP_STATES, MAP_VIEWBOX, projectLatLng } from "@/lib/nigeria-map-data";
import { findRoute } from "@/lib/nigeria-locations";

const [, , FULL_W, FULL_H] = MAP_VIEWBOX.split(" ").map(Number);
const MIN_ZOOM_W = 300;
const MIN_ZOOM_H = 280;

function stateLookup(name) {
    return NIGERIA_MAP_STATES.find((s) => s.name === name) || null;
}

function computeViewBox(points, sameState, singleState) {
    if (sameState && singleState) {
        const w = MIN_ZOOM_W * 0.85;
        const h = MIN_ZOOM_H * 0.85;
        return `${singleState.cx - w / 2} ${singleState.cy - h / 2} ${w} ${h}`;
    }

    if (!points || points.length === 0) return MAP_VIEWBOX;

    const xs = points.map((p) => p.x);
    const ys = points.map((p) => p.y);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);

    const padX = Math.max((maxX - minX) * 0.3, 70);
    const padY = Math.max((maxY - minY) * 0.3, 110);

    let x = minX - padX;
    let y = minY - padY;
    let w = maxX - minX + padX * 2;
    let h = maxY - minY + padY * 2;

    if (w < MIN_ZOOM_W) {
        x -= (MIN_ZOOM_W - w) / 2;
        w = MIN_ZOOM_W;
    }
    if (h < MIN_ZOOM_H) {
        y -= (MIN_ZOOM_H - h) / 2;
        h = MIN_ZOOM_H;
    }

    w = Math.min(w, FULL_W);
    h = Math.min(h, FULL_H);
    x = Math.max(0, Math.min(x, FULL_W - w));
    y = Math.max(0, Math.min(y, FULL_H - h));

    return `${x} ${y} ${w} ${h}`;
}

function Pin({ x, y, color, pulse, label, size = 7 }) {
    return (
        <g>
            <circle cx={x} cy={y} r={size} fill={color} stroke="#fff" strokeWidth="2" />
            {pulse && <circle cx={x} cy={y} r={size} fill={color} className="animate-pulse-ring" />}
            {label && (
                <text
                    x={x}
                    y={y - size - 6}
                    textAnchor="middle"
                    className="font-display"
                    style={{ fontSize: 17, fontWeight: 600, fill: "#0B1424", paintOrder: "stroke", stroke: "#fff", strokeWidth: 4 }}
                >
                    {label}
                </text>
            )}
        </g>
    );
}

// liveGeometry: optional array of [lng, lat] pairs from a real routing API
// (e.g. OpenRouteService). When present, this draws the actual road-hugging
// route instead of the built-in state-adjacency approximation.
export default function NigeriaMap({ origin, destination, liveGeometry, isLoadingRoute, className = "" }) {
    const sameState = Boolean(origin && destination && origin === destination);
    const routeNames = !sameState ? findRoute(origin, destination) : null;
    const routeStates = routeNames ? routeNames.map(stateLookup).filter(Boolean) : [];
    const hasFallbackRoute = routeStates.length >= 2 && !isLoadingRoute;
    const hasLiveRoute = Boolean(liveGeometry && liveGeometry.length > 1);

    const singleState = sameState ? stateLookup(origin) : null;

    const livePoints = hasLiveRoute
        ? liveGeometry.map(([lng, lat]) => {
            const [x, y] = projectLatLng(lat, lng);
            return { x, y };
        })
        : [];
    const fallbackPoints = hasFallbackRoute
        ? routeStates.map((s) => ({ x: s.cx, y: s.cy }))
        : [];

    const viewBox = computeViewBox(
        hasLiveRoute ? livePoints : fallbackPoints,
        sameState,
        singleState
    );

    const linePath = hasLiveRoute
        ? "M" + livePoints.map((p) => `${p.x} ${p.y}`).join(" L")
        : hasFallbackRoute
            ? "M" + fallbackPoints.map((p) => `${p.x} ${p.y}`).join(" L")
            : null;

    const transitNames = hasFallbackRoute && !hasLiveRoute ? routeStates.slice(1, -1).map((s) => s.name) : [];

    const originPoint = hasLiveRoute ? livePoints[0] : fallbackPoints[0];
    const destPoint = hasLiveRoute ? livePoints[livePoints.length - 1] : fallbackPoints[fallbackPoints.length - 1];
    const showEndpoints = hasLiveRoute || hasFallbackRoute;

    return (
        <svg
            viewBox={viewBox}
            className={`transition-all duration-700 ease-signature ${className}`}
            role="img"
            aria-label={
                showEndpoints
                    ? `Map of Nigeria showing route from ${origin} to ${destination}`
                    : "Map of Nigeria"
            }
        >
            {NIGERIA_MAP_STATES.map((s) => {
                const isOrigin = s.name === origin;
                const isDest = s.name === destination;
                const isTransit = transitNames.includes(s.name);
                let fill = "#EEF3F7";
                if (isOrigin && isDest) fill = "#25AAE1";
                else if (isOrigin) fill = "#0B1424";
                else if (isDest) fill = "#F7941D";
                else if (isTransit) fill = "#D2EFFA";

                return (
                    <path
                        key={s.name}
                        d={s.path}
                        fill={fill}
                        stroke="#E2E8F0"
                        strokeWidth="1"
                        vectorEffect="non-scaling-stroke"
                        className="transition-colors duration-500 ease-signature"
                    />
                );
            })}

            {linePath && (
                <>
                    <path
                        d={linePath}
                        stroke="#25AAE1"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray={hasLiveRoute ? "none" : "7 7"}
                        vectorEffect="non-scaling-stroke"
                        fill="none"
                    />
                    <g>
                        <g transform="translate(-7,-5)">
                            <rect x="0" y="0" width="14" height="8" rx="2.5" fill="#1AB42E" />
                            <rect x="3" y="-3" width="8" height="4" rx="1.5" fill="#1AB42E" />
                            <circle cx="3.5" cy="8" r="2" fill="#0B1424" />
                            <circle cx="10.5" cy="8" r="2" fill="#0B1424" />
                        </g>
                        <animateMotion dur="7s" repeatCount="indefinite" rotate="auto" path={linePath} />
                    </g>

                    {!hasLiveRoute &&
                        fallbackPoints.slice(1, -1).map((p, i) => (
                            <circle key={i} cx={p.x} cy={p.y} r="3.5" fill="#25AAE1" stroke="#fff" strokeWidth="1.5" />
                        ))}
                </>
            )}

            {showEndpoints && (
                <>
                    <Pin x={originPoint.x} y={originPoint.y} color="#0B1424" label={origin} />
                    <Pin x={destPoint.x} y={destPoint.y} color="#F7941D" pulse label={destination} />
                </>
            )}
            {sameState && singleState && (
                <Pin x={singleState.cx} y={singleState.cy} color="#25AAE1" pulse label={origin} />
            )}
        </svg>
    );
}