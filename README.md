# ZoioTech Hub

Central pessoal para acessar, organizar e acompanhar os aplicativos e projetos do ecossistema ZoioTech.

## Objetivo

O Hub funciona como uma camada de controle sobre aplicações independentes. Ele **não incorpora os códigos** dos demais projetos: cada aplicativo continua no seu próprio repositório e deployment.

## MVP

- dashboard neon/dark responsivo;
- interface desktop e mobile;
- catálogo tipado de aplicações;
- busca por nome, descrição, categoria e tags;
- filtros por categoria e status;
- KPIs calculados a partir do catálogo;
- links para aplicação e GitHub;
- painel de atividade local preparado para futura integração com GitHub.

## Stack

- React 19
- TypeScript
- Vite
- Lucide React
- CSS responsivo sem framework visual

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Estrutura

```text
src/
  components/  componentes reutilizáveis do Hub
  data/        catálogo de apps e atividade temporária
  types/       contratos TypeScript
  App.tsx      composição principal
  styles.css   design system e responsividade
```

## Próximas fases

1. identidade visual própria e refinada por aplicação;
2. integração GitHub para commits, CI e atividade real;
3. health checks das URLs publicadas;
4. autenticação do Hub;
5. analytics e alertas.
