        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'sans': ['Inter', 'system-ui', 'sans-serif'],
                    },
                    colors: {
                        'ifrn': {
                            'green': {
                                50: '#f3faf5',
                                100: '#e3f5ea',
                                200: '#c9e9d5',
                                300: '#9ed7b5',
                                400: '#6cbc8c',
                                500: '#2f6b48',
                                600: '#368355',
                                700: '#2f6b48',
                                800: '#28533a',
                                900: '#224531',
                                950: '#0e2519',
                            },
                            'red': {
                                50: '#fef2f2',
                                100: '#fde3e3',
                                200: '#fdcbcb',
                                300: '#faa7a7',
                                400: '#f57474',
                                500: '#eb4848',
                                600: '#d62828',
                                700: '#b52020',
                                800: '#961e1e',
                                900: '#7c2020',
                                950: '#430c0c',
                            }
                        }
                    }
                }
            }
        }

  const disciplines = [
  {
    href: "autoria-web-disciplina.html",
    badgeText: "60h • 80a • Anual",
    badgeClasses: "px-3 py-1 bg-ifrn-green-100 text-ifrn-green-700 rounded-full text-xs font-bold",
    title: "Autoria Web",
    description: "Disciplina introdutória de desenvolvimento web. Do zero absoluto até um site completo publicado. HTML semântico, CSS moderno (Flexbox/Grid) e JavaScript com DOM.",
    tags: ["HTML", "CSS", "JavaScript", "Git"],
    audience: "Ensino Médio Integrado",
    ctaLabel: "Acessar disciplina"
  },
  {
    href: "design-web-disciplina.html",
    badgeText: "60h • 80a • 2º Semestre",
    badgeClasses: "px-3 py-1 bg-ifrn-green-100 text-ifrn-green-700 rounded-full text-xs font-bold",
    title: "Design Web",
    description: "Disciplina intermediária focada em Tailwind CSS, DaisyUI e Alpine.js. Para quem já domina HTML/CSS básico e quer acelerar desenvolvimento com frameworks modernos.",
    tags: ["Tailwind CSS", "DaisyUI", "Alpine.js", "GitHub"],
    audience: "Ensino Médio Integrado",
    ctaLabel: "Acessar disciplina"
  },
  {
    href: "principios-design-disciplina.html",
    badgeText: "60h • 80a • Anual",
    badgeClasses: "px-3 py-1 bg-ifrn-green-200 text-ifrn-green-700 rounded-full text-xs font-bold",
    title: "Princípios de Design",
    description: "Disciplina introdutória de fundamentos visuais, voltada para estudantes de ensino médio que muitas vezes nunca estudaram design formalmente.",
    tags: ["Figma", "Cores", "Tipografia", "Grid"],
    audience: "Todos os níveis",
    ctaLabel: "Acessar disciplina"
  },
  {
    href: "git-github-curso.html",
    badgeText: "12h • Complementar",
    badgeClasses: "px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-bold",
    title: "Git & GitHub via CLI",
    description: "Curso gamificado de versionamento profissional. Comandos Git via terminal, fluxo de trabalho com branches, Pull Requests e colaboração em equipe.",
    tags: ["Git CLI", "GitHub", "Workflows"],
    audience: "Todos os níveis",
    ctaLabel: "Acessar curso"
  }
];


  function renderDisciplines(data) {
    const container = document.getElementById("discipline-grid");
    if (!container) return;

    const cardsHTML = data.map(discipline => {
      const tagsHTML = discipline.tags
        .map(tag => `
          <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
            ${tag}
          </span>
        `)
        .join("");

      return `
        <a href="${discipline.href}"
           class="discipline-card bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 card block">
          <div class="flex items-start justify-between mb-6">
            <span class="${discipline.badgeClasses}">
              ${discipline.badgeText}
            </span>
          </div>

          <h3 class="font-bold text-2xl text-gray-900 mb-3">
            ${discipline.title}
          </h3>
          <p class="text-gray-600 mb-4 leading-relaxed">
            ${discipline.description}
          </p>

          <div class="flex flex-wrap gap-2 mb-6">
            ${tagsHTML}
          </div>

          <div class="flex items-center justify-between text-sm text-gray-600">
            <span>${discipline.audience}</span>
            <span class="text-ifrn-green-700 font-semibold underline hover:text-ifrn-green-600">
              ${discipline.ctaLabel}
            </span>
          </div>
        </a>
      `;
    }).join("");

    container.innerHTML = cardsHTML;
  }

  // Chamada de bootstrap
  document.addEventListener("DOMContentLoaded", () => {
  renderDisciplines(disciplines);
});