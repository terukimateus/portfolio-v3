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
  description:
    "Landing pages, sites e produtos digitais focados em clareza, velocidade e conversão. Presença digital enxuta que gera demanda e resultados.",
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
  // Extended SEO fields
  metadataBase: new URL("https://shift.studio.br"),
  alternates: {
    canonical: "https://shift.studio.br/",
  },
  openGraph: {
    type: "website",
    url: "https://shift.studio.br/",
    title: `${brandContent.name} · ${brandContent.tagline}`,
    description: "Landing pages e sites com foco em conversão e performance.",
    siteName: brandContent.name,
    locale: "pt_BR",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${brandContent.name} · ${brandContent.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brandContent.name} · ${brandContent.tagline}`,
    description: "Landing pages e sites com foco em conversão e performance.",
    images: ["/og.png"],
    creator: "@shiftstudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: undefined,
    yandex: undefined,
    yahoo: undefined,
    me: undefined,
    other: {
      bing: [""],
    },
  },
  category: "business",
  applicationName: brandContent.name,
  publisher: brandContent.name,
  appleWebApp: {
    title: brandContent.name,
    statusBarStyle: "black-translucent",
    capable: true,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#060a1f" },
  ],
};

export type BrandingPayload = {
  colors: BrandColors;
  content: BrandContent;
};
