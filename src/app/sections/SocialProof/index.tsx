"use client";

import DottedGlowBackground from "@/components/DottedGlowBackground";
import Card from "@/components/Card";
import MarqueeRows from "@/components/MarqueeRows";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";

const testimonialsTop = [
  {
    name: "Marina Costa",
    role: "Product Manager",
    quote:
      "Consegui alinhar o currículo a 3 vagas diferentes sem parecer robótico. Resposta veio em dias.",
  },
  {
    name: "Diego Martins",
    role: "Data Analyst",
    quote:
      "Score ATS ajudou a priorizar ajustes rápidos. O retorno de recrutadores aumentou visivelmente.",
  },
  {
    name: "Aline Rocha",
    role: "UX Designer",
    quote:
      "Checklist simples de seguir, exportei em PDF e o layout não quebrou. Economia real de tempo.",
  },
  {
    name: "Bruno Figueiredo",
    role: "Software Engineer",
    quote:
      "Usei o MarqueeRows da plataforma para comparar versões e entender onde reforçar entregas técnicas.",
  },
];

const testimonialsBottom = [
  {
    name: "Patrícia Melo",
    role: "Tech Recruiter",
    quote:
      "Cards claros de cada versão do currículo facilitaram triagem. Em menos de 5 minutos já tinha shortlist.",
  },
  {
    name: "Rafael Azevedo",
    role: "Data Scientist",
    quote:
      "Consegui adequar resultados por segmento e medir impacto. O PDF final ficou pronto antes da call.",
  },
  {
    name: "Joana Ribeiro",
    role: "HR Business Partner",
    quote:
      "Comparei versões em segundos e enviei para aprovação. Os gestores receberam tudo pronto para feedback.",
  },
  {
    name: "Carlos Menezes",
    role: "Frontend Engineer",
    quote:
      "Ajustei portfólio e entregas por stack. O PDF não quebrou e passei na triagem automática.",
  },
];

export function SocialProof() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollRevealSection className="space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Quem usou o Matchly reduz o retrabalho.
          </h2>
          <p className="text-base text-muted-foreground">
            Logos fictícios para ilustrar segmentos e depoimentos curtos sem
            promessas absolutas.
          </p>
        </ScrollRevealSection>

        <ScrollRevealSection className="mt-10 z-20 space-y-6">
          <div className="relative isolate">
            <MarqueeRows pauseOnHover className="[--gap:2rem]">
              {testimonialsTop.map((item) => (
                <Card
                  key={`row-1-${item.name}`}
                  className="min-w-[280px] max-w-sm items-start gap-3 text-left"
                >
                  <p className="text-sm text-foreground/90">“{item.quote}”</p>
                  <div className="flex flex-col gap-1">
                    <div className="text-sm font-semibold text-foreground">
                      {item.name}
                    </div>
                    <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {item.role}
                    </p>
                  </div>
                </Card>
              ))}
            </MarqueeRows>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-30 bg-gradient-to-r from-background via-background/40 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-30 bg-gradient-to-l from-background via-background/40 to-transparent" />
          </div>

          <div className="relative isolate">
            <MarqueeRows pauseOnHover reverse className="[--gap:2rem]">
              {testimonialsBottom.map((item) => (
                <Card
                  key={`row-2-${item.name}`}
                  className="min-w-[280px] max-w-sm items-start gap-3 text-left"
                >
                  <p className="text-sm text-foreground/90">“{item.quote}”</p>
                  <div className="flex flex-col gap-1">
                    <div className="text-sm font-semibold text-foreground">
                      {item.name}
                    </div>
                    <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {item.role}
                    </p>
                  </div>
                </Card>
              ))}
            </MarqueeRows>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background via-background/70 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background via-background/70 to-transparent" />
          </div>
        </ScrollRevealSection>
      </div>
    </section>
  );
}

export default SocialProof;
