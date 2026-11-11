import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  showSupportLabel?: boolean;
};

export function Logo({ showSupportLabel = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="inline-flex flex-col gap-2 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
      aria-label="Hitmen Athletics home"
    >
      <Image
        src="/brand/hitmen-primary-logo.png"
        alt="Hitmen Athletics logo"
        width={200}
        height={74}
        className="h-auto w-[9.5rem] sm:w-[11.5rem]"
        priority
      />
      <span className="flex flex-col">
        <span className="text-[0.68rem] uppercase tracking-[0.24em] text-slate-300">
          Speed. Skill. Competitive development.
        </span>
        {showSupportLabel ? (
          <span className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--accent)]">
            Competition / swag asset preserved separately
          </span>
        ) : null}
      </span>
    </Link>
  );
}
