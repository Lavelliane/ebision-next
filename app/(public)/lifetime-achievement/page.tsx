import type { Metadata } from "next";
import LifetimeAchievementPage from "@/modules/landing/lifetime-achievement/components/LifetimeAchievementPage";

export const metadata: Metadata = {
  title: "Lifetime Achievement Award",
  description:
    "Meet Prof. Okyeon Yi, recipient of the EBISION 2026 Lifetime Achievement Award. Recognizing outstanding contributions to E-Business Information Systems, cybersecurity, and mobile network security.",
  keywords: [
    "EBISION 2026 lifetime achievement",
    "Prof. Okyeon Yi",
    "Kookmin University",
    "cybersecurity",
    "mobile network security",
    "6G security",
    "cryptography",
    "conference award",
  ],
  openGraph: {
    title: "Lifetime Achievement Award — EBISION 2026",
    description: "Meet Prof. Okyeon Yi, recipient of the EBISION 2026 Lifetime Achievement Award.",
  },
  twitter: {
    title: "Lifetime Achievement Award — EBISION 2026",
    description: "Meet Prof. Okyeon Yi, recipient of the EBISION 2026 Lifetime Achievement Award.",
  },
  alternates: {
    canonical: "/lifetime-achievement",
  },
};

const page = () => {
  return <LifetimeAchievementPage />;
};

export default page;
