import type { Metadata } from "next";

import { siteName, siteTagline } from "@/lib/site";

export const rootMetadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteTagline,
  applicationName: siteName,
  category: "sports",
  creator: siteName,
  keywords: [
    "football training",
    "speed development",
    "7v7",
    "position training",
    "athlete performance",
    "Hitmen Athletics",
  ],
  openGraph: {
    title: siteName,
    description: siteTagline,
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteTagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function buildMetadata(title: string, description: string): Metadata {
  const fullTitle = `${title} | ${siteName}`;

  return {
    title,
    description,
    openGraph: {
      title: fullTitle,
      description,
      siteName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
