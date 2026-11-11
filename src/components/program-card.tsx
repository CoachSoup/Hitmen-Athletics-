import type { Program } from "@/lib/programs";
import { ButtonLink } from "@/components/button-link";

type ProgramCardProps = {
  program: Program;
};

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <article className="surface-card flex h-full flex-col rounded-[1.75rem] p-6 sm:p-7">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
        {program.eyebrow}
      </p>
      <h3 className="mt-3 text-2xl font-semibold text-[var(--accent)]">{program.name}</h3>
      <p className="mt-4 text-base leading-7 text-zinc-200">
        {program.shortDescription}
      </p>

      <p className="mt-5 text-sm leading-7 text-zinc-100/90">{program.audience}</p>

      <ul className="mt-6 space-y-3 text-sm leading-6 text-zinc-100/90">
        {program.focusAreas.slice(0, 3).map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {program.idealFor.slice(0, 1).map((item) => (
          <span
            key={item}
            className="rounded-full border border-[var(--accent)]/40 bg-[var(--accent-soft)] px-3 py-1.5 text-xs font-semibold tracking-wide text-[var(--accent)]"
          >
            {item}
          </span>
        ))}
      </div>

      <ButtonLink href={`/programs/${program.slug}`} className="mt-8 w-fit">
        Explore {program.name}
      </ButtonLink>
    </article>
  );
}
