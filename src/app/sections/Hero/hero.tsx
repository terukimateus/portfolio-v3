"use client";

import { Safari } from "@/components/SafariMockup/safari";
import { Button } from "@/components/ui/button";
import { MagicButton } from "@/components/ui/magic-button";
import { ArrowRight, PlayCircle } from "lucide-react";

const mockupPlaceholder =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='700' viewBox='0 0 1200 700' fill='none'>
      <rect width='1200' height='700' rx='28' fill='%23020617'/>
      <rect x='48' y='48' width='220' height='32' rx='16' fill='%232563eb'/>
      <rect x='48' y='112' width='360' height='54' rx='18' fill='%23111827'/>
      <rect x='48' y='186' width='280' height='20' rx='10' fill='%23e5e7eb' fill-opacity='0.35'/>
      <rect x='48' y='226' width='320' height='20' rx='10' fill='%23e5e7eb' fill-opacity='0.25'/>
      <rect x='48' y='276' width='180' height='44' rx='16' fill='%232563eb'/>
      <rect x='240' y='276' width='200' height='44' rx='16' fill='%23f97316' fill-opacity='0.9'/>
      <rect x='48' y='356' width='520' height='260' rx='22' fill='url(%23grad1)'/>
      <rect x='600' y='112' width='552' height='140' rx='22' fill='%23111827'/>
      <rect x='600' y='272' width='552' height='64' rx='16' fill='%230b1220'/>
      <rect x='600' y='356' width='552' height='260' rx='22' fill='%23111827'/>
      <defs>
        <linearGradient id='grad1' x1='48' y1='356' x2='568' y2='616' gradientUnits='userSpaceOnUse'>
          <stop stop-color='%232563eb'/>
          <stop offset='1' stop-color='%2322c55e'/>
        </linearGradient>
      </defs>
    </svg>
  `);

export function Hero() {
  return (
    <section className="relative min-h-screen flex justify-center items-center overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 grid-line" />
      <div className="absolute -top-16 -right-24 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute -bottom-12 -left-16 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight text-balance text-foreground">
              Presença digital enxuta para negócios que querem vender, não só
              aparecer.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Shift Studio cria landing pages, sites e produtos digitais com
              foco total em clareza, velocidade e conversão — sem ruído, sem
              complicação.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <MagicButton href="#contato">
                <div className="inline-flex items-center gap-2">
                  <ArrowRight size={18} />
                  <span>Agendar call gratuita</span>
                </div>
              </MagicButton>
              <Button
                asChild
                variant="outline"
                className="border-border/70 bg-background/60 hover:bg-foreground/5"
              >
                <a href="#cases" className="inline-flex items-center gap-2">
                  <PlayCircle size={18} />
                  Ver exemplos de projetos
                </a>
              </Button>
            </div>
          </div>

          <div className="relative left-30 -bottom-10 lg:-bottom-20 lg:left-60">
            <div className="absolute inset-0 blur-3xl bg-primary/20 rounded-full" />
            <div className="lg:scale-[1.8] scale-[1.4] md:scale-[1.1] relative rounded-3xl border border-border/60 bg-background/70 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              <Safari imageSrc="./hero.png" url="brdocs.dev" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
