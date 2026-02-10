import type { Metadata } from "next";
import AuthorInstructionPage from "@/modules/landing/author-instruction/components/AuthorInstructionPage";

export const metadata: Metadata = {
  title: "Author Instructions",
  description:
    "Complete author instructions and submission guidelines for EBISION 2026. Paper formatting, submission requirements, important deadlines, and publication guidelines for the IFIP WG 8.4 International Symposium.",
  keywords: [
    "EBISION 2026 author instructions",
    "paper submission guidelines",
    "conference paper format",
    "EasyChair submission",
    "author guidelines",
    "paper template",
  ],
  openGraph: {
    title: "Author Instructions — EBISION 2026",
    description: "Complete author instructions and submission guidelines for EBISION 2026.",
  },
  twitter: {
    title: "Author Instructions — EBISION 2026",
    description: "Complete author instructions and submission guidelines for EBISION 2026.",
  },
  alternates: {
    canonical: "/author-instruction",
  },
};

const page = () => {
  return <AuthorInstructionPage />;
};

export default page;
