import { pricingRange, pricingTiers } from "@/data/pricing";
import ComfortPriceSelector from "./ComfortPriceSelector";
import RevealSection from "@/components/ui/RevealSection";
import styles from "./sections.module.css";

export default function PricingSection() {
  return (
    <RevealSection id="pricing" labelledBy="pricing-title" className={styles.pricingSection}>
      <div className="container">
        <div className={styles.pricingIntro}>
          <div>
            <p className="eyebrow">A rate that feels comfortable</p>
            <h2 id="pricing-title" className="sectionHeading">Your comfort sets the pace—and the price.</h2>
          </div>
          <p className={styles.pricingSideNote}>
            Choose any amount from $5 to $60 per hour. Your rate guides the listener focus and session depth; we will confirm the details together before booking.
          </p>
        </div>

        <ComfortPriceSelector
          minimum={pricingRange.minimum}
          maximum={pricingRange.maximum}
          initial={pricingRange.initial}
          tiers={pricingTiers}
        />

        <div className={styles.focusGrid}>
          {pricingTiers.map((tier) => (
            <article className={styles.focusCard} key={tier.id}>
              <p className={styles.focusRate}>
                ${tier.minPrice}{tier.minPrice !== tier.maxPrice ? `–$${tier.maxPrice}` : ""}
                <span> / hour</span>
              </p>
              <h3>{tier.focus}</h3>
              <p>{tier.description}</p>
            </article>
          ))}
        </div>
        <p className={styles.priceFootnote}>
          Every conversation is voice-only. There is no pressure to choose the highest rate; pick the amount that feels right for you.
        </p>
      </div>
    </RevealSection>
  );
}
