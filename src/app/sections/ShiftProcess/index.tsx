"use client";

import type { LucideIcon } from "lucide-react";
import {
  ClipboardCheck,
  Code2,
  PenTool,
  PhoneCall,
  Rocket,
} from "lucide-react";
import DottedGlowBackground from "@/components/DottedGlowBackground";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";

interface Step {
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  {
    title: "Escopo rápido",
    description:
      "Call para entender objetivo, contexto e ofertas e alinhar prioridades logo nas primeiras horas.",
    icon: PhoneCall,
  },
  {
    title: "Proposta enxuta",
    description:
      "Definição de escopo, prazos, entregas e investimento com transparência e sem burocracia.",
    icon: ClipboardCheck,
  },
  {
    title: "Arquitetura & design",
    description:
      "Estrutura da página/site/sistema + layout inicial para aprovar narrativa, hierarquia e tom visual.",
    icon: PenTool,
  },
  {
    title: "Desenvolvimento & integrações",
    description:
      "Implementação em stack moderna com integrações em CRM, automações, analytics e fluxos de dados.",
    icon: Code2,
  },
  {
    title: "Entrega e ajustes",
    description:
      "Testes, deploy e rodada(s) combinadas de ajustes para lançar com segurança e sem surpresas.",
    icon: Rocket,
  },
];

export function ShiftProcess() {
  return (
    <section className="relative border-t overflow-hidden py-16 sm:py-20">
      <DottedGlowBackground className="-z-10" />
      <div className="flex flex-col gap-12">
        <ScrollRevealSection className="space-y-4 text-center">
          <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
            Do escopo à entrega: um fluxo simples e transparente.
          </h2>
        </ScrollRevealSection>

        <ScrollRevealSection className="relative w-full overflow-hidden bg-linear-to-b from-slate-900/80 via-slate-950 to-slate-950 shadow-[0_20px_60px_rgba(2,6,23,0.65)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_55%)]" />
          <svg
            viewBox="0 0 260 520"
            className="pointer-events-none absolute -right-8 top-6 hidden h-[calc(100%-3rem)] w-48 opacity-60 lg:block"
          >
            <defs>
              <linearGradient
                id="timelineStroke"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="rgba(16,185,129,0)" />
                <stop offset="35%" stopColor="var(--primary)" />
                <stop offset="100%" stopColor="rgba(16,185,129,0.05)" />
              </linearGradient>
            </defs>
            <path
              d="M30 20 C 120 80, 40 160, 140 220 S 60 360, 160 430"
              stroke="url(#timelineStroke)"
              strokeWidth="2"
              fill="transparent"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative">
            <div className="grid grid-cols-1 gap-0 overflow-hidden bg-white/5 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 sm:divide-x sm:divide-y-0 divide-y divide-white/10">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="flex flex-col border bg-linear-to-b from-slate-950/40 to-slate-950/20 p-5 text-left sm:p-6"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
                      Passo {index + 1}
                    </p>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </ScrollRevealSection>
      </div>
    </section>
  );
}

export default ShiftProcess;
