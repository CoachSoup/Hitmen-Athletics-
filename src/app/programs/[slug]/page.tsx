import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata } from "@/lib/metadata";
import { getProgramBySlug, programs } from "@/lib/programs";

type ProgramPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params,
}: ProgramPageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    return buildMetadata("Program", "Program details for Hitmen Athletics.");
  }

  return buildMetadata(program.name, program.seoDescription);
}

export default async function ProgramPage({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={program.eyebrow}
        title={program.name}
        description={program.heroDescription}
        aside={
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              Program snapshot
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {program.audience}
            </p>
          </div>
        }
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="/contact">Prepare contact details</ButtonLink>
          <ButtonLink href="/about" variant="secondary">
            Review the brand direction
          </ButtonLink>
        </div>
      </PageHero>

      <section className="pb-16 sm:pb-20">
        <Container>
          <SectionHeading
            eyebrow="Focus areas"
            title="What this program is built to sharpen."
            description={program.shortDescription}
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {program.focusAreas.map((item) => (
              <article key={item} className="surface-card rounded-[1.5rem] p-5">
                <p className="text-sm leading-7 text-slate-200">{item}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-black/10 py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <article className="surface-card rounded-[1.75rem] p-7 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                Athlete outcomes
              </p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
                {program.outcomes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="surface-card rounded-[1.75rem] p-7 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                Experience design
              </p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
                {program.experience.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
            <article className="surface-card rounded-[1.75rem] p-7 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                Ideal for
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {program.idealFor.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm leading-6 text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>

            <article className="surface-card rounded-[1.75rem] p-7 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                Current phase note
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                These program pages are intentionally structured for easy expansion.
                Schedule details, registration links, pricing, coach bios, or media
                can be layered in later once the team approves what should be made
                public.
              </p>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
