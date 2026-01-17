"use client";

import type { MouseEvent } from "react";
import Link from "next/link";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useI18n } from "@/providers/i18n-provider";
import type { Language } from "@/providers/i18n-provider";

const contactEmail = "contato@terukimateus.dev";
const scrollOffset = 100;

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { dictionary, language, setLanguage } = useI18n();
  const navItems = dictionary.footer.navigation.items;

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    section: string
  ) => {
    event.preventDefault();
    const element = document.getElementById(section);
    if (!element) return;

    const offsetTop = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: offsetTop - scrollOffset, behavior: "smooth" });
  };

  return (
    <footer id="contato" className=" border-border bg-background">
      <div className="mx-auto flex w-full max-w-xs md:max-w-6xl flex-col border-t px-4 py-6 sm:px-6 lg:px-8">
        <span className="mb-4 text-sm text-muted-foreground">
          Built with ❤️ by Mateus Teruki. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
