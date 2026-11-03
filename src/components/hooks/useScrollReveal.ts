"use client";

import { useEffect, useRef, useState } from "react";

export type RevealDirection = "up" | "down" | "left" | "right" | "scale" | "fade";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  /** If true, animation resets when element leaves viewport (both directions) */
  bidirectional?: boolean;
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const { threshold = 0.12, rootMargin = "0px 0px -40px 0px", bidirectional = true } = options;
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (bidirectional) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, bidirectional]);

  return { ref, isVisible };
}

/** Multi-item version: tracks each item's visibility independently */
export function useScrollRevealList(
  count: number,
  options: UseScrollRevealOptions = {}
) {
  const { threshold = 0.1, rootMargin = "0px 0px -30px 0px", bidirectional = true } = options;
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [visibleSet, setVisibleSet] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-reveal-index"));
          if (entry.isIntersecting) {
            setVisibleSet((prev) => {
              const next = new Set(prev);
              next.add(index);
              return next;
            });
          } else if (bidirectional) {
            setVisibleSet((prev) => {
              const next = new Set(prev);
              next.delete(index);
              return next;
            });
          }
        });
      },
      { threshold, rootMargin }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [count, threshold, rootMargin, bidirectional]);

  const setRef = (index: number) => (el: HTMLElement | null) => {
    refs.current[index] = el;
    if (el) el.setAttribute("data-reveal-index", String(index));
  };

  const isVisible = (index: number) => visibleSet.has(index);

  return { setRef, isVisible };
}
