export type PricingTier = {
  id: string;
  name: string;
  focus: string;
  minPrice: number;
  maxPrice: number;
  description: string;
};

export const pricingRange = {
  minimum: 5,
  maximum: 60,
  initial: 20,
} as const;

export const pricingTiers = [
  {
    id: "warm-up",
    name: "Warm-Up & Quiet Company",
    focus: "Gentle focus",
    minPrice: 5,
    maxPrice: 19,
    description:
      "Low-pressure voice presence, easy small talk, or comfortable silence until you feel ready to speak.",
  },
  {
    id: "open-vent",
    name: "Open Vent & Active Listening",
    focus: "Full focus",
    minPrice: 20,
    maxPrice: 39,
    description:
      "A dedicated one-to-one session for whatever is on your mind, met with warm, uninterrupted attention.",
  },
  {
    id: "confidence",
    name: "Confidence & Speaking Practice",
    focus: "Deep focus",
    minPrice: 40,
    maxPrice: 59,
    description:
      "Practice conversations, find your words, and try new ways of expressing yourself at your own pace.",
  },
  {
    id: "priority",
    name: "Priority Deep-Dive & Undivided Presence",
    focus: "Priority focus",
    minPrice: 60,
    maxPrice: 60,
    description:
      "A longer, high-attention conversation with thoughtful guidance and priority scheduling.",
  },
] as const satisfies readonly PricingTier[];
