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
  name: "Mateus Teruki",
  tagline: "AI Engineer",
};

export const metadataConfig: Metadata = {
  title: `${brandContent.name} · ${brandContent.tagline}`,
  description:
    "AI Engineer focused on building scalable products, automation, and real-world AI solutions.",
  keywords: [
    "AI engineer",
    "machine learning",
    "LLM",
    "RAG",
    "NLP",
    "Node.js",
    "TypeScript",
    "Python",
    "full-stack",
    "micro-saas",
    "automation",
    "portfolio",
  ],
  authors: [{ name: brandContent.name }],
  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    apple: "/icon.png",
  },
  creator: brandContent.name,
  // Extended SEO fields
  metadataBase: new URL("https://terukimateus.dev"),
  alternates: {
    canonical: "https://terukimateus.dev/",
  },
  openGraph: {
    type: "website",
    url: "https://terukimateus.dev/",
    title: `${brandContent.name} · ${brandContent.tagline}`,
    description:
      "AI Engineer building scalable products, automation, and real-world AI solutions.",
    siteName: brandContent.name,
    locale: "en_US",
    images: [
      {
        url: "/seo.webp",
        width: 1200,
        height: 630,
        alt: `${brandContent.name} · ${brandContent.tagline}`,
      },
    ],
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
      bing: [],
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
    { media: "(prefers-color-scheme: light)", color: "#f7fbff" },
    { media: "(prefers-color-scheme: dark)", color: "#07121f" },
  ],
};

export type BrandingPayload = {
  colors: BrandColors;
  content: BrandContent;
};
