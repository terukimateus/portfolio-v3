"use client";

import { LucideBox, LucideRailSymbol, LucideLock } from "lucide-react";
import PlannetIllustration from "@/components/PlanetIllustration";
import { CodeBlock } from "@/components/ui/code-block";
import Card from "@/components/Card";

export function Install() {
  return (
    <section
      id="install"
      className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
        <div className="relative w-full max-w-5xl">
          <div className="relative h-80 md:h-90 overflow-hidden mask-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_35%,rgba(0,0,0,0)_100%)]">
            <div className="scale-x-110 md:scale-100">
              <PlannetIllustration />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Instalação Rápida
        </h2>

        <CodeBlock
          tabs={[
            {
              label: "npm",
              language: "bash",
              code: "npm install br-docs",
            },
            {
              label: "yarn",
              language: "bash",
              code: "yarn add br-docs",
            },
            {
              label: "pnpm",
              language: "bash",
              code: "pnpm add br-docs",
            },
          ]}
          className="text-left"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <LucideBox size={32} />
            <h3 className="font-bold mb-2">Lightweight</h3>
            <p className="text-sm text-muted-foreground">
              ~20KB minificado. Sem impacto na performance da sua app.
            </p>
          </Card>
          <Card>
            <LucideRailSymbol size={32} />
            <h3 className="font-bold mb-2">Instantâneo</h3>
            <p className="text-sm text-muted-foreground">
              Zero configuração. Comece a usar imediatamente.
            </p>
          </Card>
          <Card>
            <LucideLock size={32} />
            <h3 className="font-bold mb-2">Seguro</h3>
            <p className="text-sm text-muted-foreground">
              Sem requisições externas. Tudo roda localmente.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
