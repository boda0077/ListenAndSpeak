export type EditorialItem = {
  title: string;
  description: string;
};

export type ProcessStep = EditorialItem & {
  number: string;
};

export const whyVoiceFeatures = [
  {
    title: "Zero camera pressure",
    description:
      "Stay in your own space and speak without thinking about how you look or what your face is doing. Your camera stays off, always.",
  },
  {
    title: "Real human presence",
    description:
      "There are no scripts or rushed replies. Just a calm person giving you their attention and following your pace.",
  },
  {
    title: "Room to find your voice",
    description:
      "Say a little, say a lot, or take a moment. A low-pressure conversation can make it easier to speak up in everyday life.",
  },
] as const satisfies readonly EditorialItem[];

export const howItWorksSteps = [
  {
    number: "01",
    title: "Choose what feels comfortable",
    description:
      "Pick a listening style and session length. If booking feels like a big step, you can say hello on Instagram first.",
  },
  {
    number: "02",
    title: "Meet by voice, camera off",
    description:
      "Join a private voice-only conversation. You can use a nickname and do not need to share a personal phone number.",
  },
  {
    number: "03",
    title: "Take the conversation at your pace",
    description:
      "Talk, vent, pause, or warm up slowly. Your listener is there to give you space and attention, without judgment.",
  },
] as const satisfies readonly ProcessStep[];
