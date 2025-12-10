"use client";

import type { MouseEvent } from "react";
import Image from "next/image";

import { navItems } from "@/data/navigation";

const contactEmail = "contato.shiftstudio@outlook.com";
const whatsappNumber = "44998306622";
const whatsappLink = "https://wa.me/5544998306622";
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
        <div className="grid gap-10 md:grid-cols-[0.6fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
                <Image
                  src="/icon.png"
                  alt="Logo Shift Studio"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
                  Shift Studio
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Projetamos landing pages e experiências enxutas orientadas a dados
              para acelerar aquisição e receita.
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
              Contatos
            </p>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <a
                href={`mailto:${contactEmail}`}
                className="block text-base font-medium text-foreground transition hover:text-secondary"
              >
                {contactEmail}
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="block text-base font-medium text-foreground transition hover:text-secondary"
              >
                +55 44 99830-6622
              </a>
              <p className="text-xs">
                Orçamentos, contratos digitais e pagamentos com escopo claro e
                transparência total.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>Shift Studio — menos ruído, mais conversão.</p>
          <p>© {currentYear} Shift Studio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
