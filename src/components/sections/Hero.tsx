import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import RevealSection from "@/components/ui/RevealSection";
import VoiceWave from "@/components/ui/VoiceWave";
import styles from "./sections.module.css";

export default function Hero() {
  return (
    <RevealSection
      id="hero"
      labelledBy="hero-title"
      revealOnScroll={false}
      className={styles.hero}
    >
      <div className={`container ${styles.heroLayout}`}>
        <div className={styles.heroCopy}>
          <p className="eyebrow">L&amp;S — Listen &amp; Speak · Voice only · Cameras off</p>
          <h1 id="hero-title">
            A quiet, safe place to be heard
            <span>—until speaking feels easier.</span>
          </h1>
          <p className={styles.heroLead}>
            If talking in public makes your heart race, start here. L&amp;S offers a private, judgment-free voice conversation with a dedicated listener—at a pace that feels manageable to you.
          </p>
          <div className={styles.heroActions}>
            <Button
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noreferrer"
              data-booking-trigger="true"
              aria-haspopup="dialog"
            >
              Reserve a voice session
              <svg viewBox="0 0 18 18" aria-hidden="true" width="16" height="16">
                <path d="M3.5 9h10m-4-4 4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Button>
            <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className={styles.heroSoftLink}>
              Too shy to book? Say hi on Instagram
            </a>
          </div>
          <div className={styles.heroNote}>
            <span className={styles.noteRule} aria-hidden="true" />
            <p>No camera. No pressure to perform. Just a little room to speak.</p>
          </div>
        </div>

        <aside className={styles.voiceCard} aria-label="A calm voice-only listening session">
          <div className={styles.voiceCardTop}>
            <span className={styles.voiceCardKicker}>A quieter kind of connection</span>
            <span className={styles.liveMark}>
              <span aria-hidden="true" /> Voice only
            </span>
          </div>
          <div className={styles.voiceVisual}>
            <div className={styles.waveFrame}>
              <VoiceWave />
            </div>
            <p className={styles.visualCaption}>Take your time. I’m listening.</p>
          </div>
          <div className={styles.voiceCardBottom}>
            <span>Private conversation</span>
            <span className={styles.cameraOff}>Camera stays off</span>
          </div>
        </aside>
      </div>
    </RevealSection>
  );
}
