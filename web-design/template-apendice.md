<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- [EDITÁVEL] Título da Aba -->
    <title>Apêndice: [Nome do Tema] | ADS IFRN</title>
    
    <!-- Dependências -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Configuração de Tema -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: { sans: ['Inter', 'sans-serif'] },
                    colors: {
                        brand: {
                            50: '#f0f9ff', 100: '#e0f2fe', 500: '#0ea5e9', 600: '#0284c7', 700: '#0369a1', 900: '#0c4a6e',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        body { font-family: 'Inter', sans-serif; color: #1e293b; background-color: #f8fafc; }
        
        /* Tag de Código Pequena */
        .code-tag {
            font-family: 'Courier New', monospace;
            background-color: #f1f5f9; color: #0f172a;
            padding: 2px 6px; border-radius: 4px; border: 1px solid #e2e8f0;
            font-size: 0.9em; font-weight: 600;
        }

        /* Efeito Hover nos Cards */
        .info-card { transition: all 0.2s ease; }
        .info-card:hover {
            border-color: #0ea5e9;
            box-shadow: 0 4px 12px rgba(14, 165, 233, 0.1);
        }
    </style>
</head>

<body>

    <!-- 1. NAVBAR (Com botão Voltar) -->
    <nav class="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <span class="font-bold text-lg text-slate-900">Web Design</span>
                <span class="h-4 w-px bg-slate-300"></span>
                <!-- [EDITÁVEL] Nome do Curso -->
                <span class="text-sm text-slate-500 font-medium">Licenciatura em Informática</span>
            </div>
            <!-- Botão Voltar (Histórico do Navegador) -->
            <a href="#" onclick="window.history.back(); return false;" class="group flex items-center gap-2 text-sm text-slate-500 hover:text-brand-600 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover:-translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Voltar à página anterior
            </a>
        </div>
    </nav>

    <!-- 2. HEADER (Título e Descrição) -->
    <header class="bg-white border-b border-slate-200 py-16 px-4">
        <div class="max-w-4xl mx-auto text-center">
            <div class="inline-block mb-4 px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-xs font-bold border border-brand-100 uppercase tracking-wide">
                Apêndice Técnico
            </div>
            <!-- [EDITÁVEL] Título Principal -->
            <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                [Título do Documento]
            </h1>
            <!-- [EDITÁVEL] Resumo -->
            <p class="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                [Descrição breve sobre o que este apêndice cobre. Ex: Este guia serve como referência rápida para todas as propriedades de X disponíveis na especificação.]
            </p>
        </div>
    </header>

    <!-- 3. CONTEÚDO PRINCIPAL -->
    <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        <!-- MODELO DE SEÇÃO 1: GRID DE CARDS -->
        <!-- Use para listar itens visuais, unidades ou propriedades simples -->
        <section id="secao-1">
            <!-- Cabeçalho da Seção -->
            <div class="flex items-center gap-4 mb-8">
                <div class="h-10 w-10 rounded-lg bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-xl">A</div>
                <div>
                    <h2 class="text-2xl font-bold text-slate-900">[Categoria A]</h2>
                    <p class="text-slate-500 text-sm">[Descrição da categoria]</p>
                </div>
            </div>

            <!-- Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <!-- Card Item -->
                <div class="info-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div class="flex justify-between items-start mb-3">
                        <span class="code-tag text-lg text-brand-700">item-nome</span>
                        <span class="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">Tag</span>
                    </div>
                    <p class="text-slate-600 text-sm mb-4">
                        [Descrição técnica do item. O que ele faz?]
                    </p>
                    <div class="bg-brand-50 p-3 rounded text-xs text-brand-800 border border-brand-100">
                        <strong>Uso:</strong> [Exemplo de caso de uso prático.]
                    </div>
                </div>

                <!-- Card Item (Copie e cole para mais itens) -->
                <div class="info-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div class="flex justify-between items-start mb-3">
                        <span class="code-tag text-lg text-slate-700">outro-item</span>
                    </div>
                    <p class="text-slate-600 text-sm mb-4">
                        [Descrição técnica do item.]
                    </p>
                </div>

            </div>
        </section>

        <!-- MODELO DE SEÇÃO 2: TABELA TÉCNICA -->
        <!-- Use para listas longas, comparações ou dados densos -->
        <section id="secao-2">
            <div class="flex items-center gap-4 mb-8">
                <div class="h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xl">B</div>
                <div>
                    <h2 class="text-2xl font-bold text-slate-900">[Categoria B - Tabela]</h2>
                    <p class="text-slate-500 text-sm">[Descrição da tabela]</p>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded-xl border border-slate-200 shadow-sm">
                <table class="min-w-full divide-y divide-slate-200">
                    <thead class="bg-slate-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Propriedade</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Descrição</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Valor Padrão</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-slate-200">
                        <!-- Linha da Tabela -->
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap"><span class="code-tag text-indigo-700">prop-1</span></td>
                            <td class="px-6 py-4 text-sm text-slate-600">[O que ela faz]</td>
                            <td class="px-6 py-4 text-sm text-slate-500">auto</td>
                        </tr>
                        <!-- Linha da Tabela -->
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap"><span class="code-tag text-indigo-700">prop-2</span></td>
                            <td class="px-6 py-4 text-sm text-slate-600">[O que ela faz]</td>
                            <td class="px-6 py-4 text-sm text-slate-500">0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- MODELO DE SEÇÃO 3: AVISOS E NOTAS -->
        <!-- Use para alertas pedagógicos ou exceções -->
        <section id="avisos">
            <div class="bg-rose-50 border border-rose-100 rounded-xl p-6 mb-6">
                <div class="flex items-start gap-3">
                    <!-- Ícone de Alerta -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-rose-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                        <h4 class="text-rose-900 font-bold text-sm">Aviso Pedagógico / Importante</h4>
                        <p class="text-rose-800 text-sm mt-1">
                            [Escreva aqui avisos sobre depreciação, boas práticas ou armadilhas comuns para o aluno evitar.]
                        </p>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <!-- 4. CHEAT SHEET / RESUMO FINAL -->
    <div class="bg-slate-900 text-slate-300 py-12 px-4">
        <div class="max-w-5xl mx-auto text-center">
            <h3 class="text-white text-xl font-bold mb-6">Resumo para Sala de Aula (Cheat Sheet)</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                
                <!-- Item de Resumo -->
                <div class="p-4 bg-slate-800 rounded-lg">
                    <strong class="block text-white mb-1">[Conceito]</strong>
                    <span class="text-brand-400">[Valor Chave]</span>
                </div>

                <!-- Item de Resumo -->
                <div class="p-4 bg-slate-800 rounded-lg">
                    <strong class="block text-white mb-1">[Conceito]</strong>
                    <span class="text-slate-400">[Valor Chave]</span>
                </div>

                <div class="p-4 bg-slate-800 rounded-lg">
                    <strong class="block text-white mb-1">[Conceito]</strong>
                    <span class="text-brand-400">[Valor Chave]</span>
                </div>

                <div class="p-4 bg-slate-800 rounded-lg">
                    <strong class="block text-white mb-1">[Conceito]</strong>
                    <span class="text-slate-400">[Valor Chave]</span>
                </div>

            </div>
        </div>
    </div>

    <!-- 5. FOOTER -->
    <footer class="bg-white py-12 border-t border-slate-200">
        <div class="max-w-5xl mx-auto px-4 text-center">
            <p class="text-slate-400 text-sm">
                Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte<br>
                Licenciatura em Informática • Material Didático de Apoio
            </p>
        </div>
    </footer>

</body>
</html>