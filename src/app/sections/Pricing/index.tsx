"use client";

import { useMemo, useState } from "react";

import { Sparkles, ShieldCheck, Rocket } from "lucide-react";

import {
  PricingColumn,
  type PricingColumnProps,
} from "@/components/ui/pricing-column";
import { Switch } from "@/components/ui/switch";

type ServicePlan = PricingColumnProps & { id: string };

const servicePlans: ServicePlan[] = [
  {
    id: "free",
    name: "Free",
    description: "Para testar rápido sem cartão.",
    price: 0,
    priceNote: "Inclui 1 currículo base e até 3 adaptações/mês.",
    cta: {
      variant: "default",
      label: "Começar grátis",
      href: "#analisar",
    },
    variant: "default",
    className: "h-full",
    icon: <Sparkles className="size-5 text-sky-300" />,
    features: ["Score + checklist básico", "Export básico em PDF/Docx"],
  },
  {
    id: "premium",
    name: "Premium",
    description: "Para adaptar ilimitado e ganhar velocidade.",
    price: 79,
    priceNote: "Inclui 10 adaptações/mês + biblioteca de versões.",
    cta: {
      variant: "glow",
      label: "Assinar Premium",
      href: "#planos",
    },
    variant: "glow",
    className: "h-full",
    icon: <ShieldCheck className="size-5 text-emerald-300" />,
    features: [
      "Adaptações ilimitadas por vaga",
      "Score avançado + sugestões por seção",
      "Biblioteca de versões por vaga",
      "Matching de vagas completo",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description: "Para quem quer otimização profunda e suporte dedicado.",
    price: 124,
    priceNote:
      "Inclui 20 adaptações/mês + otimização profunda + histórico e comparações.",
    cta: {
      variant: "default",
      label: "Crie sua conta Pro",
      href: "#contato",
    },
    variant: "default",
    className: "h-full",
    icon: <Rocket className="size-5 text-amber-300" />,
    features: [
      "Tudo do Premium",
      "Otimização profunda com múltiplos modelos",
      "Histórico + comparações + priorização de gaps",
      "Suporte prioritário",
    ],
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const displayedPlans = useMemo(() => {
    return servicePlans.map((plan) => {
      const numericPrice = Number(plan.price);
      const hasPrice = !Number.isNaN(numericPrice) && numericPrice > 0;
      const discountedPrice = hasPrice
        ? Math.round(numericPrice * 0.8)
        : plan.price;

      const price = isAnnual ? discountedPrice : plan.price;

      const billingLabel = hasPrice
        ? isAnnual
          ? "por mês (cobrança anual)"
          : "pagamento mensal"
        : undefined;

      const billingSubLabel = hasPrice
        ? isAnnual
          ? "20% off no plano anual"
          : "migre para anual e economize 20%"
        : undefined;

      return {
        ...plan,
        price,
        billingLabel,
        billingSubLabel,
      } satisfies ServicePlan;
    });
  }, [isAnnual]);

  return (
    <section
      id="planos"
      className="relative border-t overflow-hidden py-16 p-8 sm:py-20"
    >
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-3 px-4 text-center">
        <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          Planos para adaptar seu currículo em minutos
        </h2>
        <p className="max-w-3xl text-base text-muted-foreground">
          Teste grátis, faça adaptações ilimitadas no Premium ou fale com a
          gente para otimização profunda no Pro.
        </p>
        <div className="mt-4 flex items-center gap-3 text-sm">
          <span
            className={!isAnnual ? "font-semibold" : "text-muted-foreground"}
          >
            Mensal
          </span>
          <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
          <span
            className={isAnnual ? "font-semibold" : "text-muted-foreground"}
          >
            Anual (-20%)
          </span>
        </div>
      </div>
      <div className="grid mt-10 gap-6 lg:grid-cols-3">
        {displayedPlans.map(({ id, ...plan }) => (
          <PricingColumn key={id} {...plan} />
        ))}
      </div>
    </section>
  );
}
