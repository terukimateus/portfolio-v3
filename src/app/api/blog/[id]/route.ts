import { NextResponse } from "next/server";

const articles: Record<string, { title: string; date: string; body: string }> =
  {
    "mateus-ai-journey": {
      title: "Como desenhei uma arquitetura RAG para copilots de engenharia",
      date: "13 jan 2026",
      body: `<p>Trabalhar com copilots exige uma <strong>arquitetura de dados contínua</strong>. Comecei mapeando todas as fontes relevantes, definindo camadas de validação e protocolos de versão que mantêm o conhecimento sincronizado com o backlog de engenharia.</p>
<p>Os principais passos foram:</p>
<ul>
  <li>Capturar mudanças em repositórios e docs com ganchos de webhooks e transformar em eventos vetorizáveis.</li>
  <li>NORMALIZAR vetores em um indexador único (Chroma + LangChain) que expõe contextos por versão de produto.</li>
  <li>Aplicar filtros de segurança e políticas de prompt antes de acionar o modelo generativo.</li>
</ul>
<p>Do lado da entrega, experimentei <em>retrieval</em> sem custos fixos, validando que cada resposta carrega metadados e confiança. Isso liberou o time para fazer pull requests com descrições geradas automaticamente e com referências executáveis.</p>`,
    },
    "langchain-security": {
      title: "Boas práticas de segurança para LangChain em produção",
      date: "05 dez 2025",
      body: `<p>Os riscos começam no prompt e vão até o transporte. Nossa abordagem segue três camadas:</p>
<ol>
  <li>Mascaramento de dados sensíveis nas entradas usando ranking e regex dinamicamente gerado.</li>
  <li>Gateways de prompt que limitam token budget e isolam APIs seguras.</li>
  <li>Observabilidade expandida: logs enodeados com UUID, alertas de deriva e dashboards de custo.</li>
</ol>
<p>Além disso, adicionamos policys de rollback e experiência de auditoria com snapshots de contexto para cada resposta gerada por LangChain.</p>`,
    },
    "ai-team-growth": {
      title: "Como construímos squads de IA que entregam valor rápido",
      date: "20 nov 2025",
      body: `<p>Para manter squads afiados seguimos com ritmos curtos:</p>
<ul>
  <li>Rituais semanais de <strong>demonstrations</strong> e feedback do produto.</li>
  <li>Documentação viva com templates de dados, features e hipóteses em Markdown.</li>
  <li>Pipeline CI/CD com testes de performance e drift antes de liberar cada modelo.</li>
</ul>
<p>O resultado foi um aumento de 3x na frequência de entregas validadas com stakeholders e uma cultura de experimentação contínua.</p>`,
    },
  };

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const article = articles[params.id];

  if (!article) {
    return NextResponse.json(
      { error: "Artigo não encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json(article);
}
