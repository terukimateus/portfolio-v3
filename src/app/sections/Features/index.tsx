import { Building2, Rocket, Wrench } from "lucide-react";

import { SectionContainer } from "@/components/SectionContainer";
import {
  PricingColumn,
  type PricingColumnProps,
} from "@/components/ui/pricing-column";

type ServicePlan = PricingColumnProps & { id: string };

const servicePlans: ServicePlan[] = [
  {
    id: "landing",
    name: "Landing Page",
    description:
      "Uma página única, enxuta e desenhada para transformar tráfego em leads.",
    price: 349,
    priceNote: "Escopo fechado. Entrega em até 10 dias.",
    cta: {
      variant: "default",
      label: "Quero uma landing que vende",
      href: "https://wa.me/5544998306622",
    },
    variant: "default",
    className: "h-full",
    icon: <Rocket className="size-5 text-emerald-300" />,
    features: [
      "Estrutura completa (hero, benefícios, prova social, oferta, garantia, FAQ)",
      "Layout responsivo em React/Next com boas práticas",
      "Integração com formulários, CRM/e-mail marketing e pixels",
      "SEO on-page básico + otimização de performance",
      "1 rodada de ajustes em layout e conteúdo",
      "Não inclui: copy do zero, gestão de campanhas ou manutenção contínua",
    ],
  },
  {
    id: "website",
    name: "Website Institucional",
    description:
      "Um site completo, claro e profissional, para quem precisa ir além de uma página única.",
    price: 699,
    priceNote: "Sites de 3-6 páginas com 1-2 rodadas de ajustes.",
    cta: {
      variant: "default",
      label: "Quero um site profissional",
      href: "https://wa.me/5544998306622",
    },
    variant: "glow-brand",
    className: "h-full",
    icon: <Building2 className="size-5 text-sky-300" />,
    features: [
      "Ideal para empresas e profissionais que precisam de 3-6 páginas bem organizadas",
      "Home, Sobre, Serviços, Portfólio/Cases, Contato e opcional Blog",
      "Site responsivo em stack moderna com performance",
      "Formulários, WhatsApp, mapa e SEO on-page em todas as páginas",
      "1-2 rodadas de ajustes combinadas",
      "Add-ons: Blog com CMS, área administrativa e versão multi-idioma",
    ],
  },
  {
    id: "sob-demanda",
    name: "Projetos Sob Demanda",
    description:
      "Aplicações web, backoffices, sistemas fullstack e agentes de IA sob medida.",
    price: "consulta",
    priceNote:
      "Projetos sob medida por escopo ou pacotes de horas, com entregas por fase.",
    cta: {
      variant: "default",
      label: "Quero discutir um projeto sob demanda",
      href: "https://wa.me/5544998306622",
    },
    variant: "glow",
    className: "h-full",
    icon: <Wrench className="size-5 text-amber-300" />,
    features: [
      "Levantamento de requisitos e desenho de arquitetura",
      "Módulos de IA e automações quando necessário",
      "Integrações com serviços e plataformas externas",
      "Documentação básica e deploy",
      "Forma de trabalho: escopo fechado, pacotes de horas e prazos claros",
    ],
  },
];

export function Features() {
  return (
    <section
      id="servicos"
      className="relative border-t overflow-hidden py-16 p-8 sm:py-20"
    >
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-3 px-4 text-center">
        <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          O que a Shift Studio constrói para você
        </h2>
        <p className="max-w-3xl text-base text-muted-foreground">
          Pacotes claros, com entregas objetivas e integrações prontas para
          crescer com o seu negócio.
        </p>
      </div>
      <div className="grid mt-10 gap-6 lg:grid-cols-3">
        {servicePlans.map(({ id, ...plan }) => (
          <PricingColumn key={id} {...plan} />
        ))}
      </div>
    </section>
  );
}
