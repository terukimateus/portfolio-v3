"use client";

import type { ReactNode } from "react";

import { BrandProvider } from "@/providers/brand-provider";

export function AppProviders({ children }: { children: ReactNode }) {
  return <BrandProvider>{children}</BrandProvider>;
}
