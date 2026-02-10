import type { Metadata } from "next";
import AnnouncementPage from "@/modules/landing/announcement/components/AnnouncementPage";

export const metadata: Metadata = {
  title: "Awards Nomination",
  description:
    "EBISION 2026 Awards Nomination — Best Paper, Best Student Paper, Exemplary Lecturer, Young Researcher, Promising Graduate Student, and Industry Pioneer Awards. Learn about categories and nomination requirements.",
  keywords: [
    "EBISION 2026 awards",
    "awards nomination",
    "best paper award",
    "student paper award",
    "exemplary lecturer award",
    "young researcher award",
    "industry pioneer award",
  ],
  openGraph: {
    title: "Awards Nomination — EBISION 2026",
    description:
      "EBISION 2026 Awards Nomination. Learn about award categories and nomination requirements.",
  },
  twitter: {
    title: "Awards Nomination — EBISION 2026",
    description:
      "EBISION 2026 Awards Nomination. Learn about award categories and nomination requirements.",
  },
  alternates: {
    canonical: "/announcement",
  },
};

const page = () => {
  return <AnnouncementPage />;
};

export default page;
