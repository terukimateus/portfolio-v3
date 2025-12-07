"use client";

import { createContext, useContext } from "react";
import type { ReactNode } from "react";

import { brandColors } from "@/styles/colors";
import { brandContent } from "@/config/site";

export type BrandContextValue = {
  colors: typeof brandColors;
  content: typeof brandContent;
};

const BrandContext = createContext<BrandContextValue | null>(null);

export function BrandProvider({ children }: { children: ReactNode }) {
  return (
    <BrandContext.Provider
      value={{ colors: brandColors, content: brandContent }}
    >
      {children}
    </BrandContext.Provider>
  );
}

export function useBrandContext() {
  const ctx = useContext(BrandContext);

  if (!ctx) {
    throw new Error("useBrandContext must be used within a BrandProvider");
  }

  return ctx;
}
