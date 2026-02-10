import type { Metadata } from "next";
import ProgramSchedulePage from "@/modules/landing/program/ProgramSchedulePage";

export const metadata: Metadata = {
  title: "Program Schedule",
  description:
    "View the EBISION 2026 program schedule. Conference sessions, keynote talks, paper presentations, and special sessions at Kookmin University, Seoul, South Korea.",
  keywords: [
    "EBISION 2026 program",
    "conference schedule",
    "session program",
    "keynote schedule",
    "paper presentations",
  ],
  openGraph: {
    title: "Program Schedule — EBISION 2026",
    description: "View the EBISION 2026 program schedule at Kookmin University, Seoul.",
  },
  twitter: {
    title: "Program Schedule — EBISION 2026",
    description: "View the EBISION 2026 program schedule.",
  },
  alternates: {
    canonical: "/program",
  },
};

export default async function ProgramRoute({
  searchParams,
}: {
  searchParams?: Promise<{ conf?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const raw = resolvedSearchParams?.conf?.toLowerCase();
  const conf = raw === "ebision" ? "ebision" : "mobisec";

  return <ProgramSchedulePage conf={conf} />;
}
