import { faqItems } from "@/data/faq";
import { pricingRange } from "@/data/pricing";
import { siteConfig } from "@/config/site";

export type JsonLdObject = Record<string, unknown>;

export function createServiceSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: siteConfig.brand,
    description:
      "Private voice-only peer active-listening and conversation confidence sessions, at your pace and with cameras off.",
    serviceType: "Peer active listening and conversation confidence",
    provider: {
      "@type": "Organization",
      name: siteConfig.brand,
      url: siteConfig.siteUrl,
      sameAs: [siteConfig.instagramUrl],
    },
    areaServed: "Online",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: siteConfig.siteUrl,
      availableLanguage: siteConfig.locale,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: siteConfig.currency,
      lowPrice: pricingRange.minimum,
      highPrice: pricingRange.maximum,
      url: siteConfig.bookingUrl,
    },
  };
}

export function createFaqPageSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function serializeJsonLd(value: JsonLdObject): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
