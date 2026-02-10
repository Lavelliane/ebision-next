import type { Metadata } from "next";
import OverviewPage from "@/modules/landing/overview/components/OverviewPage";

export const metadata: Metadata = {
  title: "Overview",
  description:
    "EBISION 2026 — Explore the paradigm shift in E-Business Information Systems through multidisciplinary perspectives spanning technology, organizations, society, culture, and global infrastructures.",
  keywords: [
    "EBISION 2026",
    "E-Business Information Systems",
    "IFIP WG 8.4",
    "digital transformation",
    "AI in business",
    "quantum computing",
    "6G networks",
    "cloud ecosystems",
    "blockchain",
    "Web 3.0",
  ],
  openGraph: {
    title: "Overview — EBISION 2026",
    description:
      "Explore the paradigm shift in E-Business Information Systems through multidisciplinary perspectives.",
  },
  twitter: {
    title: "Overview — EBISION 2026",
    description: "Explore the paradigm shift in E-Business Information Systems.",
  },
  alternates: {
    canonical: "/overview",
  },
};

const page = () => {
  return <OverviewPage />;
};

export default page;
