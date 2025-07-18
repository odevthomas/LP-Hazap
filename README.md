
# LP Vendas Hazap


<img width="1920" height="1080" alt="7" src="https://github.com/user-attachments/assets/85d59618-c729-498d-995c-6140bfb02047" />

---


## Visão Geral

Este projeto é uma plataforma web moderna e responsiva para a **Hazap Computadores**, empresa especializada em venda de computadores personalizados, PCs gamers e estações de trabalho otimizadas para profissionais.

O objetivo principal é oferecer uma experiência digital focada em:

- **Alto desempenho e velocidade**, garantindo carregamento rápido mesmo em conexões lentas.
- **SEO avançado** para posicionar a loja nas primeiras posições de busca, atraindo clientes da região de Campinas e interior de São Paulo.
- **Conversão otimizada**, com chamadas para ação claras e direcionamento rápido ao atendimento via WhatsApp, canal prioritário da empresa.
- **Design responsivo e acessível**, para garantir uma navegação fluida e confortável em qualquer dispositivo (desktop, tablet ou smartphone).

---

## Tecnologias Utilizadas

- React 18 com Next.js (ou React + Vite) para construção da interface.
- TypeScript para maior robustez e manutenção do código.
- Tailwind CSS para estilização rápida, responsiva e consistente.
- React Icons para ícones semânticos e visual atrativo.
- Supabase para armazenamento de vídeos e imagens.
- GitHub Actions para automação CI/CD (Deploy contínuo).
- Vercel / AWS para hospedagem com alta disponibilidade e performance.
- Google Tag Manager para controle e monitoramento de eventos e conversões.
- Schema.org (JSON-LD) para otimização SEO estrutural.

---

## Estrutura do Projeto

```bash
/
├── public/                   # Imagens, logos, vídeos públicos
│   ├── vendas/
│       ├── logo.png
│       ├── wpp.svg
│       └── ...
├── src/
│   ├── components/           # Componentes React reutilizáveis
│   │   ├── HeroSection.tsx
│   │   ├── CarouselSection.tsx
│   │   └── AtendimentoWhatsapp.tsx
│   ├── pages/                # Páginas da aplicação
│   │   ├── index.tsx         # Página principal
│   │   └── vendas/
│   │       └── atendimentoWhatsapp.tsx
│   ├── styles/               # Configurações e arquivos Tailwind
│   └── main.tsx              # Ponto de entrada da aplicação
├── .github/workflows/        # Configuração CI/CD GitHub Actions
├── package.json              # Dependências e scripts
├── tailwind.config.js        # Configuração do Tailwind CSS
└── README.md                 # Este arquivo
````

---

## Funcionalidades Principais

### 1. HeroSection (Seção inicial)

* Vídeo de fundo com overlay em degrade para foco no conteúdo.
* Logo e slogan com texto em gradiente para destaque visual.
* Botão chamativo para contato via WhatsApp, com efeitos visuais (pulse).
* Contador dinâmico mostrando tempo de resposta estimado dos especialistas.
* Mensagem de especialistas online com status em tempo real.
* Layout 100% responsivo com ajustes para telas de diferentes tamanhos.

### 2. CarouselSection (Seção de produtos)

* Apresentação em cards com vídeo ou galeria de imagens.
* Destaques dos diferenciais dos PCs em tópicos claros com ícones.
* Botões de ação para contato direto via WhatsApp com mensagem personalizada.
* Carrossel customizado para navegação intuitiva entre imagens.
* Foco na clareza, legibilidade e estética moderna.

### 3. AtendimentoWhatsapp (Página de redirecionamento)

* Redireciona automaticamente para WhatsApp com mensagem pré-formatada.
* Contador regressivo visível para informar o usuário.
* Opção manual para abrir o WhatsApp se o redirecionamento automático não ocorrer.
* Layout minimalista, acessível e totalmente responsivo.
* Informações de segurança e confidencialidade reforçadas no rodapé.

---

## Como Rodar o Projeto Localmente

### Requisitos

* Node.js >= 18
* Yarn ou npm
* Git

### Passos

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/hazap-vendas.git
cd hazap-vendas
```

Instale as dependências:

```bash
yarn install
# ou
npm install
```

Inicie o servidor de desenvolvimento:

```bash
yarn dev
# ou
npm run dev
```

Abra no navegador: `http://localhost:3000`

---

## Build e Deploy

Para gerar a versão de produção (build otimizado):

```bash
yarn build
# ou
npm run build
```

O build será gerado na pasta `dist` (ou `.next` no Next.js).

Para criar o arquivo zip do build no Ubuntu:

```bash
zip -r hazap-vendas-dist.zip dist/
```

Faça deploy na plataforma escolhida (Vercel, AWS, Netlify, etc), configurando seu domínio e certificados SSL.

---

## SEO e Conversão

* Uso de meta tags otimizadas para título, descrição, palavras-chave e Open Graph.
* Implementação de Schema.org via JSON-LD para estruturação dos dados e melhor indexação.
* Páginas com conteúdo textual relevante e atualizado.
* Botões de ação claros e persistentes, com mensagens personalizadas no WhatsApp para agilizar o atendimento.
* Monitoramento via Google Tag Manager para rastrear cliques e conversões.
* Layout responsivo e acessível para manter usuários engajados e reduzir taxa de rejeição.

---

## Acessibilidade

* Uso de roles e labels ARIA nos elementos importantes.
* Contraste alto e cores pensadas para fácil leitura.
* Navegação por teclado e foco visível.
* Alternativas para imagens (alt text) e carregamento otimizado.

