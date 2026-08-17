"use client";

import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal — IntersectionObserver-based scroll reveal
 * Returns a ref to attach to the element and a `revealed` boolean.
 * The element gets the `revealed` CSS class when it enters the viewport.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
  } = {}
) {
  const { threshold = 0.15, rootMargin = "0px 0px -60px 0px", once = true } = options;
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Guard: only run on client
    if (typeof window === "undefined") return;

    const el = ref.current;
    if (!el) return;

    // If prefers-reduced-motion, reveal immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      el.classList.add("revealed");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          el.classList.add("revealed");
          if (once) observer.unobserve(el);
        } else if (!once) {
          setRevealed(false);
          el.classList.remove("revealed");
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, revealed };
}

/**
 * useScrollRevealGroup — reveals children with stagger delays
 * Attach the returned ref to the parent container.
 * Each child with class `scroll-reveal` will get `revealed` added
 * with a stagger delay based on its index.
 */
export function useScrollRevealGroup<T extends HTMLElement = HTMLDivElement>(
  options: {
    threshold?: number;
    rootMargin?: string;
    staggerMs?: number;
    once?: boolean;
  } = {}
) {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -40px 0px",
    staggerMs = 80,
    once = true,
  } = options;
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Guard: only run on client
    if (typeof window === "undefined") return;

    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      el.querySelectorAll(".scroll-reveal, .scroll-reveal-scale, .image-reveal").forEach((child, i) => {
        child.classList.add("revealed");
      });
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          const children = el.querySelectorAll(
            ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .image-reveal"
          );
          children.forEach((child, i) => {
            setTimeout(() => {
              child.classList.add("revealed");
            }, i * staggerMs);
          });
          if (once) observer.unobserve(el);
        } else if (!once) {
          setRevealed(false);
          el.querySelectorAll(".scroll-reveal, .scroll-reveal-scale, .image-reveal").forEach((child) => {
            child.classList.remove("revealed");
          });
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, staggerMs, once]);

  return { ref, revealed };
}
