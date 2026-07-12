import Link from "next/link";

export default function PillButton({ href, children, variant = "dark", className = "" }) {
  const styles =
    variant === "dark"
      ? "bg-ink-900 text-white hover:bg-primary-600"
      : variant === "light"
      ? "bg-white text-ink-900 hover:bg-primary-50"
      : "bg-primary text-white hover:bg-primary-600";

  const bubbleStyles =
    variant === "light" ? "bg-ink-900 text-white" : "bg-white text-ink-900";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-4 rounded-full py-1.5 pl-6 pr-1.5 text-[14.5px] font-semibold transition-all duration-300 ease-signature active:scale-[0.97] ${styles} ${className}`}
    >
      {children}
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ease-signature group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${bubbleStyles}`}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M2 12 12 2M12 2H4M12 2v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
