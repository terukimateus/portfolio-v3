"use client";

import { cn } from "@/lib/utils";
import BackgroundBeams from "@/components/BackgroundBeams";
import { AnimatedBeamDemo } from "@/registry/magicui/animated-beam";
import {
  Gauge,
  MegaphoneOff,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import { forwardRef, useRef } from "react";

const Circle = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white shadow-[0_20px_60px_rgba(37,99,235,0.25)] backdrop-blur",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
Circle.displayName = "Circle";

export function LeanPresence() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const centerRef = useRef<HTMLDivElement | null>(null);
  const clarityRef = useRef<HTMLDivElement | null>(null);
  const conversionRef = useRef<HTMLDivElement | null>(null);
  const updatesRef = useRef<HTMLDivElement | null>(null);
  const stackRef = useRef<HTMLDivElement | null>(null);
  const trustRef = useRef<HTMLDivElement | null>(null);
  const automationRef = useRef<HTMLDivElement | null>(null);

  const nodes = [
    {
      ref: clarityRef,
      label: "Clareza comercial",
      Icon: MegaphoneOff,
      className: "left-6 top-10",
      curvature: 140,
    },
    {
      ref: conversionRef,
      label: "Conversão constante",
      Icon: MousePointerClick,
      className: "right-6 top-12",
      curvature: 140,
    },
    {
      ref: updatesRef,
      label: "Atualizações ágeis",
      Icon: Wrench,
      className: "left-6 top-1/2 -translate-y-1/2",
      curvature: 120,
    },
    {
      ref: trustRef,
      label: "Confiança imediata",
      Icon: ShieldCheck,
      className: "right-6 top-1/2 -translate-y-1/2",
      curvature: 120,
    },
    {
      ref: stackRef,
      label: "Stack moderna",
      Icon: Gauge,
      className: "left-6 bottom-12",
      curvature: 160,
    },
    {
      ref: automationRef,
      label: "Automação enxuta",
      Icon: Sparkles,
      className: "right-6 bottom-12",
      curvature: 160,
    },
  ];

  return (
    <section id="porque" className="relative border-y overflow-hidden py-20">
      <BackgroundBeams className="pointer-events-none z-10 opacity-80" />
      <div className="absolute z-20 fade-y w-full h-full inset-0" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center">
        <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          Mais resultado com menos ruído.
        </h2>
        <p className="max-w-3xl text-base text-muted-foreground">
          Focamos na mensagem certa, velocidade e tecnologia moderna para que
          sua página gere demanda sem distrações. Tudo direciona o visitante
          para entender, confiar e tomar ação.
        </p>

        <AnimatedBeamDemo />
      </div>
    </section>
  );
}

export default LeanPresence;
