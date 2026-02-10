import type { Metadata } from "next";
import { AppProvider } from "@/providers";
import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { SITE_URL, sharedMetadata } from "@/constants/seo";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = sharedMetadata;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "EBISION 2026",
  description:
    "The 2nd IFIP WG 8.4 International Symposium on E-Business Information Systems Evolution",
  startDate: "2026-07-08",
  endDate: "2026-07-10",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Kookmin University",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Seoul",
      addressCountry: "KR",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "IFIP Working Group 8.4",
    url: "https://ifip-wg84.org",
  },
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data is statically defined and safe
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        style={{ scrollBehavior: "smooth" }}
        className={` antialiased min-h-screen bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <AppProvider>
              <main>{children}</main>
            </AppProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
