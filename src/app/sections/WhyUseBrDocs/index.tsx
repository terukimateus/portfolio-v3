import { Check } from "lucide-react";

import Card from "@/components/Card";

const trustBadges = [
  "✔ Para família",
  "✔ Para iniciantes",
  "✔ Para rotina corrida",
  "✔ Para quem não sabe cozinhar",
];

export default function WhyUseBrDocs() {
  return (
    <section
      id="porque-confiar"
      className="relative py-20 px-4 sm:px-6 lg:px-8"
      style={{
        background:
          "linear-gradient(120deg, rgba(124, 58, 237, 0.08), rgba(255, 191, 169, 0.12))",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="grid-line absolute inset-0 opacity-20" />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">
            confiança real
          </p>
          <h2 className="text-4xl font-bold leading-tight text-balance text-foreground md:text-5xl">
            “Criado para pessoas que querem comer melhor sem virar refém de dieta.”
          </h2>
          <p className="text-lg text-muted-foreground">
            Planos feitos por IA + nutricionistas, com linguagem leve, ingredientes acessíveis e rotinas pensadas para famílias, solos e quem está começando.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-3 rounded-2xl border border-border/60 bg-white/80 px-4 py-3 text-left text-sm font-semibold text-foreground shadow-sm backdrop-blur"
              >
                <span className="inline-flex size-8 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="size-4" />
                </span>
                {badge}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-6 size-20 rounded-full bg-accent/40 blur-3xl" />
          <div className="absolute -right-4 bottom-0 size-24 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative space-y-4">
            <Card className="items-start gap-3 rounded-3xl border border-border/50 bg-white p-6 text-left shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                selo de cuidado
              </p>
              <p className="text-3xl font-bold text-foreground">+120k refeições planejadas</p>
              <p className="text-sm text-muted-foreground">
                Comunidade compartilhando favoritinhos todos os dias.
              </p>
            </Card>
            <Card className="items-start gap-4 rounded-3xl border border-border/50 bg-white p-6 text-left shadow-xl">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  badgezinhos especiais
                </p>
                <div className="mt-4 space-y-2 text-sm text-foreground">
                  <p>• Planos com ingredientes brasileiros</p>
                  <p>• Porções ajustáveis para família</p>
                  <p>• Passo a passo com tempo real</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
