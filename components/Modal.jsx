"use client";

import { useEffect } from "react";

export default function Modal({ open, onClose, children }) {
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ease-signature sm:p-6 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        onClick={onClose}
        aria-hidden="true"
        className="absolute inset-0 bg-ink-900/70 backdrop-blur-[2px]"
      />
      <div
        className={`relative w-full max-w-[calc(100vw-2rem)] rounded-3xl bg-white p-7 shadow-lift transition-all duration-300 ease-signature xs:max-w-sm sm:max-w-md sm:p-10 ${
          open ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-95 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
