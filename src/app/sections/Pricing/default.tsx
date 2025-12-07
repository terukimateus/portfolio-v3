import { cn } from "@/lib/utils";
import {
  PricingColumn,
  PricingColumnProps,
} from "@/components/ui/pricing-column";
import { SectionContainer } from "@/components/SectionContainer";

interface PricingProps {
  title?: string | false;
  description?: string | false;
  plans?: PricingColumnProps[] | false;
  className?: string;
}

export default function Pricing({
  title = "Planos fofos, transparentes",
  description =
    "Escolha como quer cuidar da sua alimentação: teste grátis, IA ilimitada ou plano pensado para a família inteira.",
  plans = [
    {
      name: "Free",
      description: "Ideal para experimentar o cuidado saudável.",
      price: 0,
      priceNote: "✔ 15 receitas • ✔ 1 plano semanal",
      cta: {
        variant: "glow",
        label: "Começar grátis",
        href: "#hero",
      },
      features: ["✔ 15 receitas", "✔ 1 plano semanal"],
      variant: "default",
      currency: "R$",
      pricePeriod: "para sempre",
    },
    {
      name: "Plus",
      description: "Para viver a experiência completa com IA personalizada.",
      price: 14,
      priceNote: "Tudo ilimitado + IA personalizada + lista inteligente.",
      cta: {
        variant: "default",
        label: "Quero o Plus",
        href: "#hero",
      },
      features: [
        "✔ Tudo ilimitado",
        "✔ IA personalizada",
        "✔ Lista inteligente",
      ],
      variant: "glow-brand",
      currency: "R$",
      pricePeriod: "por mês",
    },
    {
      name: "Family",
      description: "Plano para família com rotinas sincronizadas.",
      price: 29,
      priceNote: "Cardápio familiar + ajuste de porções + dicas nutritivas.",
      cta: {
        variant: "default",
        label: "Plano família",
        href: "#hero",
      },
      features: [
        "✔ Cardápio familiar",
        "✔ Ajuste de porções",
        "✔ Dicas nutritivas",
      ],
      variant: "glow",
      currency: "R$",
      pricePeriod: "por mês",
    },
  ],
  className = "",
}: PricingProps) {
  return (
    <SectionContainer id="pricing" className={cn(className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        {(title || description) && (
          <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
            {title && (
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}
        {plans !== false && plans.length > 0 && (
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingColumn
                key={plan.name}
                name={plan.name}
                icon={plan.icon}
                description={plan.description}
                price={plan.price}
                priceNote={plan.priceNote}
                cta={plan.cta}
                features={plan.features}
                variant={plan.variant}
                className={plan.className}
              />
            ))}
          </div>
        )}
      </div>
    </SectionContainer>
  );
}
