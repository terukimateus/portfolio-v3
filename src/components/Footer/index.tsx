import { Instagram, Mail, MessageCircleHeart, Leaf } from "lucide-react";

const quickLinks = [
  { label: "Recursos", href: "#features" },
  { label: "Confiança", href: "#porque-confiar" },
  { label: "Planos", href: "#pricing" },
  { label: "Depoimentos", href: "#testimonials" },
  { label: "Instalar", href: "#install" },
];

const supportLinks = [
  { label: "Central de ajuda", href: "mailto:oi@calmameals.com" },
  { label: "Guia de receitas", href: "#features" },
  { label: "Lista inteligente", href: "#pricing" },
];

export function Footer() {
  return (
    <footer
      className="border-t border-border/40"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 234, 209, 0.45), rgba(249, 250, 251, 1))",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-white text-3xl shadow-inner">
                �
              </span>
              <div>
                <p className="text-2xl font-bold text-foreground">CalmaMeals</p>
                <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                  alimentar com carinho
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Planos saudáveis guiados por IA, com receitas reais, lista de compras
              organizada e rotina gentil para toda a família.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Navegar
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition hover:text-foreground">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Suporte
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {supportLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition hover:text-foreground">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border/50 bg-white/70 p-5 shadow-lg backdrop-blur">
            <p className="text-sm font-semibold text-foreground">
              Entre para o clube das refeições leves
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Receba ideias de cardápio, listas prontas e novidades direto no e-mail.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="mailto:oi@calmameals.com"
                className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
              >
                <Mail className="size-4" /> oi@calmameals.com
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-foreground"
              >
                <Instagram className="size-4" /> @calmameals
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border/40 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} CalmaMeals. Feito com carinho e IA.</p>
          <div className="flex flex-wrap gap-3 text-foreground">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold">
              <Leaf className="size-3 text-primary" /> Ingredientes reais
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold">
              <MessageCircleHeart className="size-3 text-accent-foreground" />
              Comunidade acolhedora
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
