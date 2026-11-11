import type { ReactNode } from "react";

import { Container } from "@/components/container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  aside?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  aside,
}: PageHeroProps) {
  return (
    <section className="pb-10 pt-16 sm:pb-14 sm:pt-20 lg:pb-16 lg:pt-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:items-start">
          <div className="surface-card rounded-[2rem] p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
              {eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-100/90">
              {description}
            </p>
            {children ? <div className="mt-8">{children}</div> : null}
          </div>

          {aside ? <aside className="surface-card rounded-[2rem] p-6">{aside}</aside> : null}
        </div>
      </Container>
    </section>
  );
}
