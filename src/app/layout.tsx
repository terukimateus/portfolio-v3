import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

import { AppProviders } from "@/providers/app-providers";
import { metadataConfig } from "@/config/site";
import { LanguageFloatingToggle } from "@/components/LanguageFloatingToggle";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: metadataConfig.title,
  description: metadataConfig.description,
  keywords: metadataConfig.keywords,
  authors: metadataConfig.authors,
  creator: metadataConfig.creator,
  robots: metadataConfig.robots,
  icons: metadataConfig.icons,
  metadataBase: metadataConfig.metadataBase,
  alternates: metadataConfig.alternates,
  openGraph: metadataConfig.openGraph,
  twitter: metadataConfig.twitter,
  verification: metadataConfig.verification,
  appleWebApp: metadataConfig.appleWebApp,
  themeColor: metadataConfig.themeColor,
  applicationName: metadataConfig.applicationName,
  publisher: metadataConfig.publisher,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-US" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fustat:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
