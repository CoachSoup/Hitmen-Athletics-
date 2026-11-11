import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="surface-card mx-auto max-w-3xl rounded-[2rem] p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
            Page not found
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            That route is not part of the current Hitmen Phase 1 build.
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Head back to the homepage or review the available program pages that
            were implemented in this release.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink href="/">Return home</ButtonLink>
            <ButtonLink href="/programs/7v7" variant="secondary">
              View programs
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
