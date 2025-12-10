"use client";

import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import {
  ClipboardCheck,
  Code2,
  PenTool,
  PhoneCall,
  Rocket,
} from "lucide-react";
import DottedGlowBackground from "@/components/DottedGlowBackground";

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
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center"
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              Do escopo à entrega: um fluxo simples e transparente.
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative w-full overflow-hidden bg-linear-to-b from-slate-900/80 via-slate-950 to-slate-950 shadow-[0_20px_60px_rgba(2,6,23,0.65)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_55%)]" />
          <motion.svg
            viewBox="0 0 260 520"
            className="pointer-events-none absolute -right-8 top-6 hidden h-[calc(100%-3rem)] w-48 opacity-60 lg:block"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 0.75, pathLength: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
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
            <motion.path
              d="M30 20 C 120 80, 40 160, 140 220 S 60 360, 160 430"
              stroke="url(#timelineStroke)"
              strokeWidth="2"
              fill="transparent"
              strokeLinecap="round"
            />
          </motion.svg>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-1 gap-0 overflow-hidden bg-white/5 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 sm:divide-x sm:divide-y-0 divide-y divide-white/10"
            >
              {steps.map((step, index) => (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
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
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ShiftProcess;
