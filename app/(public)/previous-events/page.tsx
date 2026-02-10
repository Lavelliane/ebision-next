import type { Metadata } from "next";
import PreviousEventsPage from "@/modules/landing/previous-events/components/PreviousEventsPage";

export const metadata: Metadata = {
  title: "Previous Events",
  description:
    "Explore the history of EBISION conferences. View past events, host locations, and proceedings from IFIP WG 8.4 International Symposia on E-Business Information Systems Evolution.",
  keywords: [
    "EBISION previous events",
    "EBISION history",
    "past conferences",
    "IFIP WG 8.4 history",
    "EBISION proceedings",
    "Sapporo 2025",
  ],
  openGraph: {
    title: "Previous Events — EBISION 2026",
    description:
      "Explore the history of EBISION conferences and past IFIP WG 8.4 International Symposia.",
  },
  twitter: {
    title: "Previous Events — EBISION 2026",
    description: "Explore the history of EBISION conferences.",
  },
  alternates: {
    canonical: "/previous-events",
  },
};

const page = () => {
  return <PreviousEventsPage />;
};

export default page;
