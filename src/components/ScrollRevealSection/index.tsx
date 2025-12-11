"use client";

import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  /**
   * IntersectionObserver threshold (0-1) needed for visibility.
   */
  threshold?: number;
  /**
   * Starting Y offset in pixels before the section settles into place.
   */
  yOffset?: number;
  /**
   * Whether the section should only reveal once per page load.
   */
  once?: boolean;
  /**
   * Override transition string if desired.
   */
  transition?: string;
};

const DEFAULT_TRANSITION = "opacity 420ms ease, transform 520ms ease";

export function ScrollRevealSection({
  children,
  className,
  id,
  threshold = 0.35,
  yOffset = 40,
  once = true,
  transition = DEFAULT_TRANSITION,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();
  const disableAnimation = isMobile || prefersReducedMotion;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (disableAnimation) {
      setIsVisible(true);
      return;
    }

    const clampedThreshold = Math.min(Math.max(threshold, 0), 1);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold: clampedThreshold }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [disableAnimation, threshold, once]);

  const style: CSSProperties | undefined = disableAnimation
    ? undefined
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : `translateY(${yOffset}px)`,
        transition,
        willChange: "opacity, transform",
      };

  return (
    <section
      ref={ref}
      id={id}
      className={className}
      data-visible={isVisible}
      style={style}
    >
      {children}
    </section>
  );
}

export const ScrollReveal = Object.assign(ScrollRevealSection, {
  Section: ScrollRevealSection,
});

export default ScrollReveal;
