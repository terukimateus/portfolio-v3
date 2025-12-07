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
  name: "CalmaMeals",
  tagline: "IA gentil para planos saudáveis e deliciosos",
};

export const metadataConfig = {
  title: `${brandContent.name} · Alimentação saudável sem complicação`,
  description:
    "Planeje cardápios equilibrados com IA: receitas reais, lista de compras organizada e planos que respeitam seu humor diário.",
  keywords: [
    "alimentação saudável",
    "cardápio semanal",
    "receitas rápidas",
    "lista de compras",
    "ia",
    "nutrição",
  ],
  authors: [{ name: "Equipe CalmaMeals" }],
  colorScheme: "light" as const,
  creator: brandContent.name,
};

export type BrandingPayload = {
  colors: BrandColors;
  content: BrandContent;
};
