export const siteName = "Hitmen Athletics";

export const siteTagline =
  "Premium football and speed development with a sharp, athlete-first presentation.";

export const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs/7v7", label: "7v7" },
  { href: "/programs/speed-lab", label: "Speed Lab" },
  { href: "/programs/position-lab", label: "Position Lab" },
  { href: "/contact", label: "Contact" },
] as const;

export const performancePillars = [
  {
    title: "Game-speed development",
    description:
      "Training language, visuals, and layouts are built around translating preparation into confident on-field execution.",
  },
  {
    title: "Position-aware coaching",
    description:
      "Each program emphasizes the details athletes need by role instead of relying on one-size-fits-all messaging.",
  },
  {
    title: "Premium presentation",
    description:
      "The Phase 1 site system uses reusable sections, strong hierarchy, and mobile-first layouts that can grow with the brand.",
  },
] as const;

export const culturePillars = [
  {
    title: "Intentional reps",
    description:
      "Every section of the site frames development around purposeful work, clarity, and repeatable standards.",
  },
  {
    title: "Competitive edge",
    description:
      "The brand voice stays direct and confident without relying on unverified claims or inflated numbers.",
  },
  {
    title: "Launch-ready structure",
    description:
      "Placeholder-only contact and logo content keeps the build production-safe until official assets and details are approved.",
  },
] as const;

export const launchReviewItems = [
  "Replace the placeholder logo asset with the official Hitmen Athletics brand mark.",
  "Add verified contact details, response workflow, and any approved registration destination.",
  "Review page copy with coaching leadership for tone, terminology, and any program-specific factual updates.",
  "Confirm whether a future phase should add forms, scheduling, roster content, or media galleries.",
] as const;

export const contactPlaceholders = [
  {
    title: "Email contact",
    description:
      "Add the official inbox or routed coaching email after it has been approved for public use.",
  },
  {
    title: "Phone or text line",
    description:
      "Insert the verified athlete or parent contact number only after the team confirms ownership and support hours.",
  },
  {
    title: "Training location and hours",
    description:
      "Publish facility details, session windows, and arrival guidance once they are finalized for public release.",
  },
] as const;
