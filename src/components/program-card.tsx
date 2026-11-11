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
      <h3 className="mt-3 text-2xl font-semibold text-white">{program.name}</h3>
      <p className="mt-4 text-base leading-7 text-slate-300">
        {program.shortDescription}
      </p>

      <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-200">
        {program.focusAreas.slice(0, 3).map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <ButtonLink href={`/programs/${program.slug}`} className="mt-8 w-fit">
        Explore {program.name}
      </ButtonLink>
    </article>
  );
}
