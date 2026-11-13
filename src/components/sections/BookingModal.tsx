"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import styles from "./BookingModal.module.css";

type BookingSelection = {
  name: string;
  price: string | null;
  focus: string | null;
};

const generalSelection: BookingSelection = {
  name: "A voice session",
  price: null,
  focus: null,
};

export default function BookingModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selection, setSelection] = useState<BookingSelection>(generalSelection);

  useEffect(() => {
    const openBooking = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const trigger = event.target.closest<HTMLAnchorElement>(
        "[data-booking-trigger], [data-book-tier], [data-comfort-price]",
      );
      if (!trigger) return;

      event.preventDefault();
      const name =
        trigger.dataset.comfortName?.trim() ||
        trigger.dataset.tierName?.trim() ||
        generalSelection.name;
      const price = trigger.dataset.comfortPrice ?? trigger.dataset.tierPrice;
      const focus = trigger.dataset.comfortFocus ?? trigger.dataset.tierFocus ?? null;
      setSelection({
        name,
        price: price ? `$${price} / hour` : null,
        focus,
      });

      const dialog = dialogRef.current;
      if (dialog && !dialog.open) dialog.showModal();
    };

    document.addEventListener("click", openBooking);
    return () => document.removeEventListener("click", openBooking);
  }, []);

  return (
    <dialog
      id="booking"
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby="booking-title"
      onClose={() => setSelection(generalSelection)}
      onClick={(event) => {
        if (event.target === dialogRef.current) dialogRef.current?.close();
      }}
    >
      <div className={styles.dialogContent}>
        <div className={styles.dialogTop}>
          <p className="eyebrow">One small next step</p>
          <button
            className={styles.closeButton}
            type="button"
            aria-label="Close booking details"
            onClick={() => dialogRef.current?.close()}
          >
            <svg viewBox="0 0 20 20" aria-hidden="true" width="20" height="20">
              <path d="m5 5 10 10M15 5 5 15" fill="none" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        </div>

        <h2 id="booking-title">Let’s find a time that feels right.</h2>
        <p className={styles.dialogIntro}>
          We arrange sessions personally, so you can ask a question or make sure the format feels comfortable before anything is booked.
        </p>

        <div className={styles.selectedTier}>
          <span>Your selection</span>
          <strong>{selection.name}</strong>
          <span>{selection.price ?? "$5–$60 / hour, at the rate that feels right to you"}</span>
          {selection.focus ? <span>Listener focus: {selection.focus}</span> : null}
        </div>

        <div className={styles.nextStep}>
          <span className={styles.stepIndex}>01</span>
          <p>Message us on Instagram to arrange a time. You can simply say “Hi”—there is no form to fill out here.</p>
        </div>

        <Button
          className={styles.continueButton}
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noreferrer"
        >
          Continue to arrange your session
          <svg viewBox="0 0 18 18" aria-hidden="true" width="16" height="16">
            <path d="M4 14 14 4M5 4h9v9" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </Button>
        <p className={styles.privateNote}>No payment or personal information is collected on this page.</p>
      </div>
    </dialog>
  );
}
