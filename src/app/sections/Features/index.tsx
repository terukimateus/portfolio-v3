"use client";

import {
  BadgeCheck,
  BriefcaseBusiness,
  ClipboardList,
  Gauge,
  Sparkles,
} from "lucide-react";

import { ScrollRevealSection } from "@/components/ScrollRevealSection";
import GlobeIllustration from "@/components/GlobeIllustration";
import NetworkIllustration from "@/components/NetworkIllustration";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";

const featureCards = [
  {
    name: "Adaptação por vaga",
    description: "Adapta resumo e bullets à vaga em segundos.",
    Icon: Sparkles,
    href: "#exemplo-adaptacao",
    cta: "Ver exemplo",
    layout: "md:col-span-2",
    background: (
      <div className="absolute inset-0 overflow-hidden rounded-xl bg-linear-to-br from-sky-50 via-white to-indigo-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.18),transparent_38%),radial-gradient(circle_at_82%_28%,rgba(99,102,241,0.16),transparent_34%)]" />
        <div className="absolute -top-20  w-120 opacity-50">
          <GlobeIllustration className="h-full w-full" />
        </div>
      </div>
    ),
  },
  {
    name: "Regras ATS",
    description: "Formata para ATS com checklist aplicado.",
    Icon: ClipboardList,
    href: "#exemplo-ats",
    cta: "Ver exemplo",
    layout: "md:col-span-2",
    background: (
      <div className="absolute inset-0 overflow-hidden rounded-xl bg-linear-to-br from-emerald-50 via-white to-emerald-100">
        <div className="absolute inset-0 opacity-50">
          <NetworkIllustration />
        </div>
        <div className="relative z-10 flex h-full flex-col justify-between p-6 text-emerald-950">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <BadgeCheck className="h-4 w-4" />
              <span>Checklist ATS</span>
            </div>
            <div className="rounded-xl border border-emerald-100 bg-white/85 p-4 shadow-sm shadow-emerald-100/40 backdrop-blur">
              <p className="text-sm text-emerald-900">
                Links legíveis, ordem preferida e palavras-chave marcadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Score do currículo",
    description: "Nota ATS + próximos ajustes priorizados.",
    Icon: Gauge,
    href: "#exemplo-score",
    cta: "Ver exemplo",
    layout: "md:col-span-1",
    background: (
      <div className="absolute inset-0 overflow-hidden rounded-xl bg-linear-to-br from-indigo-50 via-white to-sky-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.16),transparent_38%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.14),transparent_32%)]" />
        <div className="relative z-10 flex h-full flex-col justify-between p-6 text-indigo-950">
          <div className="flex items-center gap-3">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-indigo-200 bg-white/85 text-2xl font-bold text-indigo-700 shadow-inner shadow-indigo-100/60">
              87
            </div>
            <div className="space-y-1 text-sm">
              <p className="text-indigo-800">Score ATS</p>
              <p className="text-xs text-indigo-600">Alinhamento + aderência</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Vagas compatíveis",
    description: "Vagas com match e sugestões rápidas.",
    Icon: BriefcaseBusiness,
    href: "#exemplo-vagas",
    cta: "Ver exemplo",
    layout: "md:col-span-3",
    background: (
      <div className="absolute inset-0 overflow-hidden rounded-xl bg-linear-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_80%_15%,rgba(14,165,233,0.14),transparent_28%)]" />
        <div className="relative z-10 flex h-full flex-col justify-between p-6 text-blue-950">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-700">
              Matches rápidos
            </p>
            <div className="space-y-2 text-sm text-blue-900">
              <div className="flex items-center justify-between rounded-lg border border-blue-100 bg-white/80 px-3 py-2 shadow-sm">
                <span>PM | SaaS AI</span>
                <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800">
                  91%
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-blue-100 bg-white/80 px-3 py-2 shadow-sm">
                <span>Product Ops</span>
                <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800">
                  84%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const exampleBlocks = [
  {
    id: "exemplo-adaptacao",
    title: "Adaptação por vaga",
    subtitle: "Resumo + bullets ajustados para Product Designer (SaaS)",
    items: [
      "Resumo reescrito com resultados e contexto da vaga",
      "Bullets reorganizados priorizando discovery e handoff",
      "Palavras-chave da descrição embutidas sem soar robótico",
    ],
    accent: "bg-sky-500/10 border-sky-500/30",
  },
  {
    id: "exemplo-ats",
    title: "Regras ATS",
    subtitle: "Checklist aplicado no PDF/Docx gerado",
    items: [
      "Contato e links em texto simples (nada em imagens)",
      "Cabeçalho e experiências em ordem que rastreadores preferem",
      "Bullets com verbo + métrica + resultado",
    ],
    accent: "bg-emerald-500/10 border-emerald-500/30",
  },
  {
    id: "exemplo-score",
    title: "Score do currículo",
    subtitle: "Nota 0-10 + pontos para corrigir agora",
    items: [
      "Alerta de métricas ausentes nas experiências recentes",
      "Sinal verde para formatação e seções obrigatórias",
      "Prioridade sugerida para cada ajuste (alta/média/baixa)",
    ],
    accent: "bg-indigo-500/10 border-indigo-500/30",
  },
  {
    id: "exemplo-vagas",
    title: "Vagas compatíveis",
    subtitle: "Ranking por skill/keyword com dicas antes de enviar",
    items: [
      "Match por palavras-chave e senioridade",
      "Sugestões automáticas de microajustes para cada vaga",
      "Filtro por remota/híbrida e stack preferida",
    ],
    accent: "bg-blue-500/10 border-blue-500/30",
  },
];

export function Features() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(99,102,241,0.08),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.08),transparent_32%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollRevealSection className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/80">
            Benefícios escaneáveis
          </p>
          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Tudo que o Matchly faz para aumentar suas chances.
          </h2>
          <p className="text-base text-muted-foreground">
            Recursos pensados para quem quer aplicar rápido, sem fricção e com o
            máximo de aderência às vagas.
          </p>
        </ScrollRevealSection>

        <ScrollRevealSection className="mt-10">
          <BentoGrid className="auto-rows-[16rem] grid-cols-1 gap-4 md:auto-rows-[17rem] md:grid-cols-4">
            {featureCards.map((card) => (
              <BentoCard
                key={card.name}
                name={card.name}
                description={card.description}
                Icon={card.Icon}
                background={card.background}
                cta={card.cta}
                href={card.href}
                className={cn("col-span-1", card.layout)}
              />
            ))}
          </BentoGrid>
        </ScrollRevealSection>
      </div>
    </section>
  );
}

export default Features;
