export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems = [
  {
    id: "camera",
    question: "Do I ever have to turn on my camera or show my face?",
    answer:
      "No. L&S is voice-only, so there is no camera and no pressure to show your face. You can join from wherever you feel comfortable.",
  },
  {
    id: "freeze",
    question: "What if I freeze up or do not know what to say?",
    answer:
      "That is completely okay. We can take our time, start with a simple question, or sit quietly for a moment. You do not need to prepare anything.",
  },
  {
    id: "anonymous",
    question: "Can I stay anonymous?",
    answer:
      "You can use a nickname and begin with an Instagram message if that feels easier. Before a session, we will agree on a private way to connect by voice.",
  },
  {
    id: "scheduling",
    question: "How do payments and scheduling work?",
    answer:
      "Sessions are booked at a clear hourly rate before you begin. Message us on Instagram to arrange a time, ask about payment, or reschedule.",
  },
  {
    id: "therapy",
    question: "Is L&S therapy or crisis support?",
    answer:
      "No. L&S is a peer active-listening and conversation confidence service. It is not therapy, medical care, or crisis counseling.",
  },
] as const satisfies readonly FaqItem[];
