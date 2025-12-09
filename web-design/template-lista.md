<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista XX — [Nome do Tema] | Licenciatura IFRN</title>
    
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: { sans: ['Inter', 'sans-serif'] },
                    colors: {
                        brand: {
                            50: '#f0f9ff', 100: '#e0f2fe', 500: '#0ea5e9', 600: '#0284c7', 700: '#0369a1', 800: '#075985', 900: '#0c4a6e',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; color: #1e293b; background-color: #f8fafc; }

        /* Estilos Utilitários */
        .btn-cta {
            background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
            transition: all 0.3s ease;
        }
        .btn-cta:hover {
            box-shadow: 0 8px 24px rgba(14, 165, 233, 0.35);
            transform: translateY(-2px);
        }

        .btn-secondary {
            border: 2px solid #0369a1; color: #0369a1; transition: all 0.3s ease;
        }
        .btn-secondary:hover {
            background: #0369a1; color: white; transform: translateY(-2px);
        }

        .code-inline {
            background: #f1f5f9; padding: 2px 6px; border-radius: 4px;
            font-family: 'Courier New', monospace; color: #0f172a; border: 1px solid #cbd5e1; font-size: 0.9rem;
        }

        /* Fundo de Grid para Previews */
        .bg-grid-pattern {
            background-image: radial-gradient(#cbd5e1 1px, transparent 1px);
            background-size: 10px 10px;
        }
    </style>
</head>

<body class="bg-slate-50">

    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center gap-2">
                    <span class="font-bold text-xl text-slate-900 tracking-tight">Web<span class="text-brand-600">Design</span></span>
                    <span class="text-xs font-medium px-2 py-0.5 bg-slate-100 rounded text-slate-500">Módulo X</span>
                </div>
                <div class="text-sm font-medium text-slate-500">
                    Lista de Exercícios XX
                </div>
            </div>
        </div>
    </nav>

    <section class="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-50 to-white border-b border-slate-200">
        <div class="max-w-5xl mx-auto">
            <div class="inline-block mb-6 px-4 py-2 bg-brand-100 text-brand-800 rounded-full font-semibold text-sm border border-brand-200">
                Prazo de Entrega: 7 Dias
            </div>

            <h1 class="font-bold text-4xl md:text-5xl text-slate-900 mb-6 leading-tight">
                Lista XX: [Nome do Tema]
            </h1>

            <p class="text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl font-light">
                [Descrição breve do objetivo da lista. Ex: Esta lista foca na prática de X, Y e Z para consolidar os conceitos da aula anterior.]
            </p>

            <div class="flex flex-col sm:flex-row gap-4">
                <a href="#exercicios" class="btn-cta text-white font-bold py-4 px-8 rounded-full text-lg text-center shadow-lg shadow-brand-500/20">
                    Começar Agora
                </a>
                <a href="#" class="btn-secondary font-bold py-4 px-8 rounded-full text-lg text-center">
                    Baixar Assets (Imagens)
                </a>
            </div>
        </div>
    </section>

    <section id="exercicios" class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-5xl mx-auto space-y-12">

            <article class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg shadow-slate-200/50">
                <div class="bg-slate-50 px-8 py-4 border-b border-slate-200 flex justify-between items-center">
                    <h3 class="font-bold text-lg text-slate-800">01. [Título do Exercício Básico]</h3>
                    <span class="bg-brand-100 text-brand-700 text-xs font-bold px-2 py-1 rounded border border-brand-200">BÁSICO</span>
                </div>
                <div class="p-8 grid md:grid-cols-2 gap-10">
                    <div class="space-y-4">
                        <p class="text-slate-600 text-sm">
                            <strong>Contexto:</strong> [Por que estamos fazendo isso?]
                        </p>
                        <div class="bg-brand-50 p-4 rounded border border-brand-100 text-sm text-brand-900">
                            <strong>Tarefa:</strong> [Instrução direta do que fazer.]
                        </div>
                        <ul class="text-xs text-slate-500 list-disc list-inside space-y-1">
                            <li>[Passo 1]</li>
                            <li>[Passo 2]</li>
                            <li>[Passo 3]</li>
                        </ul>
                    </div>
                    
                    <div>
                        <span class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Meta Visual</span>
                        <div class="bg-grid-pattern p-6 rounded-lg border border-slate-200 flex justify-center items-center h-48">
                            <div class="bg-white p-4 shadow border border-slate-100 text-center">
                                <span class="text-xs text-slate-400">Preview do Resultado</span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <article class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg shadow-slate-200/50">
                <div class="bg-slate-50 px-8 py-4 border-b border-slate-200 flex justify-between items-center">
                    <h3 class="font-bold text-lg text-slate-800">02. [Título do Exercício Médio]</h3>
                    <span class="bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-1 rounded border border-yellow-200">INTERMEDIÁRIO</span>
                </div>
                <div class="p-8 grid md:grid-cols-2 gap-10">
                    <div class="space-y-4">
                        <p class="text-slate-600 text-sm">
                            <strong>Contexto:</strong> [Contexto um pouco mais complexo.]
                        </p>
                        <div class="bg-yellow-50 p-4 rounded border border-yellow-100 text-sm text-yellow-900">
                            <strong>Tarefa:</strong> [Instrução direta.]
                        </div>
                        <ul class="text-xs text-slate-500 list-disc list-inside space-y-1">
                            <li>[Passo detalhado]</li>
                            <li>[Uso de propriedade específica]</li>
                        </ul>
                    </div>
                    
                    <div>
                        <span class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Meta Visual</span>
                        <div class="bg-grid-pattern p-6 rounded-lg border border-slate-200 flex justify-center items-center h-48">
                            <div class="w-full h-24 bg-yellow-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </article>

            <article class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg shadow-slate-200/50 border-l-4 border-l-rose-500">
                <div class="bg-slate-50 px-8 py-4 border-b border-slate-200 flex justify-between items-center">
                    <h3 class="font-bold text-lg text-slate-800">03. [Título do Desafio]</h3>
                    <span class="bg-rose-100 text-rose-700 text-xs font-bold px-2 py-1 rounded border border-rose-200">AVANÇADO</span>
                </div>
                <div class="p-8 grid md:grid-cols-2 gap-10">
                    <div class="space-y-4">
                        <p class="text-slate-600 text-sm">
                            <strong>Contexto:</strong> [Situação problema real de mercado.]
                        </p>
                        <div class="bg-rose-50 p-4 rounded border border-rose-100 text-sm text-rose-900">
                            <strong>Desafio:</strong> [Tarefa complexa que une vários conceitos.]
                        </div>
                        <ul class="text-xs text-slate-500 list-disc list-inside space-y-1">
                            <li>[Requisito 1]</li>
                            <li>[Requisito 2]</li>
                            <li>[Restrição técnica]</li>
                        </ul>
                    </div>
                    
                    <div>
                        <span class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Meta Visual</span>
                        <div class="bg-grid-pattern p-6 rounded-lg border border-slate-200 flex justify-center items-center h-48">
                            <div class="relative w-32 h-32 bg-white shadow-xl border border-slate-100 rounded-lg">
                                <div class="absolute top-0 right-0 -mt-2 -mr-2 bg-rose-500 text-white text-[10px] px-2 py-1 rounded-full">Badge</div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

        </div>
    </section>

    <footer class="bg-white border-t border-slate-200 py-12 text-center text-sm text-slate-500">
        <p>Desenvolvido para o curso Superior de Tecnologia em ADS • IFRN</p>
    </footer>

</body>
</html>