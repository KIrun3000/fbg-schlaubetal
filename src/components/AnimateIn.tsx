"use client";

import { useEffect, useRef, useState } from "react";

type Animation = "fade-up" | "fade-in" | "fade-left" | "fade-right";

interface AnimateInProps {
  children: React.ReactNode;
  animation?: Animation;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const animationStyles: Record<Animation, { from: React.CSSProperties; to: React.CSSProperties }> = {
  "fade-up": {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
  "fade-in": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  "fade-left": {
    from: { opacity: 0, transform: "translateX(-20px)" },
    to: { opacity: 1, transform: "translateX(0)" },
  },
  "fade-right": {
    from: { opacity: 0, transform: "translateX(20px)" },
    to: { opacity: 1, transform: "translateX(0)" },
  },
};

export function AnimateIn({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 900,
  className = "",
  threshold = 0.15,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Start visible (SSR-safe), then hide on mount, then reveal on scroll
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    setMounted(true);

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const styles = animationStyles[animation];
  // Before JS hydrates: fully visible. After mount but before scroll: hidden. After scroll: visible.
  const shouldAnimate = mounted && !isVisible;

  return (
    <div
      ref={ref}
      className={className}
      style={
        shouldAnimate
          ? {
              ...styles.from,
              transition: `opacity ${duration}ms cubic-bezier(0.25, 1, 0.5, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.25, 1, 0.5, 1) ${delay}ms`,
              willChange: "opacity, transform",
            }
          : mounted
            ? {
                ...styles.to,
                transition: `opacity ${duration}ms cubic-bezier(0.25, 1, 0.5, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.25, 1, 0.5, 1) ${delay}ms`,
              }
            : undefined // SSR: no inline styles, fully visible
      }
    >
      {children}
    </div>
  );
}
