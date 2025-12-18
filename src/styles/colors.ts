export type BrandPalette = {
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

export type BrandColors = {
  light: BrandPalette;
  dark: BrandPalette;
};

export const brandColors: BrandColors = {
  light: {
    background: "#F7FBFF",
    foreground: "#0B1220",
    card: "#FFFFFF",
    cardForeground: "#0B1220",
    popover: "#EFF6FF",
    popoverForeground: "#0B1220",
    brand: "#3BA0FF",
    brandForeground: "#3c91f9",
    primary: "#3BA0FF",
    primaryForeground: "#0B1220",
    secondary: "#1E7AE5",
    secondaryForeground: "#EAF2FF",
    muted: "rgba(15, 23, 42, 0.65)",
    mutedForeground: "#0B1220",
    accent: "#A7D8FF",
    accentForeground: "#0B1220",
    destructive: "#E5484D",
    destructiveForeground: "#0B1220",
    border: "rgba(15, 23, 42, 0.12)",
    input: "rgba(15, 23, 42, 0.14)",
    ring: "#3BA0FF",
    chart1: "#3BA0FF",
    chart2: "#1E7AE5",
    chart3: "#5AB2FF",
    chart4: "#A7D8FF",
    chart5: "#1C3D66",
    sidebar: "#FFFFFF",
    sidebarForeground: "#0B1220",
    sidebarPrimary: "#3BA0FF",
    sidebarPrimaryForeground: "#0B1220",
    sidebarAccent: "#EFF6FF",
    sidebarAccentForeground: "#0B1220",
    sidebarBorder: "rgba(15, 23, 42, 0.12)",
    sidebarRing: "#3BA0FF",
  },
  dark: {
    background: "#07121F",
    foreground: "#EAF2FF",
    card: "#0B1B2E",
    cardForeground: "#EAF2FF",
    popover: "#0E2440",
    popoverForeground: "#EAF2FF",
    brand: "#5AB2FF",
    brandForeground: "#3c91f9",
    primary: "#5AB2FF",
    primaryForeground: "#07121F",
    secondary: "#3BA0FF",
    secondaryForeground: "#07121F",
    muted: "rgba(234, 242, 255, 0.16)",
    mutedForeground: "rgba(234, 242, 255, 0.78)",
    accent: "#1C3D66",
    accentForeground: "#EAF2FF",
    destructive: "#F97066",
    destructiveForeground: "#0B1220",
    border: "rgba(234, 242, 255, 0.14)",
    input: "rgba(234, 242, 255, 0.16)",
    ring: "#5AB2FF",
    chart1: "#5AB2FF",
    chart2: "#3BA0FF",
    chart3: "#A7D8FF",
    chart4: "#1E7AE5",
    chart5: "#1C3D66",
    sidebar: "#0B1B2E",
    sidebarForeground: "#EAF2FF",
    sidebarPrimary: "#5AB2FF",
    sidebarPrimaryForeground: "#07121F",
    sidebarAccent: "#0E2440",
    sidebarAccentForeground: "#EAF2FF",
    sidebarBorder: "rgba(234, 242, 255, 0.16)",
    sidebarRing: "#5AB2FF",
  },
};

export function mapColorsToCSSVariables(colors: BrandPalette) {
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
