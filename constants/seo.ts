import type { Metadata } from "next";

const SITE_URL = "https://ebision.ifip-wg84.org";
const SITE_NAME = "EBISION 2026";
const SITE_DESCRIPTION =
  "The 2nd IFIP WG 8.4 International Symposium on E-Business Information Systems Evolution — Kookmin University, Seoul, South Korea, July 8–10, 2026";

const OG_IMAGE = {
  url: `${SITE_URL}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "EBISION 2026 — The 2nd IFIP WG 8.4 International Symposium on E-Business Information Systems Evolution",
  type: "image/png",
};

/** Shared metadata defaults inherited by all pages via root layout. */
export const sharedMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "EBISION 2026",
    "IFIP WG 8.4",
    "E-Business Information Systems",
    "digital transformation",
    "international symposium",
    "Kookmin University",
    "Seoul",
    "South Korea",
    "conference",
    "research",
    "AI",
    "blockchain",
    "cybersecurity",
    "6G",
    "quantum computing",
  ],
  authors: [{ name: "IFIP Working Group 8.4" }],
  creator: "EBISION 2026 Organizing Committee",
  publisher: "IFIP Working Group 8.4",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/android/android-launchericon-192-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/ios/180.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export { SITE_URL, SITE_NAME, SITE_DESCRIPTION, OG_IMAGE };
