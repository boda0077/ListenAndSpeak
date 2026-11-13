"use client";

import { useState } from "react";
import { faqItems } from "@/data/faq";
import RevealSection from "@/components/ui/RevealSection";
import styles from "./FaqAccordion.module.css";

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <RevealSection id="faq" labelledBy="faq-title" className={styles.faqSection}>
      <div className={`container ${styles.faqLayout}`}>
        <div className={styles.faqIntro}>
          <p className="eyebrow">A few gentle answers</p>
          <h2 id="faq-title" className="sectionHeading">Questions you might be holding.</h2>
          <p className="sectionIntro">Still unsure? You can message us before deciding whether a call feels right.</p>
        </div>
        <div className={styles.faqList}>
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            const answerId = `faq-answer-${item.id}`;
            return (
              <article className={styles.faqItem} key={item.id}>
                <h3 className={styles.questionHeading}>
                  <button
                    className={styles.question}
                    type="button"
                    id={`faq-question-${item.id}`}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                  >
                    <span>{item.question}</span>
                    <span className={styles.toggleMark} aria-hidden="true">{isOpen ? "−" : "+"}</span>
                  </button>
                </h3>
                <div
                  id={answerId}
                  className={styles.answerPanel}
                  data-open={isOpen}
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                  aria-hidden={!isOpen}
                >
                  <div className={styles.answerInner}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}
