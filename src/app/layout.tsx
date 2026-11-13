/* eslint-disable @next/next/no-page-custom-font -- The App Router places preconnects and Google Font CSS in the root layout. */
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import BookingModal from "@/components/sections/BookingModal";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { siteConfig } from "@/config/site";
import { createFaqPageSchema, createServiceSchema, serializeJsonLd } from "@/lib/schema";
import "@/styles/globals.css";

const title = "L&S — Listen and Speak | Private Voice-Only Listening & Confidence Support";
const description =
  "A quiet, private place to be heard. L&S offers voice-only active-listening sessions for shy people and anyone who wants more ease in conversation. Cameras off, at your pace.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title,
  description,
  applicationName: siteConfig.brand,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", url: siteConfig.siteUrl, siteName: siteConfig.brand, title, description },
  twitter: { card: "summary", title, description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F9F8F6",
};

type RootLayoutProps = Readonly<{ children: ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
  const serviceSchema = serializeJsonLd(createServiceSchema());
  const faqSchema = serializeJsonLd(createFaqPageSchema());

  return (
    <html lang={siteConfig.locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skipLink" href="#main-content">Skip to content</a>
        <ScrollProgress />
        <Header />
        {children}
        <Footer />
        <BookingModal />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceSchema }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      </body>
    </html>
  );
}
