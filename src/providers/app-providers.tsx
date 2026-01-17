"use client";

import type { ReactNode } from "react";

import { BrandProvider } from "@/providers/brand-provider";
import { I18nProvider } from "@/providers/i18n-provider";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <BrandProvider>{children}</BrandProvider>
    </I18nProvider>
  );
}
