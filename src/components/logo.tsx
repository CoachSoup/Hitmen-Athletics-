import Link from "next/link";

type LogoProps = {
  variant?: "header" | "hero" | "footer" | "masthead";
  showSupportLabel?: boolean;
};

export function Logo({
  variant = "header",
  showSupportLabel = false,
}: LogoProps) {
  const mediaClassName =
    variant === "hero"
      ? "h-[72px] w-[12.5rem] sm:h-[84px] sm:w-[14.5rem]"
      : variant === "masthead"
        ? "h-[78px] w-full max-w-[16rem] sm:h-[96px] sm:max-w-[20rem] lg:h-[124px] lg:max-w-[26rem] xl:h-[148px] xl:max-w-[30rem]"
      : variant === "footer"
        ? "h-[62px] w-[10.5rem] sm:h-[74px] sm:w-[12.5rem]"
        : "h-[58px] w-[9.75rem] sm:h-[68px] sm:w-[11.5rem]";
  const frameClassName =
    variant === "masthead"
      ? "logo-frame w-full max-w-[44rem] justify-center rounded-[2rem] px-4 py-4 sm:px-6 sm:py-5"
      : variant === "hero"
      ? "logo-frame rounded-[1.75rem] p-4"
      : "logo-frame rounded-[1.4rem] p-3";

  return (
    <Link
      href="/"
      className={`inline-flex flex-col gap-3 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] ${
        variant === "masthead" ? "w-full items-center" : ""
      }`}
      aria-label="Hitmen Athletics home"
    >
      <span className={frameClassName}>
        <object
          data="/brand/hitmen-replacement-logo.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
          type="application/pdf"
          aria-label="Hitmen Athletics logo"
          className={`pointer-events-none block border-0 bg-transparent ${mediaClassName}`}
        >
          <div className="flex h-full w-full items-center justify-center px-4 text-center text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
            Hitmen Athletics
          </div>
        </object>
      </span>
      <span className={`flex flex-col ${variant === "masthead" ? "items-center text-center" : ""}`}>
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
