"use client";

import { useState } from "react";

export default function ScrollTopButton() {
  const [bounced, setBounced] = useState(false);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setBounced(true);
    window.setTimeout(() => setBounced(false), 650);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll back to top"
      className={`group flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/55 bg-white/5 text-white transition-all duration-300 ease-signature hover:-translate-y-1.5 hover:border-primary hover:bg-primary hover:shadow-glow-primary active:scale-90 ${
        bounced ? "animate-bounce-soft" : ""
      }`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        aria-hidden="true"
        className="transition-transform duration-300 ease-signature group-hover:-translate-y-0.5"
      >
        <path d="M9 15V3M3.5 8.5 9 3l5.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
