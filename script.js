document.addEventListener('DOMContentLoaded', () => {
    // Array de curiosidades para o botão
    const curiosidades = [
        "Os algoritmos de recomendação do seu serviço de streaming favorito são uma forma de 'robótica de software' ou Automação Inteligente!",
        "A produção em massa de vacinas depende de robôs industriais para garantir a precisão e a esterilidade do processo.",
        "Seu GPS no celular usa princípios de robótica e sensores para determinar e plotar sua localização em tempo real.",
        "Muitos semáforos em cidades grandes são controlados por sistemas inteligentes (robóticos) que ajustam o tempo com base no fluxo de tráfego, otimizando o trânsito."
    ];

    const btn = document.getElementById('saiba-mais-btn');
    const textoCuriosidade = document.getElementById('curiosidade-texto');

    btn.addEventListener('click', () => {
        // Gera um índice aleatório
        const indiceAleatorio = Math.floor(Math.random() * curiosidades.length);
        
        // Define o texto e exibe
        textoCuriosidade.textContent = curiosidades[indiceAleatorio];
        textoCuriosidade.classList.remove('hidden');

        // Altera o texto do botão após o primeiro clique
        btn.textContent = "Ver Outra Curiosidade!";
    });

    // Animação de Scroll para os links de navegação
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});