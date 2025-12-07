## White-label Landing Template

Base Next.js (App Router) template desenhado para clonar rapidamente novas landing pages de validação. Ele separa componentes, providers, hooks e variáveis de cor para que cada nova marca precise alterar apenas arquivos simples.

### Arquitetura

- `src/app/page.tsx` importa `MainPage`, mantendo a rota principal enxuta.
- `src/app/pages/main.tsx` concentra todas as sections e ordena os blocos da landing.
- `src/components/Nome/index.tsx` guarda cada bloco isolado (Hero, Features, Metrics, etc.).
- `src/providers` contém o `BrandProvider` e `AppProviders` para compartilhar dados globais.
- `src/hooks/use-brand.ts` expõe o contexto para componentes interativos (Header/Footer).
- `src/styles/colors.ts` define a paleta central e exporta um helper para aplicar as CSS vars.
- `src/config/site.ts` concentra textos, CTAs, navegação e métricas — troque este arquivo para gerar uma landing nova.

### Como personalizar

1. **Atualize as cores** em `src/styles/colors.ts` e, se quiser, crie paletas alternativas exportando novos objetos.
2. **Edite o conteúdo** em `src/config/site.ts` (hero, features, métricas, depoimentos e CTA).
3. **Adicione/remeça sections** diretamente dentro de `src/app/pages/main.tsx`, importando novos componentes em `src/components/*`.
4. **Disponibilize dados globais** via provider/hook caso precise de estados compartilhados entre sections.

### Scripts

```bash
pnpm dev    # desenvolvimento com hot reload
pnpm lint   # garante estilo consistente via ESLint
pnpm build  # checa se o template está pronto para deploy
```

### Deploy

Use `pnpm build` seguido de `pnpm start` localmente ou publique no Vercel. Como tudo está isolado por arquivos, basta duplicar o repositório e alterar cores + conteúdo.
