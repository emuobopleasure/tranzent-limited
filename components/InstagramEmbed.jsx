"use client";

import { useEffect, useRef, useState } from "react";

function BrandSpinner() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative h-14 w-14">
        <div className="absolute inset-0 rounded-full border-[4px] border-primary-100" />
        <div className="absolute inset-0 animate-spin rounded-full border-[4px] border-transparent border-t-primary-600 border-r-primary-600" />
      </div>
      <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink-400">
        Loading video…
      </p>
    </div>
  );
}

function LoadError({ url }) {
  return (
    <div className="flex flex-col items-center gap-4 px-6 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-50 text-accent-600">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 8v5M12 16.5v.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      </span>
      <p className="max-w-[220px] text-[13.5px] leading-relaxed text-ink-500">
        This video is taking too long to load — check your connection, or view it directly.
      </p>
      <a href={url} target="_blank" rel="noreferrer" className="btn-secondary">
        Open on Instagram
      </a>
    </div>
  );
}

export default function InstagramEmbed({ url }) {
  const containerRef = useRef(null);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  useEffect(() => {
    if (!containerRef.current) return;
    setStatus("loading");

    containerRef.current.innerHTML = `<blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="14" style="margin:0 auto;max-width:540px;width:100%;"></blockquote>`;

    const observer = new MutationObserver(() => {
      if (containerRef.current?.querySelector("iframe")) {
        setStatus("ready");
      }
    });
    observer.observe(containerRef.current, { childList: true, subtree: true });

    function process() {
      window.instgrm?.Embeds.process();
    }

    const existing = document.getElementById("instagram-embed-script");
    if (window.instgrm) {
      process();
    } else if (existing) {
      existing.addEventListener("load", process);
      existing.addEventListener("error", () => setStatus("error"));
    } else {
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = process;
      script.onerror = () => setStatus("error");
      document.body.appendChild(script);
    }

    // Timeout fallback: if the embed hasn't rendered after 9s (slow connection, or Instagram
    // blocked or unreachable), stop the loading spinner and show a direct link to the post
    // instead. Without this, the modal would spin forever and the visitor would have no way
    // to reach the video.

    const timeout = window.setTimeout(() => {
      setStatus((s) => (s === "ready" ? s : "error"));
    }, 9000);

    return () => {
      observer.disconnect();
      window.clearTimeout(timeout);
    };
  }, [url]);

  return (
    <div className="relative min-h-[320px] sm:min-h-[420px]">
      {status !== "ready" && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-white">
          {status === "error" ? <LoadError url={url} /> : <BrandSpinner />}
        </div>
      )}
      <div
        ref={containerRef}
        className={`transition-opacity duration-500 ease-signature ${status === "ready" ? "opacity-100" : "opacity-0"
          }`}
      />
    </div>
  );
}