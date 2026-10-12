"use client";

import { useEffect } from "react";

/**
 * Gives sections below the fold a short slide-in when they scroll into view.
 * Content is always visible: without JavaScript, or with reduced motion, nothing moves.
 */
export function RevealOnScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.remove("is-pending");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    for (const element of document.querySelectorAll<HTMLElement>(".reveal")) {
      if (element.getBoundingClientRect().top < window.innerHeight) continue;
      element.classList.add("is-pending");
      observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);

  return null;
}
