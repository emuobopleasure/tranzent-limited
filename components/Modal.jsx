"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, onClose, children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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

  if (!mounted) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className={`fixed inset-0 z-[999] flex items-center justify-center p-4 transition-opacity duration-300 ease-signature sm:p-6 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div onClick={onClose} aria-hidden="true" className="absolute inset-0 bg-ink-900/70 backdrop-blur-sm" />
      <div
        className={`relative max-h-[85vh] w-full max-w-sm overflow-y-auto rounded-3xl bg-white shadow-lift transition-all duration-300 ease-signature sm:max-w-md ${
          open ? "translate-y-0 scale-100 opacity-100" : "translate-y-6 scale-95 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}