"use client";

import { useBrandContext } from "@/providers/brand-provider";

export function useBrand() {
  return useBrandContext();
}
