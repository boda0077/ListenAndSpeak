import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import RevealSection from "@/components/ui/RevealSection";
import styles from "./sections.module.css";

export default function InstagramBridge() {
  return (
    <RevealSection id="instagram-bridge" labelledBy="instagram-title" className={styles.bridgeSection}>
      <div className={`container ${styles.bridgeCard}`}>
        <div className={styles.bridgeCopy}>
          <p className="eyebrow">A hello is enough</p>
          <h2 id="instagram-title" className="sectionHeading">Booking can wait. Start with a message.</h2>
          <p>
            If clicking “book” feels like too much right now, send us a simple “Hi” on Instagram. You can ask a question, exchange a voice note, or take your time before deciding about a call.
          </p>
          <Button href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" variant="secondary">
            Message {siteConfig.instagramHandle}
            <svg viewBox="0 0 18 18" aria-hidden="true" width="16" height="16">
              <path d="M4 14 14 4M5 4h9v9" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Button>
        </div>
        <div className={styles.messageNote} aria-label="Example of a first Instagram message">
          <span className={styles.messageLabel}>Your first message can be just</span>
          <span className={styles.messageHi}>Hi</span>
          <span className={styles.messageHandle}>to {siteConfig.instagramHandle}</span>
        </div>
      </div>
    </RevealSection>
  );
}
