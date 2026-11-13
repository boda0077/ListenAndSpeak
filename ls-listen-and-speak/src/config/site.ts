export const siteConfig = {
  brand: "L&S — Listen and Speak",
  shortBrand: "L&S",
  tagline: "LISTEN & SPEAK",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  instagramHandle: "@listen_and_sp3ak",
  instagramUrl: "https://www.instagram.com/listen_and_sp3ak/",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "https://www.instagram.com/listen_and_sp3ak/",
  locale: "en",
  currency: "USD",
} as const;
