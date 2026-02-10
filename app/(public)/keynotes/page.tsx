import type { Metadata } from "next";
import KeynotesPage from "@/modules/landing/keynotes/components/KeynotesPage";

export const metadata: Metadata = {
  title: "Keynote Speakers",
  description:
    "Meet the distinguished keynote speakers at EBISION 2026, featuring leading experts in cybersecurity, quantum computing, cellular networks, and E-Business Information Systems.",
  keywords: [
    "EBISION 2026 keynotes",
    "keynote speakers",
    "cybersecurity",
    "quantum computing",
    "cellular networks",
    "anomaly detection",
    "post-quantum cryptography",
  ],
  openGraph: {
    title: "Keynote Speakers — EBISION 2026",
    description:
      "Meet the distinguished keynote speakers at EBISION 2026 featuring leading experts in cybersecurity and emerging technologies.",
  },
  twitter: {
    title: "Keynote Speakers — EBISION 2026",
    description: "Meet the distinguished keynote speakers at EBISION 2026.",
  },
  alternates: {
    canonical: "/keynotes",
  },
};

const page = () => {
  return <KeynotesPage />;
};

export default page;
