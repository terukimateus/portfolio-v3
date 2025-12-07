import { Quote } from "lucide-react";

import Card from "@/components/Card";

const loveNotes = [
  {
    label: "Rotina mais leve",
    detail: "+3 refeições equilibradas por dia",
  },
  {
    label: "Tempo ganho",
    detail: "-5h/sem planejando",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-20 px-4 sm:px-6 lg:px-8"
      style={{
        background:
          "linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(255, 234, 209, 0.4) 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="grid-line h-full w-full" />
      </div>
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
          depoimentos
        </p>
        <Quote className="size-10 text-primary" />
        <blockquote className="font-display text-3xl font-semibold leading-snug text-balance text-foreground sm:text-4xl">
          “Finalmente consigo comer saudável sem stress.”
        </blockquote>
        <div className="space-y-1 text-muted-foreground">
          <p className="text-lg font-semibold text-foreground">Ana</p>
          <p className="text-sm">Empreendedora e mãe de dois</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {loveNotes.map((note) => (
            <Card
              key={note.label}
              className="items-start gap-2 rounded-2xl border border-border/50 bg-white/90 p-5 text-left shadow-lg backdrop-blur"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {note.label}
              </p>
              <p className="text-lg font-semibold text-foreground">{note.detail}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
