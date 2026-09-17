import Link from "next/link";

const DEFAULT_ICON = (
  <path d="M2 12 12 2M12 2H4M12 2v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
);

export default function PillButton({ href, children, variant = "dark", size = "md", icon, className = "" }) {
  const styles =
    variant === "dark"
      ? "bg-ink-900 text-white hover:bg-primary-600"
      : variant === "light"
        ? "bg-white text-ink-900 hover:bg-primary-50"
        : variant === "blur"
          ? "border border-white/40 bg-white/20 text-white shadow-[0_2px_16px_rgba(0,0,0,0.3)] backdrop-blur-md hover:border-white/60 hover:bg-white/30"
          : "bg-primary text-white hover:bg-primary-600";

  const bubbleStyles =
    variant === "light" ? "bg-ink-900 text-white" : variant === "blur" ? "bg-white/25 text-white" : "bg-white text-ink-900";

  const sizeStyles =
    size === "sm"
      ? "gap-3.5 py-1.5 pl-5 pr-1.5 text-[12.5px]"
      : size === "responsive"
        ? "gap-3.5 py-1.5 pl-5 pr-1.5 text-[12.5px] sm:gap-4 sm:py-1.5 sm:pl-6 sm:pr-1.5 sm:text-[14.5px]"
        : "gap-4 py-1.5 pl-6 pr-1.5 text-[14.5px]";

  const bubbleSize = size === "sm" ? "h-7 w-7" : size === "responsive" ? "h-7 w-7 sm:h-9 sm:w-9" : "h-9 w-9";
  const iconSize = size === "sm" ? "h-3 w-3" : size === "responsive" ? "h-3 w-3 sm:h-3.5 sm:w-3.5" : "h-3.5 w-3.5";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center rounded-full font-semibold transition-all duration-300 ease-signature active:scale-[0.97] ${sizeStyles} ${styles} ${className}`}
    >
      <span>{children}</span>
      <span
        className={`flex ${bubbleSize} shrink-0 items-center justify-center rounded-full transition-transform duration-300 ease-signature group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${bubbleStyles}`}
      >
        <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" className={iconSize}>
          {icon || DEFAULT_ICON}
        </svg>
      </span>
    </Link>
  );
}