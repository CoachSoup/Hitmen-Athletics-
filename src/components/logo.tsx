import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "header" | "hero" | "footer";
  showSupportLabel?: boolean;
};

export function Logo({
  variant = "header",
  showSupportLabel = false,
}: LogoProps) {
  const imageClassName =
    variant === "hero"
      ? "h-auto w-[12.5rem] sm:w-[14.5rem]"
      : variant === "footer"
        ? "h-auto w-[10.5rem] sm:w-[12.5rem]"
        : "h-auto w-[9.75rem] sm:w-[11.5rem]";
  const frameClassName =
    variant === "hero"
      ? "logo-frame rounded-[1.75rem] p-4"
      : "logo-frame rounded-[1.4rem] p-3";

  return (
    <Link
      href="/"
      className="inline-flex flex-col gap-3 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
      aria-label="Hitmen Athletics home"
    >
      <span className={frameClassName}>
        <Image
          src="/brand/hitmen-primary-logo.png"
          alt="Hitmen Athletics logo"
          width={200}
          height={74}
          className={imageClassName}
          priority
        />
      </span>
      <span className="flex flex-col">
        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-zinc-100">
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
