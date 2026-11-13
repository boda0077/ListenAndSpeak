"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealSectionProps = {
  id: string;
  labelledBy: string;
  revealOnScroll?: boolean;
  className?: string;
  children: ReactNode;
};

export default function RevealSection({
  id,
  labelledBy,
  revealOnScroll = true,
  className,
  children,
}: RevealSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!revealOnScroll) return;
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-reveal-state", "visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -36px 0px" },
    );

    section.setAttribute("data-reveal-state", "pending");
    observer.observe(section);

    return () => observer.disconnect();
  }, [revealOnScroll]);

  return (
    <section
      ref={sectionRef}
      id={id}
      aria-labelledby={labelledBy}
      className={className}
      data-reveal="true"
    >
      {children}
    </section>
  );
}
