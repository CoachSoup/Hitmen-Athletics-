import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata } from "@/lib/metadata";
import { culturePillars, launchReviewItems } from "@/lib/site";

export const metadata = buildMetadata(
  "About",
  "Learn how the Hitmen Athletics Phase 1 site frames coaching, athlete development, and launch-ready brand structure."
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Hitmen Athletics"
        title="A confident brand system built around athlete development."
        description="This first phase introduces the visual language and route structure for Hitmen Athletics without locking the site into fake facts, placeholder contact claims, or one-off page patterns."
        aside={
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              What this page does
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              It positions the program philosophy, explains the current build
              approach, and sets up a clean place for future founder, coach, or
              staff storytelling.
            </p>
          </div>
        }
      />

      <section className="pb-16 sm:pb-20">
        <Container>
          <SectionHeading
            eyebrow="Positioning"
            title="A Phase 1 story rooted in clarity and scalability."
            description="The copy intentionally focuses on training identity, premium presentation, and athlete value so the team can approve specifics later without rewriting the full site."
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
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <article className="surface-card rounded-[1.75rem] p-7 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                Future-ready content
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                This route is ready for founder, staff, and mission detail later.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                If a later phase adds biographies, certifications, facility
                photos, testimonials, or media, this structure can absorb that
                content without disrupting the current navigation or metadata
                system.
              </p>
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
