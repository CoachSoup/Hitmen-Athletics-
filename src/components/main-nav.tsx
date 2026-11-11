"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationItems } from "@/lib/site";

type MainNavProps = {
  stacked?: boolean;
};

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MainNav({ stacked = false }: MainNavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary navigation">
      <ul
        className={
          stacked
            ? "flex flex-col gap-2"
            : "flex flex-wrap items-center justify-end gap-2 lg:gap-3"
        }
      >
        {navigationItems.map((item) => {
          const active = isActivePath(pathname, item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`inline-flex ${stacked ? "w-full justify-start" : ""} rounded-full px-4 py-2 text-sm font-medium tracking-wide motion-safe:transition-colors motion-reduce:transition-none ${
                  active
                    ? "bg-[var(--accent-soft)] text-white ring-1 ring-[var(--accent)]/70"
                    : "text-slate-300 motion-safe:hover:bg-white/5 motion-safe:hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
