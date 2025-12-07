import Card from "@/components/Card";

const lifestyleFeatures = [
  {
    emoji: "🍑",
    title: "Recomendações baseadas no seu humor",
    description:
      "“Quero algo leve”, “Quero um doce saudável”, “Quero algo rápido”. A IA entende seu desejo do momento e sugere pratos realistas.",
    tags: ["Humor + IA", "Zero culpa"],
    accent: "#FFEAD1",
  },
  {
    emoji: "🥑",
    title: "Receitas em 10 minutos",
    description:
      "Pratos simples, gostosos e possíveis para a rotina real. Passo a passo claro, com substituições saudáveis.",
    tags: ["Até 10 min", "Ingredientes acessíveis"],
    accent: "#FFBFA9",
  },
  {
    emoji: "🍓",
    title: "Cardápio semanal automático",
    description:
      "Gere um cardápio equilibrado em 1 clique. Ajuste porções, troque refeições e mantenha tudo balanceado.",
    tags: ["Planejamento smart", "Auto-ajustes"],
    accent: "#F9FAFB",
  },
  {
    emoji: "🧺",
    title: "Lista de compras organizada",
    description:
      "Receba uma lista dividida por categorias com quantidades sugeridas. Marque itens e compartilhe com a família.",
    tags: ["Categoria por categoria", "Compartilhável"],
    accent: "#EBD8FF",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative py-20 px-4 sm:px-6 lg:px-8"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 234, 209, 0.35) 0%, rgba(249, 250, 251, 1) 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="grid-line h-full w-full" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12">
        <div className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            lifestyle + bem-estar
          </p>
          <h2 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Tudo pensado para cuidar de você
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Use a IA para planejar, cozinhar e comprar com carinho — sempre com cores pastel, comida de verdade e zero complicação.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {lifestyleFeatures.map((feature) => (
            <Card
              key={feature.title}
              className="items-start gap-4 rounded-3xl border border-border/60 bg-white/90 p-6 text-left shadow-lg backdrop-blur"
              style={{ background: `linear-gradient(180deg, ${feature.accent} 0%, rgba(255,255,255,0.95) 100%)` }}
            >
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-white/70 text-3xl shadow-inner">
                {feature.emoji}
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-foreground/5 px-3 py-1 text-xs font-semibold text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
