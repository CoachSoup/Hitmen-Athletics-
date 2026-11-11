import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { ProgramCard } from "@/components/program-card";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata } from "@/lib/metadata";
import { programs } from "@/lib/programs";
import {
  athleteJourneySteps,
  launchReviewItems,
  nextPhaseModules,
  performancePillars,
  programSelectionCards,
} from "@/lib/site";

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
        description="Hitmen Athletics now has a stronger App Router foundation designed to help athletes and families understand the training lanes, compare the right next step, and prepare for a real inquiry flow once operational details are approved."
        aside={
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              What this preview supports
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
              <li>Richer page structure for homepage, About, Contact, and all three program routes.</li>
              <li>Clearer next-step content without pretending registration, contact, or scheduling data exists yet.</li>
              <li>Shared components, mobile polish, accessibility support, and explicit placeholder handling.</li>
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
            description="Each route is powered by shared structured data so the site can expand cleanly with real schedules, registration, staffing, and media later without duplicating page logic."
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
            eyebrow="Program fit"
            title="Help people pick the right first conversation."
            description="A more operational-feeling homepage should reduce uncertainty, so these sections guide athletes and families toward the lane that best matches the need they are trying to solve."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {programSelectionCards.map((card) => (
              <article key={card.title} className="surface-card rounded-[1.5rem] p-6">
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Inquiry path"
            title="What the decision journey should feel like."
            description="Even before live contact channels exist, the site can still make the next move obvious: choose a lane, gather the right details, and be ready for the eventual inquiry workflow."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {athleteJourneySteps.map((step, index) => (
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
                Next-phase modules
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                The site now has obvious space for the operational pieces that are still pending.
              </h2>
              <div className="mt-6 space-y-4">
                {nextPhaseModules.map((module) => (
                  <div key={module.title} className="field-note rounded-2xl p-5">
                    <h3 className="text-base font-semibold text-white">{module.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-200">
                      {module.description}
                    </p>
                  </div>
                ))}
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
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/contact">Review inquiry placeholders</ButtonLink>
                <ButtonLink href="/about" variant="secondary">
                  Review site story structure
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
