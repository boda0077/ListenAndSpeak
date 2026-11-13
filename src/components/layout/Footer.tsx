import { siteConfig } from "@/config/site";
import styles from "./Footer.module.css";

const footerLinks = [
  { label: "Why voice", href: "#why-voice" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Questions", href: "#faq" },
] as const;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandColumn}>
          <a href="#top" className={styles.brand} aria-label="L&S — Listen and Speak, back to top">
            <span className={styles.monogram}>L&amp;S</span>
            <span className={styles.wordmark}>{siteConfig.tagline}</span>
          </a>
          <p>A little more room to speak, one conversation at a time.</p>
        </div>

        <nav aria-label="Footer navigation" className={styles.linkColumn}>
          <h2>Explore</h2>
          {footerLinks.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.linkColumn}>
          <h2>Say hello</h2>
          <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
            Instagram {siteConfig.instagramHandle}
          </a>
          <p className={styles.promise}>
            Your conversations are private. We will only ask for the details needed to arrange a session.
          </p>
        </div>
      </div>
      <div className={`container ${styles.disclaimer}`}>
        <p>
          Note: L&amp;S (Listen and Speak) is a peer active-listening and conversation confidence service, not licensed medical therapy, psychiatric care, or crisis counseling.
        </p>
        <p className={styles.copyright}>© {new Date().getFullYear()} L&amp;S — Listen and Speak</p>
      </div>
    </footer>
  );
}
