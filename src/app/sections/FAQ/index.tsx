import GridBackground from "@/components/GridBackground";
import { SectionContainer } from "@/components/SectionContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Glow from "@/components/ui/glow";

const faqs = [
  {
    id: "prazo",
    question: "Quanto tempo leva para entregar uma landing page?",
    answer:
      "Projetos entram em produção logo após o kickoff e levam em média 7 a 10 dias corridos, incluindo QA e uma rodada de ajustes. Escopos extras ou integrações fora do padrão podem estender o prazo, mas sempre alinhamos isso antes de iniciar.",
  },
  {
    id: "copy",
    question: "Vocês também criam a copy do zero?",
    answer:
      "Sim, oferecemos serviços de copywriting como um extra opcional. Nossa equipe pode desenvolver textos persuasivos e otimizados para conversão, alinhados com a proposta de valor e o público-alvo do seu negócio.",
  },
  {
    id: "ads",
    question: "A Shift faz gestão de anúncios?",
    answer:
      "Não gerenciamos mídia paga do dia a dia. Nosso foco é entregar a infraestrutura (páginas, tracking e integrações) pronta para a equipe ou parceiro de tráfego escalar campanhas. Podemos indicar parceiros e configurar pixels, eventos e UTMs como extra.",
  },
  {
    id: "manutencao",
    question: "Como funciona a manutenção após a entrega?",
    answer:
      "Toda entrega tem 30 dias de garantia para correções dentro do escopo contratado. Para melhorias contínuas, oferecemos pacotes mensais de manutenção e otimizações, automações e pequenos ajustes.",
  },
];

export function FAQ() {
  return (
    <SectionContainer
      id="faq"
      eyebrow="FAQ"
      headline="Dúvidas frequentes"
      description="Escopo claro, extras opcionais e combinação transparente de prazos, custos e responsabilidades."
      className="px-12 pb-16 border-b"
    >
      <Glow
        variant="bottom"
        className=" left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 "
      />
      <Accordion type="single" collapsible className="border p-2 ">
        {faqs.map((faq) => (
          <AccordionItem value={faq.id} key={faq.id}>
            <AccordionTrigger className="text-base font-semibold text-left text-foreground">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionContainer>
  );
}
