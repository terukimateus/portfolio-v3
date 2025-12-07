"use client";

import { cn } from "@/lib/utils";
import type { MotionValue } from "framer-motion";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /**
   * Controls how much of the scroll progress is needed (0-1) before the
   * content is fully visible.
   */
  threshold?: number;
  /**
   * Starting Y offset in pixels before the section settles into place.
   */
  yOffset?: number;
};

export function ScrollRevealSection({
  children,
  className,
  threshold = 0.35,
  yOffset = 40,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.6"],
  });

  const clampedProgress: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, threshold, 1],
    [0, 1, 1]
  );

  const opacity = useSpring(clampedProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.8,
  });

  const translateY = useSpring(
    useTransform(clampedProgress, [0, 1], [yOffset, 0]),
    {
      stiffness: 120,
      damping: 20,
      mass: 0.7,
    }
  );

  return (
    <motion.section
      ref={ref}
      className={cn("will-change-transform", className)}
      style={{ opacity, y: translateY }}
    >
      {children}
    </motion.section>
  );
}

export const ScrollReveal = Object.assign(ScrollRevealSection, {
  Section: ScrollRevealSection,
});

export default ScrollReveal;
