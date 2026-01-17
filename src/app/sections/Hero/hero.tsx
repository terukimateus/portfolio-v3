"use client";

import type { LucideIcon } from "lucide-react";
import { FileText, Sparkles, Unlock } from "lucide-react";
import Image from "next/image";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import Icon from "@/components/Icon";
import { useI18n } from "@/providers/i18n-provider";
import { LanguageFloatingToggle } from "@/components/LanguageFloatingToggle";

type TrustPoint = {
  label: string;
  icon: LucideIcon;
};

const trustPoints: TrustPoint[] = [
  { label: "Sem cartão no Free", icon: Sparkles },
  { label: "Privacidade", icon: Unlock },
  { label: "Exportação em PDF/Docx", icon: FileText },
];

export function Hero() {
  const { t, language, setLanguage, dictionary } = useI18n();

  return (
    <section id="hero" className="relative border-b overflow-hidden bg-stripes">
      <div className="flex py-8 flex-1 border-x w-full h-full mx-auto max-w-xs md:max-w-6xl  bg-background  px-4 sm:px-6 lg:px-8 flex-col lg:flex-row items-center justify-between gap-4">
        <div className="flex lg:flex-row flex-col items-center text-center md:text-left gap-4">
          <LanguageFloatingToggle />

          <Image
            src="/avatar.webp"
            alt="Avatar"
            width={128}
            height={128}
            className="rounded-full w-20 h-20 object-center object-cover"
          />
          <div className="text-center lg:text-left flex flex-col">
            <span className="font-bold text-2xl">{t("hero.name")}</span>
            <span className="text-zinc-600 dark:text-zinc-400">
              {t("hero.role")}
            </span>
          </div>
        </div>

        <div id="socials" className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/terukimateus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LuLinkedin
              aria-label="linkedin-icon"
              size={24}
              color="var(--primary)"
            />
          </a>
          <a
            href="https://github.com/terukimateus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:underline"
          >
            <LuGithub
              aria-label="github-icon"
              size={24}
              color="var(--primary)"
            />
          </a>
          <a
            href="https://wa.me/5544998970869"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            <Icon
              aria="whatsapp-icon"
              name="FaWhatsapp"
              size={24}
              family="FontAwesome6"
            />
          </a>
        </div>
        <div className="flex flex-col text-xs text-center lg:text-right text-muted-foreground">
          <a
            href="tel:+5544998970869"
            className="text-sm font-medium text-foreground"
          >
            +55 44 99897-0869
          </a>
          <a
            href="mailto:terukimateus@outlook.com"
            className="text-sm font-medium text-foreground"
          >
            terukimateus@outlook.com
          </a>
        </div>
      </div>
    </section>
  );
}
