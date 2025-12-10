"use client";

import { motion } from "motion/react";

import { Safari } from "@/components/SafariMockup/safari";
import { cn } from "@/lib/utils";
import { Iphone } from "@/components/IPhoneMockup";
import Ripple from "@/components/RippleBackground";
import Glow from "@/components/ui/glow";
import { Button } from "@/components/ui/button";

type CaseStudy = {
  id: string;
  borderLeft?: boolean;
  title: string;
  segment: string;
  type: string;
  result: string;
  mockup: "safari" | "mobile";
  image: string;
  url?: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "shift-hero",
    title: "Br-docs",
    segment: "Fintech",
    type: "Landing Page",
    result: "Página mais clara e tempo de carregamento 60% menor.",
    mockup: "safari",
    image: "/hero.png",
    url: "https://brdocs.terukimateus.dev/",
  },
  {
    id: "alessandra-mobile",
    title: "Alessandra Ferreira",
    type: "Landing Page",
    borderLeft: true,
    segment: "Terapeuta",
    result:
      "Aumento de 45% na conversão de visitantes em clientes através do novo site.",
    mockup: "mobile",
    url: "http://aferreirasexologia.com.br/",
    image: "./alessandra-lp.png",
  },
];

export function ResultsCases() {
  return (
    <section
      className="relative border-t overflow-hidden pt-16 sm:pt-20"
      id="cases"
    >
      <Ripple className="-z-10" />

      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center"
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              Resultados que falam mais alto
            </h2>
          </div>
        </motion.div>
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-50"></div>

        <div className="grid border-t lg:grid-cols-2">
          {CASE_STUDIES.map((caseStudy) => {
            const isMobileCase = caseStudy.mockup === "mobile";

            return (
              <article
                key={caseStudy.id}
                className={cn(
                  "flex flex-col h-96 relative overflow-hidden gap-6 bg-background/90 pt-6 px-6 backdrop-blur",
                  {
                    "border-l": caseStudy.borderLeft,
                    "flex-row items-center gap-10": isMobileCase,
                  }
                )}
              >
                <Glow variant="bottom" className="opacity-40 -z-10" />
                <div
                  className={cn(
                    "flex flex-col gap-6",
                    isMobileCase && "lg:flex-1"
                  )}
                >
                  <header className="space-y-3">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                      {caseStudy.segment}
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-2xl font-semibold text-foreground">
                        {caseStudy.title}
                      </h3>
                      {!isMobileCase && (
                        <Button
                          variant="default"
                          size="sm"
                          asChild
                          className="h-9 border border-border/50"
                        >
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={caseStudy.url ?? "#"}
                          >
                            Ver projeto
                          </a>
                        </Button>
                      )}
                    </div>
                  </header>

                  <p className="text-base text-muted-foreground">
                    {isMobileCase ? (
                      <>
                        {caseStudy.result}
                        <Button
                          variant="default"
                          size="sm"
                          asChild
                          className="border mt-3 border-border/50"
                        >
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={caseStudy.url ?? "#"}
                          >
                            Ver projeto
                          </a>
                        </Button>
                      </>
                    ) : (
                      caseStudy.result
                    )}
                  </p>
                </div>

                <div
                  className={cn(
                    "relative overflow-hidden w-full",
                    isMobileCase && "lg:-bottom-65"
                  )}
                >
                  {caseStudy.mockup === "safari" ? (
                    <Safari
                      imageSrc={caseStudy.image}
                      url={caseStudy.url}
                      className="rounded-3xl border border-border/30 bg-background shadow-2xl"
                    />
                  ) : (
                    <Iphone src={caseStudy.image} className="relative" />
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
