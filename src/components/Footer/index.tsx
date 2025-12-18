"use client";

import type { MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";

import { navItems } from "@/data/navigation";

const contactEmail = "contato@matchly.ai";
const scrollOffset = 100;

export function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer id="contato" className="border-t border-white/10 bg-background">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-16 text-foreground sm:px-8">
        <div className="grid gap-10 md:grid-cols-[0.7fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
                <Image
                  src="/icon.png"
                  alt="Logo Matchly"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-secondary">
                  Matchly.ai
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Currículos alinhados à vaga com score ATS, checklist acionável e
              exportação em PDF/Docx.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              Navegação
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {navItems.map((item) => (
                <li key={item.link}>
                  <a
                    href={`#${item.link}`}
                    onClick={(event) => handleNavClick(event, item.link)}
                    className="transition hover:text-foreground"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              Contato
            </p>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <a
                href={`mailto:${contactEmail}`}
                className="block text-base font-medium text-foreground transition hover:text-secondary"
              >
                {contactEmail}
              </a>
              <p className="text-xs text-muted-foreground">
                Fale com a equipe sobre planos, segurança e suporte.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <Link href="/termos" className="hover:text-foreground">
              Termos
            </Link>
            <span>•</span>
            <Link href="/privacidade" className="hover:text-foreground">
              Privacidade
            </Link>
            <span>•</span>
            <a href="#contato" className="hover:text-foreground">
              Contato
            </a>
          </div>
          <p className="text-sm">
            © 2025 Matchly.ai. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
