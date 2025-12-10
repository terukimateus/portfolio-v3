import type { BrandColors } from "@/styles/colors";
import { Metadata } from "next";

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
  name: "Shift Studio",
  tagline: "Landing pages que convertem",
};

export const metadataConfig: Metadata = {
  title: `${brandContent.name} · ${brandContent.tagline}`,
  description: "",
  keywords: [
    "landing pages",
    "design de landing pages",
    "desenvolvimento web",
    "otimização de conversão",
    "experiência do usuário",
    "UX",
    "UI",
    "design responsivo",
    "marketing digital",
    "aumento de receita",
    "aquisição de clientes",
  ],
  authors: [{ name: "Shift Team" }],
  robots: "index, follow",
  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
  },
  creator: brandContent.name,
};

export type BrandingPayload = {
  colors: BrandColors;
  content: BrandContent;
};
