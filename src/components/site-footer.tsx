import Link from "next/link";

import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { launchReviewItems, navigationItems } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <Container className="grid gap-10 py-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-5">
          <Logo showPlaceholderLabel />
          <p className="max-w-2xl text-sm leading-7 text-slate-300">
            This Phase 1 build uses placeholder brand and contact content only.
            Replace those items with verified production details before launch.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
              Navigate
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="motion-safe:transition-colors motion-safe:hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
              Review before launch
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              {launchReviewItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
