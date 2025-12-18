"use client";

import type { LucideIcon } from "lucide-react";
import { FileText, ShieldCheck, Sparkles, Unlock } from "lucide-react";

import PlanetIllustration from "@/components/PlanetIllustration";
import { Safari } from "@/components/SafariMockup/safari";
import { Button } from "@/components/ui/button";
import { MagicButton } from "@/components/ui/magic-button";

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
  return (
    <section
      id="analisar"
      className="relative border-b overflow-hidden pt-16 sm:pt-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.12),transparent_30%),radial-gradient(circle_at_55%_80%,rgba(56,189,248,0.14),transparent_32%)]" />

      <div className="absolute -left-10 bottom-10 h-52 w-52 rounded-full bg-sky-500/15 blur-3xl" />
      <div className="absolute -right-6 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center lg:grid-cols-2">
          <div className="space-y-6 text-center col-span-2">
            <h1 className="text-balance text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Currículo sob medida para cada vaga com regras ATS
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Gere versões alinhadas à descrição da vaga, receba um score e
              aplique com mais confiança.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-center">
              <MagicButton href="#planos">
                <div className="inline-flex items-center gap-2">
                  <Sparkles size={18} />
                  <span>Analisar currículo grátis</span>
                </div>
              </MagicButton>
              <Button
                asChild
                variant="outline"
                className="border-border/70 bg-background/70 hover:bg-foreground/5"
              >
                <a
                  href="#como-funciona"
                  className="inline-flex items-center gap-2"
                >
                  <ShieldCheck size={18} />
                  Ver como funciona
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 items-center justify-center text-sm text-muted-foreground">
              {trustPoints.map((item) => {
                const Icon = item.icon;
                return (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-2 backdrop-blur"
                  >
                    <Icon className="h-4 w-4 text-sky-400" />
                    {item.label}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="relative h-96 col-span-2">
            <div className="absolute -left-10 -top-12 h-40 w-40 rounded-full bg-sky-400/25 blur-3xl" />
            <div className="absolute -right-6 bottom-0 h-44 w-44 rounded-full bg-sky-600/20 blur-3xl" />
            <div className="relative top-8 mx-auto w-full max-w-[860px] lg:-right-6">
              <div className="relative  overflow-hidden rounded-3xl border border-border/60 bg-background/80 p-2 sm:p-4">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-slate-950/15 to-primary/20" />
                <div className="relative">
                  <Safari
                    imageSrc="/matchly.png"
                    url="matchly.ai"
                    fetchPriority="high"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
