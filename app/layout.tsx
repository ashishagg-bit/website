import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://aviishaaya.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dr. Avi Ishaaya Wellness Centers — Beverly Hills",
    template: "%s — Dr. Avi Ishaaya Wellness Centers",
  },
  description:
    "Beverly Hills concierge medical practice led by Dr. Avi Ishaaya, M.D., offering pulmonary, cardiovascular, sleep, allergy, and preventive wellness care.",
  keywords: [
    "Beverly Hills doctor",
    "Dr. Avi Ishaaya",
    "pulmonologist",
    "sleep medicine",
    "preventive medicine",
    "concierge medicine",
    "wellness center",
  ],
  openGraph: {
    title: "Dr. Avi Ishaaya Wellness Centers",
    description:
      "Piece by piece, build a healthier you. Comprehensive concierge care in Beverly Hills.",
    url: SITE_URL,
    siteName: "Dr. Avi Ishaaya Wellness Centers",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Avi Ishaaya Wellness Centers",
    description:
      "Beverly Hills concierge medical practice led by Dr. Avi Ishaaya, M.D.",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Dr. Avi Ishaaya Wellness Centers",
    image: `${SITE_URL}/og.png`,
    url: SITE_URL,
    telephone: "+13239541788",
    email: "info@aviishaaya.com",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9230 West Olympic Boulevard, Second Floor",
      addressLocality: "Beverly Hills",
      addressRegion: "CA",
      postalCode: "90212",
      addressCountry: "US",
    },
    medicalSpecialty: [
      "Pulmonology",
      "SleepMedicine",
      "Cardiovascular",
      "PreventiveMedicine",
      "InternalMedicine",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: "10:00",
        closes: "17:00",
      },
    ],
    founder: {
      "@type": "Physician",
      name: "Dr. Abraham 'Avi' Ishaaya, M.D., FCCP, FAASM, FACGS, MACGS",
    },
  };

  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[var(--cream)] text-[var(--ink)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
