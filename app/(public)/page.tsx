import type { Metadata } from "next";
import HomePage from "@/modules/landing/home/components/HomePage";

export const metadata: Metadata = {
  title: "EBISION 2026 — International Symposium on E-Business Information Systems Evolution",
  description:
    "The 2nd IFIP WG 8.4 International Symposium on E-Business Information Systems Evolution. July 8–10, 2026 at Kookmin University, Seoul, South Korea. Submit original research papers on AI, blockchain, cybersecurity, 6G, quantum computing, and more.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomePage />;
}
