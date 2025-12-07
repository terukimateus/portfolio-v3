import { CheckCircle, Rocket, Package, Users } from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { CarouselIllustration } from "@/components/CarouselIllustration";
import GlobeIllustration from "@/components/GlobeIllustration";
import { CommitStack } from "@/components/CommitStack";
import NetworkIllustration from "@/components/NetworkIllustration";

const features = [
  {
    Icon: CheckCircle,
    name: "Validação Completa",
    description:
      "Valide CPF, CNPJ, CEP, CNH, telefone, e-mail, PIX, boletos e códigos de barras com precisão e um único clique.",
    href: "#validacao",
    cta: "Explorar",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <CarouselIllustration className="top-10! h-auto absolute! max-w-4xl" />
        <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none bg-linear-to-t from-black/70 via-black/30 to-transparent" />
      </div>
    ),
  },
  {
    Icon: Rocket,
    name: "Altíssima Performance",
    description:
      "Desempenho otimizado para aplicações de alta demanda, garantindo respostas rápidas e eficientes.",
    href: "#performance",
    cta: "Descobrir",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-lg">
          <GlobeIllustration className="w-full h-auto transform-gpu scale-90" />

          <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none bg-linear-to-t from-black/70 via-black/30 to-transparent" />
        </div>
      </div>
    ),
  },
  {
    Icon: Users,
    name: "Open-Source",
    description:
      "Comunidade ativa, GitHub aberto e contribuições guiadas pela transparência e segurança.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 z-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.65),transparent_80%)] blur-4xl" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-[40px] bg-linear-to-br from-emerald-400/50 via-emerald-400/10 to-transparent blur-3xl" />

        <div className="flex h-full w-full items-center justify-center">
          <CommitStack />
          <div className="absolute inset-x-0 bottom-0 z-100 h-32 pointer-events-none bg-linear-to-t from-black via-black/60 to-transparent" />
        </div>
      </div>
    ),
  },
  {
    Icon: Package,
    name: "Zero Dependências",
    description:
      "Pacote leve que roda sem nada além do Node.js, ideal para embarcar em qualquer projeto.",
    href: "#zero-dependencias",
    cta: "Ver detalhes",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="flex h-full w-full items-center justify-center">
          <NetworkIllustration icon={Package} />
          <div className="absolute z-10 inset-x-0 bottom-0 h-32 pointer-events-none bg-linear-to-t from-black via-black/50 to-transparent" />
        </div>
      </div>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Funcionalidades
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Tudo que você precisa para trabalhar com documentos brasileiros com
            segurança e performance.
          </p>
        </div>

        <BentoGrid className="gap-6">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
