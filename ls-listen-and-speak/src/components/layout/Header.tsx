import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import styles from "./Header.module.css";

const navigation = [
  { label: "Why voice", href: "#why-voice" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a className={styles.brand} href="#top" aria-label="L&S — Listen and Speak, home">
          <span className={styles.monogram}>L&amp;S</span>
          <span className={styles.wordmark}>{siteConfig.tagline}</span>
        </a>

        <nav aria-label="Main navigation" className={styles.navigation}>
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button
            className={styles.instagram}
            href={siteConfig.instagramUrl}
            variant="secondary"
            target="_blank"
            rel="noreferrer"
          >
            DM on Instagram
          </Button>
          <Button
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noreferrer"
            data-booking-trigger="true"
            aria-haspopup="dialog"
          >
            Book a voice call
          </Button>
        </div>
      </div>
    </header>
  );
}
