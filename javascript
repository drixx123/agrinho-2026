// Elementos
const telaAbertura = document.getElementById('tela-abertura');
const telaJogo = document.getElementById('tela-jogo');
const btnJogar = document.getElementById('btn-jogar');
const campo = document.getElementById('campo');
const pontosEl = document.getElementById('pontos');

// Pontuação
let pontos = 0;

// Função para criar plantas
function criarPlantas() {
    campo.innerHTML = ''; // Limpa o campo antes de criar
    for (let i = 0; i < 15; i++) {
        const planta = document.createElement('div');
        planta.classList.add('planta');
        planta.textContent = '🌱';
        planta.addEventListener('click', () => {
            pontos++;
            pontosEl.textContent = pontos;
            planta.style.backgroundColor = '#4caf50';
        });
        campo.appendChild(planta);
    }
}

// Iniciar jogo
btnJogar.addEventListener('click', () => {
    telaAbertura.classList.add('escondido');
    telaJogo.classList.remove('escondido');
    criarPlantas();
});