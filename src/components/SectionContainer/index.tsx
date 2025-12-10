"use client";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface SectionContainerProps {
  id?: string;
  className?: string;
  children: ReactNode;
  headline?: string;
  eyebrow?: string;
  description?: string;
}

export function SectionContainer({
  id,
  className,
  children,
  headline,
  eyebrow,
  description,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative border-t overflow-hidden pt-16 sm:pt-20",
        className
      )}
    >
      {(eyebrow || headline) && (
        // <div className="max-w-3xl space-y-3">
        //   {eyebrow && (
        //     <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
        //       {eyebrow}
        //     </p>
        //   )}
        //   {headline && (
        //     <h2 className="text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
        //       {headline}
        //     </h2>
        //   )}
        //   {description && (
        //     <p className="text-base text-[var(--muted)]">{description}</p>
        //   )}
        // </div>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 mb-12 text-center"
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              {headline}
            </h2>
          </div>
        </motion.div>
      )}
      {children}
    </section>
  );
}
