"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import PillButton from "./PillButton";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "The Standard", href: "/#the-standard" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Solid, dependable surfaces only — no opacity/blur stacking that can
  // silently fail to render on some browsers and leave nav text unreadable.
  const solid = scrolled || open;
  const barBg = solid ? "bg-white shadow-[0_1px_0_0_rgba(11,20,36,0.08)]" : "bg-transparent";
  const logoVariant = solid ? "dark" : "light";
  const lineColor = solid ? "bg-ink-900" : "bg-white";
  const iconBorder = solid ? "border-ink-900/50" : "border-white/50";

  return (
    <header className={`fixed inset-x-0 top-0 z-[60] transition-colors duration-300 ease-signature ${barBg}`}>
      <nav className="container-brand flex h-[76px] items-center justify-between" aria-label="Primary">
        <Link href="/" className="group relative z-10" onClick={() => setOpen(false)}>
          <Logo variant={logoVariant} />
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`group relative py-2 text-[14.5px] font-medium transition-colors duration-200 ${
                  scrolled ? "text-ink-700 hover:text-ink-900" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-primary transition-all duration-300 ease-signature group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <PillButton href="/contact" variant="primary">
            Request a Quote
          </PillButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 lg:hidden ${iconBorder}`}
        >
          <span className="relative flex h-4 w-5 flex-col justify-between">
            <span className={`h-[1.5px] w-full transition-all duration-300 ease-signature ${lineColor} ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-[1.5px] w-full transition-all duration-300 ease-signature ${lineColor} ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`h-[1.5px] w-full transition-all duration-300 ease-signature ${lineColor} ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      {/* Mobile menu panel — solid light surface, guaranteed readable */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[76px] z-[55] origin-top bg-white transition-all duration-300 ease-signature lg:hidden ${
          open ? "visible opacity-100 scale-y-100 pointer-events-auto" : "invisible opacity-0 scale-y-95 pointer-events-none"
        }`}
        style={{ height: "calc(100dvh - 76px)" }}
      >
        <ul className="container-brand flex h-full flex-col gap-1 overflow-y-auto pt-8 pb-10">
          {LINKS.map((link, i) => (
            <li
              key={link.label}
              className={open ? "animate-step-in" : ""}
              style={{ animationDelay: `${i * 60}ms`, animationFillMode: "backwards" }}
            >
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line py-5 font-display text-2xl font-medium text-ink-900 transition-colors duration-200 hover:text-primary-600"
              >
                {link.label}
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="text-ink-300">
                  <path d="M2 12 12 2M12 2H4M12 2v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </li>
          ))}
          <li className="mt-8" onClick={() => setOpen(false)}>
            <PillButton href="/contact" variant="primary" className="w-full justify-center py-3">
              Request a Quote
            </PillButton>
          </li>
        </ul>
      </div>
    </header>
  );
}
