"use client";

import Link from "next/link";
import { useState } from "react";

import { useBrand } from "@/hooks/use-brand";
import { cn } from "@/lib/utils";

export function Header() {
  const { content } = useBrand();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)]/60 bg-[color-mix(in_srgb,var(--background)_85%,transparent)] backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-8">
        <Link
          href="#"
          className="font-semibold tracking-tight text-[var(--foreground)]"
        >
          {content.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
          {content.navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-[var(--foreground)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={content.hero.primaryCta.href}
            className="hidden rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90 md:inline-flex"
          >
            {content.hero.primaryCta.label}
          </Link>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Abrir menu"
          >
            <span className="text-base">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </div>
      <div
        className={cn(
          "md:hidden",
          open
            ? "block border-t border-[var(--border)] bg-[var(--surface)]"
            : "hidden"
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-4 text-sm">
          {content.navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-2 text-[var(--muted)] transition hover:bg-[var(--surface-muted)] hover:text-[var(--foreground)]"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
