"use client";

import { Apple, ChefHat, ShoppingBasket, Sparkles, Timer } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mockup, MockupFrame } from "@/components/Mockup";

const moodFilters = [
  "Quero algo leve",
  "Quero um doce saudável",
  "Quero algo rápido",
];

const heroHighlights = [
  {
    icon: <Sparkles className="size-4 text-primary" />,
    title: "Planos em 1 clique",
    description: "IA monta o cardápio da semana com substituições inteligentes.",
  },
  {
    icon: <ShoppingBasket className="size-4 text-accent-foreground" />,
    title: "Lista inteligente",
    description: "Compras organizadas por categoria para você não esquecer nada.",
  },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pt-24 pb-20"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 10% 20%, rgba(255, 191, 169, 0.45), transparent 55%), radial-gradient(circle at 80% 0%, rgba(124, 58, 237, 0.35), transparent 50%)",
        }}
      />
      <div className="absolute inset-0 grid-line opacity-30" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="space-y-8">
          <Badge variant="secondary" className="bg-secondary/80 text-sm">
            🍃 Nova experiência guiada por IA
          </Badge>
          <div className="space-y-4">
            <h1 className="text-4xl font-black leading-tight text-balance text-foreground sm:text-5xl lg:text-6xl font-display">
              Alimentação saudável sem complicação 💛
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              A IA cuida da parte difícil — você só aproveita refeições práticas, gostosas
              e equilibradas, adaptadas ao seu humor e rotina.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button className="h-12 px-6 text-base shadow-lg" size="lg">
              Criar meu plano saudável
            </Button>
            <Button variant="outline" className="h-12 px-6 text-base" size="lg">
              Ver ideias de receitas
            </Button>
          </div>

          <div className="flex flex-wrap gap-3">
            {moodFilters.map((filter) => (
              <Badge
                key={filter}
                variant="outline"
                className="border-border/60 bg-white/70 text-sm backdrop-blur"
              >
                {filter}
              </Badge>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {heroHighlights.map((highlight) => (
              <div
                key={highlight.title}
                className="rounded-2xl border border-border/60 bg-white/80 p-4 shadow-sm backdrop-blur-md"
              >
                <div className="inline-flex size-10 items-center justify-center rounded-full bg-primary/10">
                  {highlight.icon}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {highlight.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-10 -left-6 size-16 rounded-full bg-accent/60 blur-3xl" />
          <div className="absolute -bottom-8 -right-4 size-20 rounded-full bg-primary/40 blur-3xl" />
          <Mockup type="mobile" className="mx-auto bg-white text-slate-900">
            <div className="w-full rounded-[40px] border border-border/40 bg-white/95 p-5 shadow-2xl">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Seg • 07 Dez</span>
                <span>08:45</span>
              </div>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl bg-(--surface) p-4">
                  <p className="text-sm text-slate-500">Plano do dia</p>
                  <p className="text-2xl font-semibold text-slate-900">Smoothie energético</p>
                  <p className="text-sm text-slate-600">+ Aveia com manga • 10 min</p>
                  <div className="mt-3 flex items-center gap-2 text-sm text-primary">
                    <Timer className="size-4" /> Pronto em 10 minutos
                  </div>
                </div>
                <MockupFrame size="large" className="bg-white shadow-inner">
                  <div className="flex flex-col gap-3 rounded-2xl bg-(--surface-muted)/60 p-4">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>SEMANA</span>
                      <span>IA ativa</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-white p-3 shadow-sm">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Apple className="size-4 text-primary" /> Café
                        </div>
                        <p className="text-sm font-semibold text-slate-900">
                          Bowl de frutas 🍓
                        </p>
                        <span className="text-xs text-slate-500">Leve e doce</span>
                      </div>
                      <div className="rounded-xl bg-white p-3 shadow-sm">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <ChefHat className="size-4 text-accent-foreground" /> Jantar
                        </div>
                        <p className="text-sm font-semibold text-slate-900">
                          Ravioli de abóbora 🧡
                        </p>
                        <span className="text-xs text-slate-500">Conforto rápido</span>
                      </div>
                    </div>
                    <div className="rounded-xl bg-white p-4 shadow-sm">
                      <div className="flex items-center justify-between text-sm font-semibold text-slate-900">
                        Lista da semana
                        <span className="text-primary">Atualizada</span>
                      </div>
                      <ul className="mt-2 space-y-1 text-xs text-slate-600">
                        <li>• Frutas frescas (berries, manga)</li>
                        <li>• Grãos integrais (quinoa, aveia)</li>
                        <li>• Legumes para assar (abóbora, brócolis)</li>
                      </ul>
                    </div>
                  </div>
                </MockupFrame>
              </div>
            </div>
          </Mockup>
          <div className="absolute -left-6 top-10 flex flex-col gap-3 rounded-2xl border border-border/40 bg-white/90 p-4 text-sm shadow-lg backdrop-blur">
            <p className="text-xs text-muted-foreground">Humor de hoje</p>
            <p className="text-lg font-semibold text-foreground">Doce saudável 🍑</p>
            <span className="text-xs text-muted-foreground">IA buscando receitas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
