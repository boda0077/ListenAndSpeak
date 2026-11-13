import FaqAccordion from "@/components/sections/FaqAccordion";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import InstagramBridge from "@/components/sections/InstagramBridge";
import PricingSection from "@/components/sections/PricingSection";
import WhyVoice from "@/components/sections/WhyVoice";

export default function HomePage() {
  return (
    <main id="main-content">
      <div id="top"><Hero /></div>
      <WhyVoice />
      <HowItWorks />
      <PricingSection />
      <InstagramBridge />
      <FaqAccordion />
    </main>
  );
}
