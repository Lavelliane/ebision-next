import type { Metadata } from "next";
import ContactPage from "@/modules/landing/contact/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the EBISION 2026 organizing committee. Contact the cyber chair for inquiries about submissions, registration, or the IFIP WG 8.4 International Symposium.",
  keywords: [
    "EBISION 2026 contact",
    "conference contact",
    "organizing committee",
    "IFIP WG 8.4 contact",
    "conference inquiry",
  ],
  openGraph: {
    title: "Contact Us — EBISION 2026",
    description: "Get in touch with the EBISION 2026 organizing committee for general inquiries.",
  },
  twitter: {
    title: "Contact Us — EBISION 2026",
    description: "Get in touch with the EBISION 2026 organizing committee.",
  },
  alternates: {
    canonical: "/contact",
  },
};

const page = () => {
  return <ContactPage />;
};

export default page;
