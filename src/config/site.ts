import type { BrandColors } from "@/styles/colors";

export type NavigationItem = {
  label: string;
  href: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  badge?: string;
};

export type MetricItem = {
  label: string;
  value: string;
  helper: string;
};

export type TestimonialItem = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export type CallToActionContent = {
  title: string;
  subtitle: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  bullets: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type BrandContent = {
  name: string;
  tagline: string;
};

export const brandContent: BrandContent = {
  name: "Flux ID",
  tagline: "Validação white-label pronta em minutos",
};

export const metadataConfig = {
  title: `${brandContent.name} · Template white-label Next.js`,
  description: "",
  keywords: [
    "white-label",
    "next.js template",
    "landing page",
    "component library",
  ],
  authors: [{ name: "Flux Team" }],
  colorScheme: "dark" as const,
  creator: brandContent.name,
};

export type BrandingPayload = {
  colors: BrandColors;
  content: BrandContent;
};
