export type BrandColors = {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  brand: string;
  brandForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
  chart1: string;
  chart2: string;
  chart3: string;
  chart4: string;
  chart5: string;
  sidebar: string;
  sidebarForeground: string;
  sidebarPrimary: string;
  sidebarPrimaryForeground: string;
  sidebarAccent: string;
  sidebarAccentForeground: string;
  sidebarBorder: string;
  sidebarRing: string;
};

export const brandColors: BrandColors = {
  background: "#020617",
  foreground: "#e5e7eb",
  card: "#0b1220",
  cardForeground: "#e5e7eb",
  popover: "#0b1220",
  popoverForeground: "#e5e7eb",
  brand: "#2563eb",
  brandForeground: "#0041c3",
  primary: "#2563eb",
  primaryForeground: "#f3f3f3",
  secondary: "#f97316",
  secondaryForeground: "#e5e7eb",
  muted: "#0b1220",
  mutedForeground: "#94a3b8",
  accent: "#f97316",
  accentForeground: "#0b1220",
  destructive: "#ef4444",
  destructiveForeground: "#0b1220",
  border: "rgb(255, 255, 255, 0.01)",
  input: "rgba(229, 231, 235, 0.12)",
  ring: "#2563eb",
  chart1: "#2563eb",
  chart2: "#22c55e",
  chart3: "#f97316",
  chart4: "#38bdf8",
  chart5: "#a855f7",
  sidebar: "#0b1220",
  sidebarForeground: "#e5e7eb",
  sidebarPrimary: "#2563eb",
  sidebarPrimaryForeground: "#0b1220",
  sidebarAccent: "#111827",
  sidebarAccentForeground: "#e5e7eb",
  sidebarBorder: "rgba(229, 231, 235, 0.12)",
  sidebarRing: "#2563eb",
};

export function mapColorsToCSSVariables(colors: BrandColors) {
  return {
    "--background": colors.background,
    "--foreground": colors.foreground,
    "--card": colors.card,
    "--card-foreground": colors.cardForeground,
    "--popover": colors.popover,
    "--popover-foreground": colors.popoverForeground,
    "--brand": colors.brand,
    "--brand-foreground": colors.brandForeground,
    "--primary": colors.primary,
    "--primary-foreground": colors.primaryForeground,
    "--secondary": colors.secondary,
    "--secondary-foreground": colors.secondaryForeground,
    "--muted": colors.muted,
    "--muted-foreground": colors.mutedForeground,
    "--accent": colors.accent,
    "--accent-foreground": colors.accentForeground,
    "--destructive": colors.destructive,
    "--destructive-foreground": colors.destructiveForeground,
    "--border": colors.border,
    "--input": colors.input,
    "--ring": colors.ring,
    "--chart-1": colors.chart1,
    "--chart-2": colors.chart2,
    "--chart-3": colors.chart3,
    "--chart-4": colors.chart4,
    "--chart-5": colors.chart5,
    "--color-1": colors.chart1,
    "--color-2": colors.chart2,
    "--color-3": colors.chart3,
    "--color-4": colors.chart4,
    "--color-5": colors.chart5,
    "--sidebar": colors.sidebar,
    "--sidebar-foreground": colors.sidebarForeground,
    "--sidebar-primary": colors.sidebarPrimary,
    "--sidebar-primary-foreground": colors.sidebarPrimaryForeground,
    "--sidebar-accent": colors.sidebarAccent,
    "--sidebar-accent-foreground": colors.sidebarAccentForeground,
    "--sidebar-border": colors.sidebarBorder,
    "--sidebar-ring": colors.sidebarRing,
    "--surface": colors.card,
    "--surface-muted": colors.popover,
  } as Record<string, string>;
}
