import type { Metadata } from "next";
import { Nunito, Outfit } from "next/font/google";
import type { ReactNode } from "react";

import { AppProviders } from "@/providers/app-providers";
import { brandColors, mapColorsToCSSVariables } from "@/styles/colors";
import { metadataConfig } from "@/config/site";

import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: metadataConfig.title,
  description: metadataConfig.description,
  keywords: metadataConfig.keywords,
  authors: metadataConfig.authors,
  creator: metadataConfig.creator,
  colorScheme: metadataConfig.colorScheme,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="light">
      <body
        style={mapColorsToCSSVariables(brandColors)}
  className={`${nunito.variable} ${outfit.variable} font-sans bg-background text-foreground antialiased`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
