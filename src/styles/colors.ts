export type BrandColors = {
  background: string;
  surface: string;
  surfaceMuted: string;
  foreground: string;
  primary: string;
  secondary: string;
  accent: string;
  border: string;
  muted: string;
};

export const brandColors: BrandColors = {
  background: "#F9FAFB",
  surface: "#FFEAD1",
  surfaceMuted: "#FFBFA9",
  foreground: "#2B0F14",
  primary: "#7C3AED",
  secondary: "#FFBFA9",
  accent: "#FFEAD1",
  border: "rgba(43, 15, 20, 0.08)",
  muted: "rgba(43, 15, 20, 0.65)",
};

export function mapColorsToCSSVariables(colors: BrandColors) {
  return {
    "--background": colors.background,
    "--surface": colors.surface,
    "--surface-muted": colors.surfaceMuted,
    "--foreground": colors.foreground,
    "--primary": colors.primary,
    "--secondary": colors.secondary,
    "--accent": colors.accent,
    "--border": colors.border,
    "--muted": colors.muted,
  } as Record<string, string>;
}
