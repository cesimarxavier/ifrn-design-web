const BIMESTRES_DATA = [
    // dados do primeiro bimestre
  {
    code: "B1",
    iconBgClass: "bg-gray-100",
    iconTextClass: "text-gray-700",
    title: "Bimestre 1 — HTML e Fundamentos",
    subtitle: "Semanas 1–10 • Estrutura semântica do zero",
    panelBorderTopClass: "border-gray-100",
    panelBgClass: "bg-gray-50",
    objetivo: "Dominar HTML semântico e criar sites multi-páginas sem CSS",
    oQueEntra: "Tags HTML, semântica, formulários, mídia, tabelas, navegação",
    entregaLabel: "📦 Entrega Parcial",
    entregaDescricao: "Mini-site multi-páginas sem estilização (só HTML)",
    weekCardBorderClass: "border-blue-200",
    weeks: [
      {
        number: 1,
        badgeType: "S",
        badgeClasses: "bg-blue-100 text-blue-700",
        summary: "Web, frontend e boilerplate HTML",
        details: [
          "O que é web, navegador, HTML básico. Estrutura mínima, salvar, abrir no navegador"
        ],
        bloom: "Lembrar / Compreender"
      },
      {
        number: 2,
        badgeType: "S",
        badgeClasses: "bg-blue-100 text-blue-700",
        summary: "Texto, headings, listas e links",
        details: [
          "h1-h6, p, strong, em, listas ul/ol. Âncoras, links internos/externos"
        ],
        bloom: "Aplicar"
      },
      {
        number: 3,
        badgeType: "I",
        badgeClasses: "bg-green-100 text-green-700",
        summary: "Semântica estrutural",
        details: [
          "header, nav, main, section, article, footer. Organizar página com essas tags"
        ],
        bloom: "Aplicar / Analisar"
      },
      {
        number: 4,
        badgeType: "I",
        badgeClasses: "bg-green-100 text-green-700",
        summary: "Mídia: imagens, vídeo, áudio",
        details: [
          "img com src/alt, figure/figcaption. video, audio, acessibilidade"
        ],
        bloom: "Aplicar"
      },
      {
        number: 5,
        badgeType: "S",
        badgeClasses: "bg-blue-100 text-blue-700",
        summary: "Tabelas semânticas",
        details: [
          "table, thead, tbody, tr, th, td. Construir tabela de dados real"
        ],
        bloom: "Aplicar"
      },
      {
        number: 6,
        badgeType: "I",
        badgeClasses: "bg-green-100 text-green-700",
        summary: "Formulários",
        details: [
          "form, input types, label, textarea. select, checkbox, radio, button"
        ],
        bloom: "Aplicar"
      },
      {
        number: 7,
        badgeType: "C",
        badgeClasses: "bg-purple-100 text-purple-700",
        summary: "Site multi-páginas com navegação",
        details: [
          "Estrutura de páginas interligadas. Navegação consistente entre páginas"
        ],
        bloom: "Criar"
      },
      {
        number: 8,
        badgeType: "I",
        badgeClasses: "bg-green-100 text-green-700",
        summary: "Organização de pastas e projeto",
        details: [
          "Estrutura de diretórios, caminhos relativos. Refatorar projeto com boa organização"
        ],
        bloom: "Analisar / Avaliar"
      },
      {
        number: 9,
        badgeType: "I",
        badgeClasses: "bg-green-100 text-green-700",
        summary: "SEO e acessibilidade básica",
        details: [
          "meta tags, title, lang, alt. Auditoria básica, corrigir problemas"
        ],
        bloom: "Avaliar"
      },
      {
        number: 10,
        badgeType: "C",
        badgeClasses: "bg-purple-100 text-purple-700",
        summary: "🎯 Checkpoint: Mini-site sem CSS",
        details: [
          "Revisão + prova teórica. Entrega e apresentação do projeto"
        ],
        bloom: "Criar / Avaliar"
      }
    ]
  },
    // dados do segundo bimestre
  {
    code: "B2",
    iconBgClass: "bg-green-100",
    iconTextClass: "text-green-700",
    title: "Bimestre 2 — CSS Básico + Identidade",
    subtitle: "Semanas 11–20 • Estilização e layout simples",
    panelBorderTopClass: "border-green-100",
    panelBgClass: "bg-green-50",
    objetivo: "Dominar CSS básico e criar identidade visual consistente",
    oQueEntra: "Seletores, box model, tipografia, cores, estados, responsivo básico",
    entregaLabel: "📦 Entrega Parcial",
    entregaDescricao: "Site completamente estilizado e responsivo (2 breakpoints)",
    weekCardBorderClass: "border-green-200",
    weeks: [
      { number: 11, summary: "CSS, seletores, cascade" },
      { number: 12, summary: "Tipografia e cores" },
      { number: 13, summary: "Box model (margin, padding, border)" },
      { number: 14, summary: "Layouts simples (display, width)" },
      { number: 15, summary: "Estados (hover, focus) + navbar" },
      { number: 16, summary: "Backgrounds e hero sections" },
      { number: 17, summary: "Componentização CSS leve" },
      { number: 18, summary: "Responsivo simples (2 breakpoints)" },
      { number: 19, summary: "Refino visual com rubrica" },
      {
        number: 20,
        summary: "Checkpoint: Site estilizado",
        highlight: true // Semana 20 🎯
      }
    ]
  },
  
    // sequencia de bimestres ou blocos
  {
    code: "B3",
    iconBgClass: "bg-purple-100",
    iconTextClass: "text-purple-700",
    title: "Bimestre 3 — Flexbox + Grid + Responsivo Real",
    subtitle: "Semanas 21–30 • Layouts modernos",
    panelBorderTopClass: "border-purple-100",
    panelBgClass: "bg-purple-50",
    objetivo: "Dominar Flexbox e Grid, criar layouts complexos e responsivos",
    oQueEntra: "Flexbox, Grid, mobile-first, 3 breakpoints, biblioteca componentes",
    entregaLabel: "📦 Entrega Parcial",
    entregaDescricao: "Landing page moderna e totalmente responsiva",
    weekCardBorderClass: "border-purple-200",
    weeks: [
      { number: 21, summary: "Flexbox base (justify, align, flex)" },
      { number: 22, summary: "Flexbox em UI real (navbar, cards)" },
      { number: 23, summary: "Debug Flexbox (troubleshooting)" },
      { number: 24, summary: "Grid base (template, areas)" },
      { number: 25, summary: "Grid responsivo (auto-fit, minmax)" },
      { number: 26, summary: "Layout completo moderno (Flex + Grid)" },
      { number: 27, summary: "Biblioteca de componentes reutilizáveis" },
      { number: 28, summary: "Responsivo 3 breakpoints (mobile-first)" },
      { number: 29, summary: "Acessibilidade responsiva" },
      {
        number: 30,
        summary: "Checkpoint: Landing moderna",
        highlight: true // Semana 30 🎯
      }
    ]
  },
    // sequencia de bimestres ou blocos
  {
    code: "B4",
    iconBgClass: "bg-orange-100",
    iconTextClass: "text-orange-700",
    title: "Bimestre 4 — JavaScript Básico + DOM",
    subtitle: "Semanas 31–40 • Manipulação dinâmica e interações",
    panelBorderTopClass: "border-orange-100",
    panelBgClass: "bg-orange-50",
    objetivo:
      "Aprender JavaScript do zero, dominar manipulação do DOM e criar interações dinâmicas em páginas web",
    oQueEntra:
      "Sintaxe JS, DOM, seletores, manipulação de conteúdo/classes, eventos, validações, manipulação dinâmica",
    entregaLabel: "📦 Entrega Final",
    entregaDescricao:
      "Site interativo completo (HTML+CSS+JS) publicado no Vercel",
    weekCardBorderClass: "border-orange-200",
    weeks: [
      {
        number: 31,
        link: "autoria-web/aula-31.html",
        badgeType: "S",
        badgeClasses: "bg-blue-100 text-blue-700",
        summary: "Introdução ao JavaScript",
        details: [
          "<strong>Aula 1:</strong> Sintaxe básica, console.log",
          "<strong>Aula 2:</strong> Variáveis (let, const), tipos de dados, funções básicas"
        ],
        bloom: "Lembrar / Compreender"
      },
      {
        number: 32,
        badgeType: "S",
        badgeClasses: "bg-blue-100 text-blue-700",
        summary: "DOM — Conceitos",
        details: [
          "O que é DOM, estrutura em árvore. Entender nós e elementos, DevTools"
        ],
        bloom: "Compreender / Analisar"
      },
      {
        number: 33,
        badgeType: "I",
        badgeClasses: "bg-green-100 text-green-700",
        summary: "Seleção de Elementos",
        details: [
          "getElementById, querySelector. querySelectorAll, diferenças práticas"
        ],
        bloom: "Aplicar"
      },
      {
        number: 34,
        badgeType: "I",
        badgeClasses: "bg-green-100 text-green-700",
        summary: "Manipulação de Conteúdo",
        details: [
          "innerHTML, textContent. Manipulação de atributos (src, href, alt)"
        ],
        bloom: "Aplicar"
      },
      {
        number: 35,
        badgeType: "I",
        badgeClasses: "bg-green-100 text-green-700",
        summary: "Estilos e Classes pelo JS",
        details: [
          "classList.add, classList.remove, toggle. style.property, manipulação inline"
        ],
        bloom: "Aplicar / Analisar"
      },
      {
        number: 36,
        badgeType: "C",
        badgeClasses: "bg-purple-100 text-purple-700",
        summary: "Eventos no DOM",
        details: [
          "onclick, addEventListener. Eventos de teclado e formulário (keypress, submit)"
        ],
        bloom: "Aplicar / Criar"
      },
      {
        number: 37,
        badgeType: "C",
        badgeClasses: "bg-purple-100 text-purple-700",
        summary: "Validações e Máscaras",
        details: [
          "Validação básica (campos vazios, regex simples). Máscaras simples, form handling"
        ],
        bloom: "Analisar / Criar"
      },
      {
        number: 38,
        badgeType: "C",
        badgeClasses: "bg-purple-100 text-purple-700",
        summary: "Manipulação Avançada",
        details: [
          "createElement, appendChild, remove. Inserção dinâmica no DOM, listas interativas"
        ],
        bloom: "Criar / Avaliar"
      },
      {
        number: 39,
        badgeType: "C",
        badgeClasses: "bg-purple-100 text-purple-700",
        summary: "Projeto Interativo",
        details: [
          "Planejamento: pequeno site interativo. Desenvolvimento: formulário validado + componentes dinâmicos"
        ],
        bloom: "Criar / Avaliar"
      },
      {
        number: 40,
        badgeType: "C",
        badgeClasses: "bg-purple-100 text-purple-700",
        summary: "🎯 Avaliação Final + Publicação",
        details: [
          "Revisão final, ajustes projeto. Deploy no Vercel + apresentação"
        ],
        bloom: "Avaliar"
      }
    ]
  }
];
