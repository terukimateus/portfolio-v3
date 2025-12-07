"use client";

import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";
import { MagicButton } from "@/components/ui/magic-button";
import { Download, BookOpen } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden pt-20">
      {/* Grid background */}
      <div className="absolute inset-0 grid-line" />

      {/* Gradient orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center justify-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-primary/30 mb-8">
          <span className="text-primary text-sm">✨ Open-Source</span>
        </div>

        {/* Main Title */}
        <h1 className="text-2xl md:text-5xl font-bold mb-6 text-balance leading-tight">
          br-docs
          <br />
          <span className="gradient-text">validação completa</span> de
          documentos brasileiros
        </h1>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
          <MagicButton
            href="https://www.npmjs.com/package/br-docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="inline-flex items-center gap-2">
              <Download size={20} />
              <span>Instalar agora (npm)</span>
            </div>
          </MagicButton>
          <Button variant="default">
            <div className="inline-flex items-center gap-2">
              <BookOpen size={20} />
              <span>Ver documentação</span>
            </div>
          </Button>
        </div>

        {/* Code snippet */}
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
          className="w-72 text-left"
        />
      </div>
    </section>
  );
}
