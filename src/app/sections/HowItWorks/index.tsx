"use client";

import { motion } from "motion/react";
import { FileText, Rocket, Search, Sparkles } from "lucide-react";

import { ScrollRevealSection } from "@/components/ScrollRevealSection";

const steps = [
  {
    title: "Envie seu currículo",
    icon: FileText,
  },
  {
    title: "Cole a vaga",
    icon: Search,
  },
  {
    title: "Geramos a versão otimizada",
    icon: Sparkles,
  },
  {
    title: "Aplique com confiança",
    icon: Rocket,
  },
];

export function HowItWorks() {
  return (
    <section className="relative border-b overflow-hidden border-t py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(99,102,241,0.08),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.08),transparent_35%),radial-gradient(circle_at_40%_90%,rgba(16,185,129,0.08),transparent_35%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollRevealSection className="space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Quatro passos, zero fricção.
          </h2>
          <p className="text-base text-muted-foreground">
            Do upload ao envio: mostramos o caminho e diminuímos o tempo até o
            clique no CTA.
          </p>
        </ScrollRevealSection>

        <div className="mt-12">
          <div className="relative overflow-hidden rounded-3xl p-6">
            <div className="pointer-events-none absolute left-0 right-0 top-12 hidden md:block">
              <div className="relative h-6">
                <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 overflow-hidden rounded-full bg-primary/10">
                  <motion.div
                    className="h-full w-[200%] bg-[linear-gradient(90deg,transparent,rgba(59,130,246,0.55),transparent)]"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                      duration: 3.6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>
                <motion.span
                  className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_0_8px_rgba(59,130,246,0.12)]"
                  animate={{ left: ["0%", "calc(100% - 0.75rem)"] }}
                  transition={{
                    duration: 3.6,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>

            <ol className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-4">
              {steps.map((step, index) => (
                <motion.li
                  key={step.title}
                  className="relative flex flex-col items-center gap-2 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.08, duration: 0.35 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white border text-primary">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">
                    Passo {index + 1}
                  </p>
                  <h3 className="text-base font-semibold text-foreground text-balance">
                    {step.title}
                  </h3>
                  {index < steps.length - 1 ? (
                    <div className="absolute inset-y-6 right-0 hidden w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent md:block" />
                  ) : null}
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
