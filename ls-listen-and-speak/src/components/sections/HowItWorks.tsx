import { howItWorksSteps } from "@/data/features";
import RevealSection from "@/components/ui/RevealSection";
import styles from "./sections.module.css";

export default function HowItWorks() {
  return (
    <RevealSection id="how-it-works" labelledBy="how-title" className={styles.howSection}>
      <div className="container">
        <div className={styles.sectionIntroBlock}>
          <p className="eyebrow">Small steps, your way</p>
          <h2 id="how-title" className="sectionHeading">Nothing to rehearse. Nowhere to rush.</h2>
          <p className="sectionIntro">
            From the first hello to the last minute, we make space for the way you feel today.
          </p>
        </div>
        <ol className={styles.stepsList}>
          {howItWorksSteps.map((step) => (
            <li className={styles.step} key={step.number}>
              <span className={styles.stepNumber} aria-hidden="true">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </RevealSection>
  );
}
