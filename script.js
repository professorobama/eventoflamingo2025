/*
 * O Motor: Intersection Observer
 *
 * O "Borracheiro" explica: Em vez de ficar perguntando "já chegou?" 
 * toda hora (o que gasta processamento), nós contratamos um 'vigia' (o Observer)
 * para nos AVISAR *apenas* quando o elemento aparecer na tela.
*/

// 1. Selecionar todos os elementos que têm a classe '.hidden'
const hiddenElements = document.querySelectorAll('.hidden');

// 2. Criar o nosso 'vigia' (Observer)
// A função (callback) dentro dele vai rodar toda vez que a visibilidade de um elemento 'vigiado' mudar
const observer = new IntersectionObserver((entries) => {
    
    // 'entries' é uma lista de todos os elementos que o vigia está olhando
    entries.forEach((entry) => {
        
        // 3. Checar se o elemento 'entry' ESTÁ 'intersectando' (aparecendo na tela)
        if (entry.isIntersecting) {
            
            // 4. Se sim, adicione a classe 'show'
            // O CSS vai cuidar da animação de transição (de .hidden para .show)
            entry.target.classList.add('show');
            
            // 5. (Opcional, mas boa prática)
            // Depois que a animação rodou, não precisamos mais 'vigiar' esse elemento.
            // Isso economiza performance.
            observer.unobserve(entry.target);
            
        } 
        // Não precisamos de um 'else' aqui, porque não queremos que ele suma ao sair da tela.
    });
}, {
    threshold: 0.1 // O 'threshold' (limite) 0.1 significa: "Rode a função quando 10% do elemento estiver visível"
});

// 6. Dizer ao 'vigia' QUAIS elementos ele deve observar.
// Nós passamos nossa lista 'hiddenElements' para ele.
hiddenElements.forEach((element) => observer.observe(element));