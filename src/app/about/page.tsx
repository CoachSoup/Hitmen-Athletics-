import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata } from "@/lib/metadata";
import {
  aboutAudienceCards,
  athleteJourneySteps,
  culturePillars,
  launchReviewItems,
  storyPlaceholderCards,
} from "@/lib/site";

export const metadata = buildMetadata(
  "About",
  "Learn how the Hitmen Athletics Phase 1 site frames coaching, athlete development, and a launchable brand structure with room for later expansion."
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Hitmen Athletics"
        title="A confident brand system built around athlete development."
        description="This phase now does more than introduce the visual system. It gives Hitmen Athletics a stronger framework for telling its story, clarifying who each page serves, and preparing for future operational content without publishing unverified facts."
        aside={
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              What this page now handles
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              It positions the program philosophy, clarifies the audiences this
              site supports, and leaves room for real founder, coach, or staff
              storytelling whenever the team is ready to add it.
            </p>
          </div>
        }
      />

      <section className="pb-16 sm:pb-20">
        <Container>
          <SectionHeading
            eyebrow="Positioning"
            title="A Phase 1 story rooted in clarity and scalability."
            description="The copy intentionally focuses on training identity, premium presentation, and athlete value so the team can add specifics later without rewriting the full site."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {culturePillars.map((pillar) => (
              <article key={pillar.title} className="surface-card rounded-[1.5rem] p-6">
                <h2 className="text-xl font-semibold text-white">{pillar.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-black/10 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Who this supports"
            title="Stronger structure for the people actually using the site."
            description="A more complete About page should tell different audiences why this site exists now and how it can grow into a fuller trust-building asset later."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {aboutAudienceCards.map((card) => (
              <article key={card.title} className="surface-card rounded-[1.5rem] p-6">
                <h2 className="text-xl font-semibold text-white">{card.title}</h2>
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
            eyebrow="Story roadmap"
            title="These sections are intentionally ready for real trust-building detail."
            description="The page feels more complete today, while still making it obvious where genuine biographies, outcomes, and facility information could be added in future updates."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {storyPlaceholderCards.map((card) => (
              <article key={card.title} className="surface-card rounded-[1.5rem] p-6">
                <h2 className="text-xl font-semibold text-white">{card.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-black/10 py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <article className="surface-card rounded-[1.75rem] p-7 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                Experience flow
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                About now supports the full “why us, what next” story arc.
              </h2>
              <div className="mt-6 space-y-4">
                {athleteJourneySteps.map((step, index) => (
                  <div key={step.title} className="field-note rounded-2xl p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-2 text-base font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-200">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="surface-card rounded-[1.75rem] p-7 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                Review focus
              </p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
                {launchReviewItems.map((item) => (
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
    </>
  );
}
