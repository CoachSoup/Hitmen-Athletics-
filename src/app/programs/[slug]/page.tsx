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

export const instant = false;

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

  const relatedPrograms = programs.filter((item) => item.slug !== program.slug);

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
            <p className="mt-4 text-sm leading-7 text-slate-300">{program.audience}</p>
            <div className="mt-5 space-y-3">
              {program.atAGlance.slice(0, 2).map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">{item.value}</p>
                </div>
              ))}
            </div>
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
            eyebrow="At a glance"
            title="The key context an athlete or family needs right away."
            description="These detail cards make each program feel more operational and easier to compare while keeping all unverified logistics clearly marked as pending."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {program.atAGlance.map((item) => (
              <article key={item.label} className="surface-card rounded-[1.5rem] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                  {item.label}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.value}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-black/10 py-16 sm:py-20">
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

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Session shape"
            title="How the training story unfolds inside this lane."
            description="This layout adds more operational texture to each page by showing the kinds of steps an athlete can expect conceptually, without inventing exact scheduling or staffing details."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {program.sessionFlow.map((step, index) => (
              <article key={step.title} className="surface-card rounded-[1.5rem] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-soft)] text-sm font-semibold text-white ring-1 ring-[var(--accent)]/70">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {step.description}
                </p>
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

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                Recommended next steps
              </p>
              <ul className="mt-4 space-y-4 text-sm leading-7 text-slate-300">
                {program.nextSteps.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="surface-card rounded-[1.75rem] p-7 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                Pending operational details
              </p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
                {program.pendingDetails.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="field-note mt-6 rounded-2xl p-5 text-sm leading-7 text-slate-200">
                Keep these details as placeholders until the team confirms what
                should be public-facing for this program.
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-black/10 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Compare lanes"
            title="If this program is not the right first step, here are the other options."
            description="This makes the program detail pages feel more complete and useful as decision pages instead of dead-end marketing pages."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {relatedPrograms.map((item) => (
              <article key={item.slug} className="surface-card rounded-[1.5rem] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                  {item.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{item.name}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.shortDescription}</p>
                <div className="mt-6">
                  <ButtonLink href={`/programs/${item.slug}`} variant="secondary">
                    Compare {item.name}
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="surface-card rounded-[1.75rem] p-7 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              Next action
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Ready to turn interest into a real inquiry once live operations are approved.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
              This page now gives enough program detail to help an athlete or family
              decide whether the lane feels right. The final missing piece is the
              approved contact or registration path that should receive the inquiry.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/contact">Review contact placeholders</ButtonLink>
              <ButtonLink href="/" variant="secondary">
                Back to homepage overview
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
