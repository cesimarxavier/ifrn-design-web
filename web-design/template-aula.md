<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aula X: Título do Tema | ADS IFRN</title>
    
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: { sans: ['Inter', 'sans-serif'] },
                    colors: {
                        brand: {
                            50: '#f0f9ff',
                            100: '#e0f2fe',
                            500: '#0ea5e9', /* Primary Blue */
                            600: '#0284c7',
                            700: '#0369a1',
                            800: '#075985',
                            900: '#0c4a6e',
                        },
                        accent: {
                            500: '#8b5cf6', /* Secondary Purple (Destaques) */
                            600: '#7c3aed',
                        }
                    }
                }
            }
        }
    </script>

    <style>
        body { font-family: 'Inter', sans-serif; color: #1e293b; background-color: #f8fafc; }
        
        /* Tag de Código Inline */
        .code-tag {
            font-family: 'Courier New', monospace;
            background-color: #f1f5f9; color: #0f172a; padding: 2px 6px;
            border-radius: 4px; border: 1px solid #cbd5e1; font-size: 0.9em; font-weight: 600;
        }

        /* Bloco de Código Escuro */
        .code-block {
            background: #0f172a; border-radius: 8px; padding: 1.5rem;
            overflow-x: auto; font-family: 'Courier New', monospace;
            color: #e2e8f0; border: 1px solid #334155; font-size: 0.9rem; line-height: 1.6;
        }
        .code-keyword { color: #f472b6; } /* pink */
        .code-prop { color: #60a5fa; } /* blue */
        .code-val { color: #a78bfa; } /* purple */
        .code-comment { color: #64748b; font-style: italic; }

        /* Checkbox Customizado */
        .checkbox-item { transition: all 0.2s ease; cursor: pointer; }
        .checkbox-item:hover { background-color: #f1f5f9; }
        .checkbox-item:has(input:checked) { background-color: #f0f9ff; border-color: #0ea5e9; }

        /* Padrão de Fundo para Previews */
        .grid-bg {
            background-image: radial-gradient(#cbd5e1 1px, transparent 1px);
            background-size: 10px 10px;
        }
    </style>
</head>

<body class="bg-white">

    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center gap-2">
                    <span class="font-bold text-xl text-slate-900 tracking-tight">Web<span class="text-brand-600">Design</span></span>
                    <span class="text-xs font-medium px-2 py-0.5 bg-slate-100 rounded text-slate-500">Módulo 2</span>
                </div>
                
                <div class="hidden md:flex space-x-8 text-sm font-medium">
                    <a href="#conteudo" class="text-slate-600 hover:text-brand-600 transition">Conteúdo</a>
                    <a href="#pratica" class="text-brand-700 font-bold hover:text-brand-900 transition">Laboratório Prático</a>
                    <a href="#checklist" class="text-slate-600 hover:text-brand-600 transition">Checklist</a>
                </div>
            </div>
        </div>
    </nav>

    <header class="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div class="max-w-5xl mx-auto">
            <div class="inline-block mb-6 px-4 py-2 bg-brand-100 text-brand-800 rounded-full font-semibold text-sm border border-brand-200">
                Semana X • [Categoria, ex: Layout Moderno]
            </div>

            <h1 class="font-bold text-5xl md:text-6xl text-slate-900 mb-6 leading-tight">
                [Título da Aula]<br>
                <span class="text-brand-700">[Subtítulo de Impacto]</span>
            </h1>

            <p class="text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl font-light">
                [Breve resumo do que será aprendido. Ex: Hoje vamos abandonar o float e entender como o Flexbox revoluciona a distribuição de espaço.]
            </p>

            <div class="flex flex-col sm:flex-row gap-4">
                <a href="#conteudo" class="btn-cta bg-brand-600 text-white font-bold py-4 px-8 rounded-full text-lg text-center hover:bg-brand-700 transition shadow-lg shadow-brand-500/20">
                    Iniciar Aula
                </a>
                <a href="#pratica" class="border-2 border-brand-600 text-brand-700 font-bold py-4 px-8 rounded-full text-lg text-center hover:bg-brand-50 transition">
                    Ir para Prática
                </a>
            </div>
        </div>
    </header>

    <section id="conteudo" class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-5xl mx-auto space-y-20">

            <article class="grid md:grid-cols-2 gap-12 items-center">
                <div class="space-y-4">
                    <div class="flex items-center gap-3">
                        <span class="bg-brand-100 text-brand-700 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl">1</span>
                        <h2 class="text-2xl font-bold text-slate-900">[Nome do Conceito]</h2>
                    </div>
                    <p class="text-slate-600 leading-relaxed">
                        [Explicação teórica concisa. Use <strong>negrito</strong> para termos chave.]
                    </p>
                    
                    <div class="bg-slate-50 p-4 rounded border-l-4 border-brand-500 text-sm text-slate-700">
                        <strong>Nota Técnica:</strong> [Dica importante ou aviso sobre o conceito.]
                    </div>
                </div>

                <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div class="preview-header text-xs font-bold text-slate-400 uppercase mb-2">Exemplo Visual</div>
                    
                    <div class="grid-bg h-40 border border-slate-100 rounded flex items-center justify-center">
                        <div class="bg-brand-500 text-white p-4 rounded shadow">
                            Elemento Exemplo
                        </div>
                    </div>

                    <div class="code-block mt-4 text-xs">
                        <span class="code-keyword">.classe</span> { <br>
                        &nbsp;&nbsp;<span class="code-prop">propriedade</span>: <span class="code-val">valor</span>; <br>
                        }
                    </div>
                </div>
            </article>

            <hr class="border-slate-100">

            <article class="grid md:grid-cols-2 gap-12 items-center">
                <div class="order-2 md:order-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div class="code-block">
                        <span class="code-comment">/* Exemplo de código */</span><br>
                        display: flex;
                    </div>
                </div>

                <div class="order-1 md:order-2 space-y-4">
                    <div class="flex items-center gap-3">
                        <span class="bg-brand-100 text-brand-700 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl">2</span>
                        <h2 class="text-2xl font-bold text-slate-900">[Segundo Conceito]</h2>
                    </div>
                    <p class="text-slate-600 leading-relaxed">
                        [Explicação do segundo conceito...]
                    </p>
                </div>
            </article>

        </div>
    </section>

    <section id="pratica" class="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div class="max-w-5xl mx-auto">
            <div class="flex items-center gap-4 mb-8 border-b border-slate-700 pb-4">
                <span class="text-3xl">🔬</span>
                <h2 class="font-bold text-3xl">Laboratório Prático</h2>
            </div>

            <p class="text-slate-300 mb-12 text-lg max-w-2xl">
                Vamos colocar a mão na massa. Crie um arquivo <code class="bg-slate-800 px-2 py-1 rounded text-brand-300">aula-X-pratica.html</code> e siga os passos abaixo para construir [Nome do Componente Final].
            </p>

            <div class="grid lg:grid-cols-2 gap-12 items-start">
                <div class="space-y-8">
                    
                    <div class="flex gap-4">
                        <div class="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">1</div>
                        <div>
                            <h3 class="font-bold text-xl mb-2 text-brand-400">[Passo 1: Estrutura]</h3>
                            <p class="text-slate-400 text-sm mb-3">
                                [Instrução do que fazer no HTML].
                            </p>
                            <div class="code-block text-xs bg-black border-slate-700">
                                &lt;div class="container"&gt;...&lt;/div&gt;
                            </div>
                        </div>
                    </div>

                    <div class="flex gap-4">
                        <div class="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">2</div>
                        <div>
                            <h3 class="font-bold text-xl mb-2 text-brand-400">[Passo 2: Estilização]</h3>
                            <p class="text-slate-400 text-sm mb-3">
                                [Instrução do que fazer no CSS].
                            </p>
                            <div class="code-block text-xs bg-black border-slate-700">
                                .container { display: flex; }
                            </div>
                        </div>
                    </div>

                </div>

                <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 sticky top-24">
                    <h3 class="text-slate-400 font-bold mb-6 text-sm uppercase tracking-widest text-center">Resultado Esperado</h3>
                    
                    <div class="bg-white rounded-lg overflow-hidden min-h-[200px] flex items-center justify-center text-slate-500">
                        [Aqui vai a simulação visual do componente final]
                    </div>
                    
                    <p class="text-slate-500 text-xs mt-4 text-center">
                        Seu resultado deve ficar visualmente semelhante a este.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section id="checklist" class="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div class="max-w-4xl mx-auto">
            <h2 class="font-bold text-2xl text-slate-900 mb-6 flex items-center gap-2">
                <span>✅</span> Checklist de Consolidação
            </h2>
            <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                
                <label class="checkbox-item flex items-start gap-4 p-4 rounded-lg border border-slate-100">
                    <input type="checkbox" class="mt-1 w-5 h-5 text-brand-600 rounded border-slate-300 focus:ring-brand-500">
                    <div>
                        <strong class="text-slate-800 text-sm block">[Conceito 1]</strong>
                        <span class="text-slate-500 text-xs">[Descrição da competência adquirida ex: Sei diferenciar X de Y.]</span>
                    </div>
                </label>

                <label class="checkbox-item flex items-start gap-4 p-4 rounded-lg border border-slate-100">
                    <input type="checkbox" class="mt-1 w-5 h-5 text-brand-600 rounded border-slate-300 focus:ring-brand-500">
                    <div>
                        <strong class="text-slate-800 text-sm block">[Conceito 2]</strong>
                        <span class="text-slate-500 text-xs">[Descrição da competência adquirida.]</span>
                    </div>
                </label>

            </div>
        </div>
    </section>

    <footer class="bg-white border-t border-slate-200 py-12">
        <div class="max-w-5xl mx-auto px-4">
            <div class="flex justify-between items-center">
                <a href="index.html" class="group flex items-center gap-2 text-slate-500 hover:text-brand-600 transition">
                    <span class="text-xl group-hover:-translate-x-1 transition">&larr;</span>
                    <div class="text-left">
                        <span class="block text-xs uppercase font-bold tracking-wider">Voltar</span>
                        <span class="text-sm">Menu da Disciplina</span>
                    </div>
                </a>

                <div class="text-center hidden md:block">
                    <p class="text-slate-400 text-xs">
                        Tecnologia em Análise e Desenvolvimento de Sistemas • IFRN<br>
                        Módulo Front-End: Web Design
                    </p>
                </div>

                <a href="#" class="group flex items-center gap-2 text-brand-600 hover:text-brand-800 transition">
                    <div class="text-right">
                        <span class="block text-xs uppercase font-bold tracking-wider text-slate-400">Próxima Aula</span>
                        <span class="text-sm font-bold">[Nome da Próxima Aula]</span>
                    </div>
                    <span class="text-xl group-hover:translate-x-1 transition">&rarr;</span>
                </a>
            </div>
        </div>
    </footer>

    <script>
        document.querySelectorAll('input[type="checkbox"]').forEach((checkbox, index) => {
            const pageId = document.title; // Usa o título como ID único da página
            const key = `${pageId}-chk-${index}`;
            
            // Carrega estado
            checkbox.checked = localStorage.getItem(key) === 'true';
            
            // Salva estado
            checkbox.addEventListener('change', e => {
                localStorage.setItem(key, e.target.checked);
            });
        });
    </script>

</body>
</html>