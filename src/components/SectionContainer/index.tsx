import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
        "relative mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-16 sm:px-8",
        className
      )}
    >
      {(eyebrow || headline) && (
        <div className="max-w-3xl space-y-3">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
              {eyebrow}
            </p>
          )}
          {headline && (
            <h2 className="text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
              {headline}
            </h2>
          )}
          {description && (
            <p className="text-base text-[var(--muted)]">{description}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
