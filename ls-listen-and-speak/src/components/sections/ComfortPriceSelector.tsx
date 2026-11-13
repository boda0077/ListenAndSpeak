"use client";

import { useState, type CSSProperties } from "react";
import { siteConfig } from "@/config/site";
import type { PricingTier } from "@/data/pricing";
import Button from "@/components/ui/Button";
import styles from "./ComfortPriceSelector.module.css";

type ComfortPriceSelectorProps = {
  minimum: number;
  maximum: number;
  initial: number;
  tiers: readonly PricingTier[];
};

type RateStyle = CSSProperties & { "--rate-progress": string };

export default function ComfortPriceSelector({
  minimum,
  maximum,
  initial,
  tiers,
}: ComfortPriceSelectorProps) {
  const [amount, setAmount] = useState(initial);
  const activeTier =
    tiers.find((tier) => amount >= tier.minPrice && amount <= tier.maxPrice) ?? tiers[0];
  const progress = ((amount - minimum) / (maximum - minimum)) * 100;
  const sliderStyle: RateStyle = { "--rate-progress": String(progress / 100) };

  return (
    <div className={styles.selector}>
      <div className={styles.selectorHeader}>
        <div>
          <p className={styles.selectorEyebrow}>Your comfort comes first</p>
          <label className={styles.sliderLabel} htmlFor="comfort-rate">
            Choose your hourly rate
          </label>
        </div>
        <output className={styles.amount} htmlFor="comfort-rate">
          <span key={amount} className={styles.amountValue}>${amount}</span>
          <span className={styles.amountUnit}>/ hour</span>
        </output>
      </div>

      <div className={styles.sliderArea}>
        <div className={styles.track} aria-hidden="true">
          <span className={styles.trackFill} style={sliderStyle} />
        </div>
        <input
          className={styles.slider}
          id="comfort-rate"
          type="range"
          min={minimum}
          max={maximum}
          step={1}
          value={amount}
          style={sliderStyle}
          aria-valuetext={`$${amount} per hour. ${activeTier.focus}: ${activeTier.name}.`}
          aria-describedby="comfort-rate-hint"
          onChange={(event) => setAmount(event.currentTarget.valueAsNumber)}
        />
        <div className={styles.rangeMarks} aria-hidden="true">
          <span>${minimum}</span>
          <span>${maximum}</span>
        </div>
      </div>

      <p className={styles.sliderHint} id="comfort-rate-hint">
        Move the slider or use your arrow keys to find an amount that feels manageable.
      </p>

      <div className={styles.focusPreview} aria-live="polite" aria-atomic="true">
        <span className={styles.previewRule} aria-hidden="true" />
        <div>
          <span className={styles.previewEyebrow}>At this rate</span>
          <h3>{activeTier.name}</h3>
          <p>{activeTier.focus} · {activeTier.description}</p>
        </div>
      </div>

      <Button
        className={styles.selectButton}
        href={siteConfig.bookingUrl}
        target="_blank"
        rel="noreferrer"
        data-comfort-price={amount}
        data-comfort-name={activeTier.name}
        data-comfort-focus={activeTier.focus}
        aria-haspopup="dialog"
      >
        Continue with ${amount} / hour
        <svg viewBox="0 0 18 18" aria-hidden="true" width="16" height="16">
          <path d="M3.5 9h10m-4-4 4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </Button>
    </div>
  );
}
