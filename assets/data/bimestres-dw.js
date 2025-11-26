// bimestres de design web

const PLANO_60_AULAS = {
  titulo: "Plano Semana a Semana (60 aulas)",
  subtitulo: "15 semanas estruturadas com progressão pedagógica intencional",
  blocks: [
    // BLOCO 1 -----------------------------------------------------------
    {
      ordem: 1,
      label: "BLOCO 1",
      titulo: "Revisão CSS Avançado",
      semanasRange: "1-2",
      objetivoBloco: "Reativar base e componentização",
      bloomBloco: "Lembrar / Compreender",
      estilo: {
        gradienteFrom: "blue-100",
        gradienteTo: "blue-50",
        borderColor: "blue-300"
      },
      semanas: [
        {
          numero: 1,
          nivelBadge: "S",
          nivelBadgeClasses: "bg-blue-100 text-blue-700",
          corHeader: "blue-600",
          titulo: "Reativar Base CSS Avançado",
          faixaAulas: "A1–A4 · Lembrar/Compreender",
          bloomSemana: "Lembrar / Compreender",
          dias: [
            {
              tipo: "Teoria/Novo",
              label: "📖 Dia 1: Teoria/Novo",
              itens: [
                "Revisão: cascata, especificidade, herança",
                "Classes utilitárias vs componentes",
                "Padrões BEM / Atomic CSS",
                "Quiz diagnóstico inicial"
              ]
            },
            {
              tipo: "Prática/Reforço",
              label: "💻 Dia 2: Prática/Reforço",
              itens: [
                "Recriar UI conhecida só com CSS por classes",
                "Refatoração guiada",
                "Exercício espelhado de aula anterior"
              ]
            }
          ],
          objetivo:
            "Reativar conhecimentos de CSS com foco em componentização e padrões reutilizáveis",
          artefatos: {
            nivel: "S",
            descricao: "Cards/layouts reaproveitáveis | Repositório “rev-css” no GitHub"
          },
          reforcoEspacado: {
            titulo: "🔄 Reforço Espaçado",
            proximo: "Quiz diagnóstico + exercício espelhado",
            distante: null
          }
        },
        {
          numero: 2,
          nivelBadge: "I",
          nivelBadgeClasses: "bg-green-100 text-green-700",
          corHeader: "blue-600",
          titulo: "Layout Responsivo e Padrões Reutilizáveis",
          faixaAulas: "A5–A8 · Aplicar",
          bloomSemana: "Aplicar",
          dias: [
            {
              tipo: "Teoria/Novo",
              label: "📖 Dia 1: Teoria/Novo",
              itens: [
                "Flexbox/Grid avançado",
                "Media queries e função clamp()",
                "CSS variables (custom properties)",
                "Acessibilidade básica (ARIA, semântica)"
              ]
            },
            {
              tipo: "Prática/Reforço",
              label: "💻 Dia 2: Prática/Reforço",
              itens: [
                "Montagem responsiva em 3 breakpoints",
                "Variações do mesmo componente",
                "Revisão em pares no GitHub"
              ]
            }
          ],
          objetivo: null,
          artefatos: {
            nivel: "I",
            descricao: "Mini kit de componentes (header, card, grid)"
          },
          reforcoEspacado: {
            titulo: "🔄 Reforço Espaçado",
            proximo: "Lista curta de repetição",
            distante: "Retomada na semana 4 com Tailwind"
          }
        }
      ]
    },

    // BLOCO 2 -----------------------------------------------------------
    {
      ordem: 2,
      label: "BLOCO 2",
      titulo: "Tailwind CSS Intensivo",
      semanasRange: "3-8",
      objetivoBloco: "Domínio completo do framework utility-first",
      bloomBloco: "Compreender → Aplicar → Analisar → Avaliar/Criar",
      estilo: {
        gradienteFrom: "green-100",
        gradienteTo: "green-50",
        borderColor: "green-400"
      },
      semanas: [
        {
          numero: 3,
          nivelBadge: "S",
          nivelBadgeClasses: "bg-blue-100 text-blue-700",
          corHeader: "green-600",
          titulo: "Entrar no Tailwind: O “Porquê”",
          faixaAulas: "A9–A12 · Compreender/Aplicar",
          bloomSemana: "Compreender / Aplicar",
          dias: [
            {
              tipo: "Teoria",
              label: "📖 Dia 1",
              itens: [
                "Filosofia utility-first",
                "Instalação (CDN e build)",
                "Configuração mínima (tailwind.config.js)"
              ]
            },
            {
              tipo: "Prática",
              label: "💻 Dia 2",
              itens: [
                "Construir layout simples com Tailwind",
                "Comparar CSS puro vs Tailwind"
              ]
            }
          ],
          artefatos: {
            nivel: "S",
            descricao: "Landing page básica feita com Tailwind"
          },
          reforcoEspacado: {
            titulo: "🔄 Mesma Coisa, 3 Jeitos",
            proximo: "CSS puro → Tailwind básico → Tailwind refatorado",
            distante: null
          }
        },
        {
          numero: 4,
          nivelBadge: "I",
          nivelBadgeClasses: "bg-green-100 text-green-700",
          corHeader: "green-600",
          titulo: "Escala Visual com Tailwind",
          faixaAulas: "A13–A16 · Aplicar/Analisar",
          bloomSemana: "Aplicar / Analisar",
          dias: [
            {
              tipo: "Teoria",
              label: "📖 Dia 1",
              itens: [
                "Tipografia (font, text, leading)",
                "Cores e paletas",
                "Spacing (padding, margin, gap)",
                "Containers e breakpoints"
              ]
            },
            {
              tipo: "Prática",
              label: "💻 Dia 2",
              itens: [
                "Desafio: redesign de UI existente",
                "Aplicar tokens/escala do Tailwind"
              ]
            }
          ],
          artefatos: {
            nivel: "I",
            descricao: "Estilo consistente (theme) aplicado ao projeto"
          },
          reforcoEspacado: {
            titulo: "🔄 Espaçada",
            proximo:
              "Retomar os componentes da semana 2 usando Tailwind (refatoração)",
            distante: null
          }
        },
        // semanas 5–7 em formato resumido
        {
          numero: 5,
          tipoResumo: true,
          titulo: "Componentização Real",
          descricaoCurta:
            "Estados, dark mode, variants | Mini design system",
          bloomSemana: null
        },
        {
          numero: 6,
          tipoResumo: true,
          titulo: "Velocidade & Legibilidade",
          descricaoCurta:
            "Layout avançado, composição | Sprint de 3 páginas",
          bloomSemana: null
        },
        {
          numero: 7,
          tipoResumo: true,
          titulo: "Problemas Reais",
          descricaoCurta:
            "Boas práticas, @apply, plugins | Code review formal",
          bloomSemana: null
        },
        {
          numero: 8,
          checkpoint: true,
          titulo: "CHECKPOINT 1",
          faixaAulas: "A29–A32 · Avaliar/Criar",
          dias: [
            {
              tipo: "Teoria",
              label: "📖 Dia 1: Revisão + Prova",
              itens: [
                "Revisão geral de conteúdo",
                "Simulado",
                "Prova Teórica 1"
              ]
            },
            {
              tipo: "Prática",
              label: "💻 Dia 2: Mini-Projeto",
              itens: ["Mini-projeto guiado com tema livre"]
            }
          ],
          artefatos: {
            nivel: "C",
            descricao: "Mini-projeto Tailwind completo + Prova Teórica 1"
          }
        }
      ]
    },

    // BLOCO 3 -----------------------------------------------------------
    {
      ordem: 3,
      label: "BLOCO 3",
      titulo: "DaisyUI - Abstração",
      semanasRange: "9-10",
      objetivoBloco:
        "Subir o nível de abstração sem perder controle sobre a camada de estilo",
      bloomBloco: "Compreender / Aplicar / Analisar",
      estilo: {
        gradienteFrom: "purple-100",
        gradienteTo: "purple-50",
        borderColor: "purple-300"
      },
      semanas: [
        {
          numeroRange: "9-10",
          numero: 9, // referência principal
          nivelBadge: "I/C",
          nivelBadgeClasses: "bg-purple-100 text-purple-700",
          corHeader: "purple-600",
          titulo: "DaisyUI + Integração",
          faixaAulas: "A33–A40 · Aplicar/Analisar/Criar",
          semanasInternas: [
            {
              semana: 9,
              titulo: "Introdução DaisyUI",
              dias: [
                {
                  tipo: "Teoria",
                  label: "Dia 1",
                  descricao:
                    "O que é DaisyUI, componentes prontos, theming",
                  link: "design-web/semana9-aula1.html"
                },
                {
                  tipo: "Prática",
                  label: "Dia 2",
                  descricao:
                    "Recriar UI do mini-projeto usando DaisyUI, comparando trade-offs",
                  link: "design-web/semana9-aula2.html"
                }
              ]
            },
            {
              semana: 10,
              titulo: "Customização DaisyUI",
              dias: [
                {
                  tipo: "Teoria",
                  label: "Dia 1",
                  descricao:
                    "Temas personalizados, override de componentes"
                },
                {
                  tipo: "Prática",
                  label: "Dia 2",
                  descricao:
                    "Sprint: dashboard/portal com 2–3 telas integradas"
                }
              ]
            }
          ],
          reforcoEspacado: {
            titulo: "🔄 Espaçada",
            proximo:
              "Reaproveitar mini-projeto da semana 8 usando DaisyUI, inspecionando classes geradas (“por trás do componente”)",
            distante: null
          }
        }
      ]
    },

    // BLOCO 4 -----------------------------------------------------------
    {
      ordem: 4,
      label: "BLOCO 4",
      titulo: "Alpine.js - Reatividade",
      semanasRange: "11-13",
      objetivoBloco:
        "Usar reatividade declarativa como ponte conceitual para React",
      bloomBloco: "Lembrar / Aplicar / Analisar / Criar",
      estilo: {
        gradienteFrom: "orange-100",
        gradienteTo: "orange-50",
        borderColor: "orange-400"
      },
      semanas: [
        {
          numeroRange: "11-13",
          numero: 11,
          nivelBadge: "S/I/C",
          nivelBadgeClasses: "bg-orange-100 text-orange-700",
          corHeader: "orange-500",
          titulo: "Alpine.js Completo",
          faixaAulas: "A41–A52 · Aplicar/Criar",
          semanasInternas: [
            {
              semana: 11,
              titulo: "Fundamentos Alpine.js",
              descricao:
                "x-data, x-bind, x-on, x-show, ciclo de vida; exercícios micro: toggle, tabs, modal, accordion"
            },
            {
              semana: 12,
              titulo: "Estado e Listas",
              descricao:
                "x-for, x-model, stores, computed; formulário dinâmico e lista filtrável"
            },
            {
              semana: 13,
              titulo: "Cenários Reais",
              descricao:
                "Integração com fetch/API, estados de loading e error; CRUD fake com localStorage (feature end-to-end)"
            }
          ]
        }
      ]
    },

    // BLOCO 5 -----------------------------------------------------------
    {
      ordem: 5,
      label: "BLOCO 5",
      titulo: "Projeto Interdisciplinar + Prova 2",
      semanasRange: "14-15",
      objetivoBloco:
        "Consolidar todo o ciclo (CSS + Tailwind + DaisyUI + Alpine + GitHub) em um projeto real com avaliação somativa",
      bloomBloco: "Analisar / Avaliar / Criar",
      estilo: {
        gradienteFrom: "red-500",
        gradienteTo: "red-600",
        borderColor: null
      },
      semanas: [
        {
          numeroRange: "14-15",
          numero: 14,
          titulo: "PROJETO INTERDISCIPLINAR + PROVA 2",
          faixaAulas: "A53–A60 · Analisar/Avaliar/Criar",
          semanasInternas: [
            {
              semana: 14,
              titulo: "Semana 14: Desenvolvimento",
              itens: [
                "Arquitetura de UI e rotas tipo SPA fake",
                "Kickoff do projeto conjunto com Geografia",
                "Protótipo navegável + backlog em issues",
                "Clínica de dúvidas + pairing obrigatório"
              ]
            },
            {
              semana: 15,
              titulo: "Semana 15: Entrega",
              itens: [
                "Apresentações com argumentação técnica",
                "Retrospectiva + Demo Day",
                "Prova Teórica 2",
                "Avaliação 360º (autoavaliação, pares e professor)"
              ]
            }
          ],
          artefatos: {
            nivel: "C",
            descricao:
              "Projeto interdisciplinar completo (CSS + Tailwind + DaisyUI + Alpine + GitHub) + Prova Teórica 2"
          },
          conexaoFuturo: {
            titulo: "🎯 Conexão com Futuro",
            descricao:
              "Retrospectiva explícita conectando Alpine.js ao React do próximo semestre"
          }
        }
      ]
    }
  ]
};
