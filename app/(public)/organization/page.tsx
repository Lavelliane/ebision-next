import type { Metadata } from "next";
import OrganizationPage from "@/modules/landing/organization/components/OrganizationPage";

export const metadata: Metadata = {
  title: "Symposium Organization",
  description:
    "Meet the EBISION 2026 organizing committee including General Chair, Main Organizers, and Web Chairs. Organized and hosted by IFIP WG 8.4.",
  keywords: [
    "EBISION 2026 organization",
    "conference committee",
    "IFIP WG 8.4",
    "organizing committee",
    "general chair",
  ],
  openGraph: {
    title: "Symposium Organization — EBISION 2026",
    description: "Meet the EBISION 2026 organizing committee. Organized and hosted by IFIP WG 8.4.",
  },
  twitter: {
    title: "Symposium Organization — EBISION 2026",
    description: "Meet the EBISION 2026 organizing committee.",
  },
  alternates: {
    canonical: "/organization",
  },
};

const page = () => {
  return <OrganizationPage />;
};

export default page;
