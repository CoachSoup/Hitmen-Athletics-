import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { MainNav } from "@/components/main-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(0,0,0,0.94)] backdrop-blur-xl">
      <Container className="py-4 sm:py-5">
        <div className="flex flex-col gap-4">
          <div className="flex justify-center">
            <Logo variant="masthead" />
          </div>

          <div className="hidden items-center justify-center gap-4 lg:flex">
            <MainNav />
            <ButtonLink href="/contact" className="px-4 py-2 text-xs">
              Start the conversation
            </ButtonLink>
          </div>

          <div className="flex items-center justify-between gap-3 lg:hidden">
            <ButtonLink href="/contact" className="px-4 py-2 text-xs">
              Contact
            </ButtonLink>

            <details className="group relative">
              <summary className="list-none rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold tracking-[0.18em] uppercase text-white marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
                Menu
              </summary>
              <div className="absolute right-0 top-14 w-[min(22rem,calc(100vw-3rem))] rounded-3xl border border-white/10 bg-[rgba(3,3,3,0.98)] p-4 shadow-2xl shadow-black/50">
                <p className="px-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                  Explore the site
                </p>
                <MainNav stacked />
                <ButtonLink href="/contact" className="mt-4 w-full justify-center">
                  Start the conversation
                </ButtonLink>
              </div>
            </details>
          </div>
        </div>
      </Container>
    </header>
  );
}
