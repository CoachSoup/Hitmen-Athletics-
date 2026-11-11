import type { ReactNode } from "react";
import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const baseClassName =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.18em] uppercase motion-safe:transition-all motion-safe:duration-300 motion-reduce:transition-none";
  const variantClassName =
    variant === "primary"
      ? "bg-[var(--accent)] text-slate-950 shadow-[0_16px_40px_rgba(240,196,105,0.22)] motion-safe:hover:-translate-y-0.5 motion-safe:hover:bg-[var(--accent-strong)]"
      : "border border-white/15 bg-white/5 text-white motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-[var(--accent)] motion-safe:hover:bg-white/10";

  return (
    <Link href={href} className={`${baseClassName} ${variantClassName} ${className}`}>
      {children}
    </Link>
  );
}
