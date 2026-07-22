"use client";

import { useState } from "react";
import Image from "next/image";

export default function MediaFrame({
  src,
  alt = "",
  className = "",
  imgClassName = "",
  overlay = "none", // "none" | "bottom" | "left" | "full"
  fallback,
  priority = false,
  sizes = "100vw",
  children,
}) {
  const [errored, setErrored] = useState(false);
  const showFallback = !src || errored;

  const overlayClass =
    overlay === "bottom"
      ? "bg-gradient-to-t from-ink-900/80 via-ink-900/15 to-transparent"
      : overlay === "left"
        ? "bg-gradient-to-r from-ink-900/85 via-ink-900/30 to-transparent"
        : overlay === "full"
          ? "bg-ink-900/45"
          : "";

  return (
    <div className={`relative isolate overflow-hidden ${className}`}>
      {showFallback ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ink-800 via-ink-900 to-charcoal">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          {fallback}
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setErrored(true)}
          className={`object-cover ${imgClassName}`}
        />
      )}
      {!showFallback && overlay !== "none" && (
        <div className={`pointer-events-none absolute inset-0 ${overlayClass}`} />
      )}
      {children && <div className="absolute inset-0">{children}</div>}
    </div>
  );
}