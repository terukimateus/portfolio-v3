"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import AnimatedBeamIcons from "@/components/AnimatedBeanIcons";
import {
  Gauge,
  Globe,
  MegaphoneOff,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

const fallbackItems = [
  {
    label: "Clareza",
    Icon: Sparkles,
    description: "Mensagem direta e objetiva.",
  },
  {
    label: "Confiança",
    Icon: ShieldCheck,
    description: "Design que reduz atrito.",
  },
  {
    label: "Conversão",
    Icon: MousePointerClick,
    description: "Fluxos guiados ao CTA.",
  },
  {
    label: "Escala",
    Icon: Gauge,
    description: "Stack moderna pronta para crescer.",
  },
];

export function AnimatedBeamDemo() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const disableAnimation = false;

  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  if (disableAnimation) {
    return (
      <div className="grid w-full gap-4 rounded-3xl border border-border/40 bg-background/60 p-6 text-left md:max-w-2xl">
        {fallbackItems.map(({ label, description, Icon }) => (
          <div key={label} className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                {label}
              </p>
              <p className="text-base text-foreground/80">{description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className="relative hidden md:flex h-[300px] w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row  text-primary items-center justify-between">
          <Circle ref={div1Ref}>
            <Sparkles />
          </Circle>
          <Circle ref={div5Ref}>
            <Gauge />
          </Circle>
        </div>
        <div className="flex flex-row  text-primary items-center justify-between">
          <Circle ref={div2Ref}>
            <ShieldCheck />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <Image
              src="/icon.png"
              alt="Matchly"
              width={80}
              height={80}
              className="h-16 w-16 object-contain filter brightness-0"
            />
          </Circle>
          <Circle ref={div6Ref}>
            <MousePointerClick />
          </Circle>
        </div>
        <div className="flex flex-row text-primary items-center justify-between">
          <Circle ref={div3Ref}>
            <MegaphoneOff />
          </Circle>
          <Circle ref={div7Ref}>
            <Globe />
          </Circle>
        </div>
      </div>

      <AnimatedBeamIcons
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeamIcons
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeamIcons
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeamIcons
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeamIcons
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeamIcons
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}
