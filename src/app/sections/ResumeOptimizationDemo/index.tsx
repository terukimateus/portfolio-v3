"use client";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";

const pdfStates = [
  {
    id: "before",
    title: "Antes",
    subtitle: "Bullet genérico, sem métricas",
    accent: "from-slate-900/80 to-slate-950",
    badge: "Genérico",
    bullets: [
      "Responsável por projetos de produto em várias frentes.",
      "Trabalhei com times multidisciplinares.",
      "Ajudava a priorizar backlog e entregar melhorias.",
    ],
    tags: ["Sem métricas", "Sem keywords"],
  },
  {
    id: "after",
    title: "Depois",
    subtitle: "Bullet otimizado com keywords + métricas",
    accent: "from-slate-950 via-slate-900 to-indigo-900",
    badge: "Otimizado",
    bullets: [
      "Liderei roadmap de 3 squads B2B, priorizando discovery rápido e entregas quinzenais com NPS 74.",
      "Lancei onboarding que elevou ativação de 62% para 81% em 90 dias.",
      "Criei playbook de experimentos (A/B + entrevistas) reduzindo time-to-learn em 35%.",
    ],
    tags: ["Product discovery", "Activation", "A/B testing", "NPS"],
  },
];

export function ResumeOptimizationDemo() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(16,185,129,0.08),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollRevealSection className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/80">
            Antes vs Depois
          </p>
          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Prova visual da otimização do currículo.
          </h2>
          <p className="text-base text-muted-foreground">
            Veja a diferença entre um PDF genérico e uma versão otimizada com
            keywords, métricas e formatação que ATS lê.
          </p>
        </ScrollRevealSection>

        <ScrollRevealSection className="mt-10">
          <div className="grid gap-4 lg:grid-cols-2">
            {pdfStates.map((state) => (
              <div
                key={state.id}
                className="group relative overflow-hidden rounded-3xl border border-border/60 bg-linear-to-br shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${state.accent} opacity-80`}
                />
                <div className="relative z-10 flex h-full flex-col gap-4 p-5 sm:p-6">
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white/80">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-200" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-200" />
                    </div>
                    <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
                      {state.badge}
                    </span>
                  </div>

                  <div className="space-y-2 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                      PDF preview
                    </p>
                    <h3 className="text-xl font-semibold">{state.title}</h3>
                    <p className="text-sm text-white/80">{state.subtitle}</p>
                  </div>

                  <div className="space-y-2 rounded-2xl border border-white/15 bg-white/5 p-4 text-white/90">
                    <p className="text-sm font-semibold text-white">
                      Resumo + bullets
                    </p>
                    <ul className="space-y-2 text-sm leading-relaxed">
                      {state.bullets.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/80" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs font-semibold text-white/80">
                    {state.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/25 bg-white/10 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-white/70">
                    Formato ATS: texto vivo, seções claras e keywords embutidas
                    sem soar robótico.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollRevealSection>
      </div>
    </section>
  );
}

export default ResumeOptimizationDemo;
