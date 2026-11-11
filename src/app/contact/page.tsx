import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata } from "@/lib/metadata";
import {
  contactFlowCards,
  inquiryPreparationChecklist,
  launchReviewItems,
  publicContactLinks,
} from "@/lib/site";

export const metadata = buildMetadata(
  "Contact",
  "Contact Hitmen Athletics through the live public email and phone details while remaining operational placeholders stay explicit."
);

const inquirySteps = [
  "Use the live public email or phone link for direct outreach.",
  "Include the athlete's program interest, goals, and any timing details that matter for the conversation.",
  "Layer in any future form or registration workflow only after the team approves it.",
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact structure"
        title="Direct contact is now live, with remaining operational details still clearly pending."
        description="Families can now reach Hitmen Athletics through public email and phone contact while the site continues to keep unverified logistics like location, schedules, forms, and registration handoff explicit."
        aside={
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              Important note
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Live email and phone contact are now in place. Form handlers, maps,
              schedules, registration tooling, and social links are still pending.
            </p>
          </div>
        }
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="mailto:AdamSisouphanh5@gmail.com"
            className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-[0_16px_40px_rgba(240,196,105,0.22)] motion-safe:transition-all motion-safe:duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:bg-[var(--accent-strong)] motion-reduce:transition-none"
          >
            Email Adam
          </a>
          <a
            href="tel:+18014040798"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white motion-safe:transition-all motion-safe:duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-[var(--accent)] motion-safe:hover:bg-white/10 motion-reduce:transition-none"
          >
            Call or text
          </a>
          <ButtonLink href="/about" variant="secondary">
            Review brand positioning
          </ButtonLink>
        </div>
      </PageHero>

      <section className="pb-16 sm:pb-20">
        <Container>
          <SectionHeading
            eyebrow="Public contact details"
            title="The live contact options now available on the site."
            description="Email and phone are public and actionable in this phase. Any remaining operational details stay explicit until the team decides they are ready to publish."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {publicContactLinks.map((item) => (
              <article key={item.title} className="surface-card rounded-[1.5rem] p-6">
                <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
                {"href" in item ? (
                  <a
                    href={item.href}
                    className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)] motion-safe:transition-colors motion-safe:hover:text-[var(--accent-strong)]"
                  >
                    {item.ctaLabel}
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-black/10 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Prepare the inquiry"
            title="Make the next step clearer now that direct contact is live."
            description="The page should still help people arrive prepared. That reduces confusion today and makes any future form or registration workflow easier to design later."
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
                Keep only the truly unresolved items as placeholders now: location,
                schedules, response expectations, and any approved registration
                handoff.
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
                lane first, then use the live email or phone contact while the rest
                of the operational flow continues to mature.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:AdamSisouphanh5@gmail.com"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-[0_16px_40px_rgba(240,196,105,0.22)] motion-safe:transition-all motion-safe:duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:bg-[var(--accent-strong)] motion-reduce:transition-none"
                >
                  Start by email
                </a>
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
