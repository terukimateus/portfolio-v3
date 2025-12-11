"use client";

import { useEffect, useState } from "react";

/** Tracks the user's prefers-reduced-motion setting in real time. */
export function usePrefersReducedMotion(defaultValue = false) {
  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState(defaultValue);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
}
