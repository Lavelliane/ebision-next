"use client";

import ProgramNavigationBar from "@/components/ProgramNavigationBar";
import ProgramPage from "@/modules/landing/program/ProgramPage";

const conferences = [
  { id: "mobisec", name: "MobiSec 2026" },
  { id: "ebision", name: "EBISION 2026" },
];

export default function ProgramSchedulePage({ conf }: { conf: "mobisec" | "ebision" }) {
  return (
    <div className="min-h-screen bg-background max-w-8xl">
      <ProgramNavigationBar conferences={conferences} currentConf={conf} />
      <main>
        <ProgramPage conferenceName={conf === "mobisec" ? "MobiSec" : "EBISION"} />
      </main>
    </div>
  );
}
