import { whyVoiceFeatures } from "@/data/features";
import RevealSection from "@/components/ui/RevealSection";
import styles from "./sections.module.css";

export default function WhyVoice() {
  return (
    <RevealSection id="why-voice" labelledBy="why-voice-title" className={styles.whySection}>
      <div className="container">
        <div className={styles.sectionIntroBlock}>
          <p className="eyebrow">A softer starting point</p>
          <h2 id="why-voice-title" className="sectionHeading">Let your words come before the picture.</h2>
          <p className="sectionIntro">
            Taking away the camera can make a conversation feel simpler. You can settle in, listen, and speak without watching yourself.
          </p>
        </div>
        <div className={styles.featureGrid}>
          {whyVoiceFeatures.map((feature, index) => (
            <article className={styles.featureCard} key={feature.title}>
              <span className={styles.cardIndex}>0{index + 1}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
