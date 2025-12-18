"use client";

import { ShieldCheck, Sparkles } from "lucide-react";

import { ScrollRevealSection } from "@/components/ScrollRevealSection";
import { Button } from "@/components/ui/button";
import Glow from "@/components/ui/glow";

export function FinalCTA() {
  return (
    <section
      id="cta-final"
      className="relative border-b group overflow-hidden border-t py-16 sm:py-20"
    >
      <div className="max-w-container relative z-10 mx-auto flex flex-col items-center gap-6 text-center sm:gap-8">
        <div className="absolute top-0 left-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
          <Glow variant="bottom" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollRevealSection className="space-y-6">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Sua próxima entrevista começa com um currículo alinhado à vaga.
            </h2>
            <p className="text-base">
              Suba o currículo, veja o score ATS e receba sugestões antes de
              enviar. Sem compromisso no plano grátis.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <a href="#analisar" className="inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Analisar currículo grátis
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#planos">Ver planos</a>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-3 text-sm">
              <div className="flex items-center gap-2 rounded-full border border bg-white/5 px-3 py-2">
                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                <span>Sem cartão para começar</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border bg-white/5 px-3 py-2">
                <Sparkles className="h-4 w-4 text-sky-300" />
                <span>Exportação em PDF/Docx preserva formatação</span>
              </div>
            </div>
          </ScrollRevealSection>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
