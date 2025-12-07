import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  Banknote,
  Barcode,
  Building2,
  Car,
  Key,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { cn } from "@/lib/utils";

type BadgeFeature = {
  icon: LucideIcon;
  label: string;
};

const PRIMARY_FEATURES: BadgeFeature[] = [
  { icon: Award, label: "Cadastro de Pessoa Física" },
  { icon: Building2, label: "CNPJ" },
  { icon: Phone, label: "Telefone" },
  { icon: Mail, label: "E-mail" },
  { icon: Banknote, label: "Boleto" },
];

const SECONDARY_FEATURES: BadgeFeature[] = [
  { icon: MapPin, label: "Código de Endereçamento Postal" },
  { icon: Car, label: "Carteira Nacional de Habilitação" },
  { icon: Key, label: "Chave PIX" },
  { icon: Barcode, label: "Boleto" },
];

const REPEAT = 3;

interface MarqueeRowProps {
  items: BadgeFeature[];
  reverse?: boolean;
}

function MarqueeRow({ items, reverse = false }: MarqueeRowProps) {
  return (
    <div
      className="group flex flex-row overflow-hidden p-2 gap-(--gap)"
      style={
        {
          "--gap": "1rem",
          "--duration": "20s",
        } as CSSProperties
      }
    >
      {Array.from({ length: REPEAT }).map((_, index) => (
        <div
          key={`${reverse}-${index}`}
          className={cn(
            "flex shrink-0 flex-row justify-around gap-(--gap) animate-marquee paused group-hover:running",
            reverse && "[direction:reverse]"
          )}
        >
          {items.map((item) => (
            <div
              key={`${item.label}-${index}`}
              className="glass-4 ring-background/20 z-10 flex items-center gap-2 rounded-xl p-4 text-xs font-medium text-foreground/80 shadow-sm ring-4 transition-all duration-300"
            >
              <span className="text-primary bg-primary/10 dark:bg-background/20 border-background/20 inline-flex rounded-full border p-2">
                <item.icon className="size-4 stroke-[1.5]" />
              </span>
              <span className="whitespace-nowrap">{item.label}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

interface CarouselIllustrationProps {
  className?: string;
}

export function CarouselIllustration({ className }: CarouselIllustrationProps) {
  return (
    <div
      data-slot="carousel-illustration"
      className={cn(
        "relative flex h-full w-full flex-col items-center justify-center gap-4",
        className
      )}
    >
      <div className="relative z-10 flex w-full flex-col gap-3">
        <MarqueeRow items={PRIMARY_FEATURES} />
        <MarqueeRow items={SECONDARY_FEATURES} reverse />
      </div>

      <div
        data-slot="glow"
        className="absolute top-1/2 w-full scale-x-[1.5] opacity-20"
      >
        <div className="from-primary/40 to-primary/0 absolute left-1/2 h-64 w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-50 sm:h-[512px] dark:opacity-100 -translate-y-1/2" />
        <div className="from-primary/30 to-primary/0 absolute left-1/2 h-32 w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-40 sm:h-64 dark:opacity-100 -translate-y-1/2" />
      </div>
    </div>
  );
}
