
function createWeekCard(week, bimestre) {
  const hasDetails = Array.isArray(week.details) && week.details.length > 0;
  const hasBloom = !!week.bloom;
  const hasBadge = !!week.badgeType;

  const cardBaseClasses = `bg-white rounded-xl p-5 border ${bimestre.weekCardBorderClass}`;

  // Cartão simples (B2 / B3: só semana + resumo)
  if (!hasDetails && !hasBloom && !hasBadge) {
    const titleText = "Semana " + week.number + (week.highlight ? " 🎯" : "");
    return `
      <div class="${cardBaseClasses}">
        <h5 class="font-bold text-ifrn-green-800 mb-2">${titleText}</h5>
        <p class="text-sm text-ifrn-green-700">${week.summary}</p>
      </div>
    `;
  }

  // Cartão completo (B1, B4 e qualquer outro que use badge/detalhes)
  const weekTitle = "Semana " + week.number + (week.highlight ? " 🎯" : "");
  const titleHtml = week.link  ? `<a href="${week.link}">${weekTitle}</a>` : weekTitle;

  return `
    <div class="${cardBaseClasses}">
      <div class="flex items-center justify-between mb-3">
        <h5 class="font-bold text-ifrn-green-800 hover:underline">
          <a href=""${week.link}" class="hover:underline">${titleHtml}</a>
        </h5> ${hasBadge ? `<span class="px-3 py-1 ${week.badgeClasses} rounded-full text-xs font-semibold">${week.badgeType}</span>`  : ""  }
      </div>
      <a href="${week.link}" class="text-sm font-semibold text-ifrn-green-700 mb-2 hover:underline">
        ${week.summary}
      </a>
      ${ hasDetails || hasBloom ? 
        `
        <div class="text-xs text-ifrn-green-600 space-y-1">
          ${ (week.details || []).map((text) => `<p>${text}</p>`).join("") }
          ${ hasBloom ? `<p><strong>Bloom:</strong> ${week.bloom}</p>` : "" }
        </div>
      `
          : ""
      }
    </div>
  `;
}

function createBimestreDetails(bimestre) {
  const weeksHtml = bimestre.weeks.map((w) => createWeekCard(w, bimestre)).join("");

  return `
    <details class="bg-white rounded-2xl shadow-lg border-2 border-gray-400 overflow-hidden">
      <summary class="accordion-button p-6 cursor-pointer flex items-center justify-between">
        <div class="flex items-center gap-4">
          <div class="w-16 h-16 ${bimestre.iconBgClass} rounded-xl flex items-center justify-center flex-shrink-0">
            <span class="text-2xl font-bold ${bimestre.iconTextClass}">
              ${bimestre.code}
            </span>
          </div>
          <div>
            <h3 class="font-bold text-2xl text-ifrn-green-800">
              ${bimestre.title}
            </h3>
            <p class="text-ifrn-green-600">
              ${bimestre.subtitle}
            </p>
          </div>
        </div>
        <svg class="chevron w-6 h-6 text-ifrn-green-700" fill="none" stroke="currentColor"
          viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>

      <div class="p-6 border-t ${bimestre.panelBorderTopClass} ${bimestre.panelBgClass}">
        <div class="mb-6 p-4 bg-white rounded-xl">
          <h4 class="font-bold text-lg text-ifrn-green-800 mb-2">🎯 Objetivo do Bimestre</h4>
          <p class="text-ifrn-green-700">
            ${bimestre.objetivo}
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div class="p-4 bg-white rounded-xl">
            <p class="font-bold text-ifrn-green-800 mb-2">✅ O que entra</p>
            <p class="text-sm text-ifrn-green-700">
              ${bimestre.oQueEntra}
            </p>
          </div>
          <div class="p-4 bg-white rounded-xl">
            <p class="font-bold text-ifrn-green-800 mb-2">
              ${bimestre.entregaLabel}
            </p>
            <p class="text-sm text-ifrn-green-700">
              ${bimestre.entregaDescricao}
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          ${weeksHtml}
        </div>
      </div>
    </details>
  `;
}

function renderBimestresAccordion(containerId = "bimestres-accordion") {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Enquanto houver bimestres no array, ele vai listar
  const html = BIMESTRES_DATA.map(createBimestreDetails).join("");
  container.innerHTML = html;
}

// Auto-render ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  renderBimestresAccordion();
});
