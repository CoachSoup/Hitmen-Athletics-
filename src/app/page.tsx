import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { ProgramCard } from "@/components/program-card";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata } from "@/lib/metadata";
import { programs } from "@/lib/programs";
import { launchReviewItems, performancePillars } from "@/lib/site";

export const metadata = buildMetadata(
  "Home",
  "A premium Phase 1 homepage for Hitmen Athletics focused on speed, football skill development, and responsive presentation."
);

export default function Home() {
  return (
    <>
      <PageHero
        eyebrow="Phase 1 launch"
        title="Build athletes who move with speed, detail, and confidence."
        description="Hitmen Athletics now has a responsive App Router foundation designed for premium football branding, reusable growth, and clear program storytelling across every screen size."
        aside={
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              Built in this phase
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
              <li>Homepage, About, Contact, and three data-driven program pages.</li>
              <li>Reusable UI sections, shared metadata, and structured program content.</li>
              <li>Accessible navigation, skip links, and reduced-motion support.</li>
            </ul>
          </div>
        }
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="/programs/7v7">Explore programs</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Review contact setup
          </ButtonLink>
        </div>
      </PageHero>

      <section className="pb-16 pt-6 sm:pb-20">
        <Container>
          <SectionHeading
            eyebrow="Program lineup"
            title="Three clear development lanes for athletes and families."
            description="Each route is powered by shared structured data so the site can expand cleanly in future phases without duplicating page logic."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-black/10 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Brand direction"
            title="Athletic presentation with room to grow."
            description="The design system leans into contrast, clarity, and confidence so future media, staff profiles, schedules, or registrations can slot in without reworking the foundation."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {performancePillars.map((pillar) => (
              <article key={pillar.title} className="surface-card rounded-[1.5rem] p-6">
                <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="surface-card rounded-[1.75rem] p-7 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                Launch-ready foundation
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                Ready for coaching review before production details go live.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                The build intentionally avoids fake contact data and integrations.
                That keeps the experience polished now while preserving a clean handoff
                for real operational details later.
              </p>
              <div className="field-note mt-6 rounded-2xl p-5 text-sm leading-7 text-slate-200">
                Contact, registration, and final branding can be layered into this
                structure without rebuilding the site architecture.
              </div>
            </div>

            <div className="surface-card rounded-[1.75rem] p-7 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                Review checklist
              </p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
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
      </section>
    </>
  );
}
