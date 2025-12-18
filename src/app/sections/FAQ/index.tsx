import DottedGlowBackground from "@/components/DottedGlowBackground";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "ats",
    question: "O que é ATS e por que importa?",
    answer:
      "ATS é o sistema que filtra currículos antes de chegar a um humano. Usamos formato, seções e palavras-chave para que seu currículo seja lido sem perder contexto.",
  },
  {
    id: "reescrita",
    question: "Vocês reescrevem meu currículo ou só sugerem?",
    answer:
      "Reescrevemos resumo e bullets com base na vaga e mantemos sugestões editáveis. Você pode aceitar ou ajustar antes de exportar.",
  },
  {
    id: "dados",
    question: "Meus dados ficam seguros?",
    answer:
      "Mantemos arquivos apenas para gerar versões e não vendemos dados. Você pode excluir os uploads a qualquer momento.",
  },
  {
    id: "areas",
    question: "Funciona para diferentes áreas?",
    answer:
      "Sim. Adaptamos linguagem e evidências para tech, produto, dados, marketing e outras áreas com foco em resultados e métricas.",
  },
  {
    id: "cancelamento",
    question: "Posso cancelar quando quiser?",
    answer:
      "Sim. Planos são sem fidelidade. Cancele a qualquer momento e continue com os arquivos já exportados.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden border-t py-16 sm:py-20"
    >
      <DottedGlowBackground className="-z-5! opacity-15" />
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Perguntas que recebemos com frequência.
          </h2>
          <p className="text-base text-muted-foreground">
            Respostas rápidas sobre ATS, reescrita, segurança e como cancelar.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border/60 bg-background">
          <Accordion
            type="single"
            collapsible
            className="divide-y divide-border/60"
          >
            {faqs.map((faq) => (
              <AccordionItem value={faq.id} key={faq.id}>
                <AccordionTrigger className="text-base font-semibold text-left text-foreground px-4 sm:px-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base px-4 sm:px-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
