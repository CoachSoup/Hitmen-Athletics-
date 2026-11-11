import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  showPlaceholderLabel?: boolean;
};

export function Logo({ showPlaceholderLabel = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
      aria-label="Hitmen Athletics home"
    >
      <Image
        src="/brand/hitmen-placeholder-mark.svg"
        alt="Hitmen Athletics placeholder logo"
        width={48}
        height={48}
        priority
      />
      <span className="flex flex-col">
        <span className="text-sm font-semibold uppercase tracking-[0.32em] text-white">
          Hitmen Athletics
        </span>
        <span className="text-xs text-slate-300">
          Speed. Skill. Competitive development.
        </span>
        {showPlaceholderLabel ? (
          <span className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--accent)]">
            Placeholder brand mark
          </span>
        ) : null}
      </span>
    </Link>
  );
}
