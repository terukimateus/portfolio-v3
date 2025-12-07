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
  background: "#05060b",
  surface: "#0d101b",
  surfaceMuted: "#151a29",
  foreground: "#f7f9ff",
  primary: "#0fe3b1",
  secondary: "#7c5dff",
  accent: "#ffb347",
  border: "rgba(255, 255, 255, 0.08)",
  muted: "rgba(255, 255, 255, 0.6)",
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
