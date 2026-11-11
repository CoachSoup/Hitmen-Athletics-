import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata } from "@/lib/metadata";
import {
  contactFlowCards,
  contactPlaceholders,
  inquiryPreparationChecklist,
  launchReviewItems,
} from "@/lib/site";

export const metadata = buildMetadata(
  "Contact",
  "Review the placeholder-only contact page structure for Hitmen Athletics before verified operational details are added."
);

const inquirySteps = [
  "Approve the public email, phone, or registration destination that should receive inquiries.",
  "Confirm which questions families should answer first so a future form or workflow can be structured correctly.",
  "Decide whether the next phase should support email only, a form provider, scheduling software, or manual registration.",
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact structure"
        title="A polished contact page without placeholder claims or fake integrations."
        description="This route now feels more operational by helping families understand what to prepare, how the eventual inquiry flow should work, and exactly which public details are still pending approval."
        aside={
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              Important note
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              No form handler, map, email address, phone number, or social link has
              been invented or wired into this phase.
            </p>
          </div>
        }
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="/programs/speed-lab">Review program pages</ButtonLink>
          <ButtonLink href="/about" variant="secondary">
            Review brand positioning
          </ButtonLink>
        </div>
      </PageHero>

      <section className="pb-16 sm:pb-20">
        <Container>
          <SectionHeading
            eyebrow="What needs approval"
            title="Swap these placeholders for verified operating details."
            description="The site is ready for real contact content, but it intentionally keeps each public touchpoint abstract until the Hitmen team signs off on what belongs here."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {contactPlaceholders.map((item) => (
              <article key={item.title} className="surface-card rounded-[1.5rem] p-6">
                <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-black/10 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Prepare the inquiry"
            title="Make the next step clearer even before a live form exists."
            description="A stronger contact page should help people arrive prepared. That reduces confusion now and makes a future real workflow easier to design."
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <article className="surface-card rounded-[1.75rem] p-7 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                Suggested inquiry prep
              </p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
                {inquiryPreparationChecklist.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="surface-card rounded-[1.75rem] p-7 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                Suggested workflow
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                Decide how inquiries should move before adding automation.
              </h2>
              <ol className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                {inquirySteps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] font-semibold text-white ring-1 ring-[var(--accent)]/70">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </article>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="How it should flow"
            title="A clearer placeholder journey from interest to response."
            description="These cards make the eventual handoff feel intentional now, while staying explicit that the final communication path is still to be decided."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {contactFlowCards.map((card) => (
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
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <article className="surface-card rounded-[1.75rem] p-7 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                Before launch
              </p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
                {launchReviewItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="field-note mt-6 rounded-2xl p-5 text-sm leading-7 text-slate-200">
                Keep all placeholder messaging explicit until the team confirms the
                real contact destination, response method, and any approved
                registration handoff.
              </div>
            </article>

            <article className="surface-card rounded-[1.75rem] p-7 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                Where to go next
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                Use the site to narrow the conversation before operations go live.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Families can explore the program pages to identify the best-fit
                lane first, then return here once the organization has approved its
                real public inquiry path.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/programs/7v7">Compare programs</ButtonLink>
                <ButtonLink href="/" variant="secondary">
                  Revisit homepage overview
                </ButtonLink>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
