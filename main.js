const prancha = document.getElementById('prancha');
const hexagono = document.getElementById('hexagono');

let posX = 0; 
let velocidade = 7; // Velocidade bem alta agora
let direcao = 1; 
let anguloRotacao = 0;

function animar() {
    // Movimentação lateral
    posX += velocidade * direcao;

    // Limites da prancha
    if (Math.abs(posX) > 310) {
        direcao *= -1;
    }

    // Rotação do hexágono sincronizada com a velocidade
    anguloRotacao += (velocidade * direcao) * 1.8;

    // Inclinação da prancha: onde o hexágono está, ela SOBE.
    // Invertemos o sinal da posição para o ângulo
    const anguloPrancha = posX * -0.07;

    // Aplicação visual
    // O translateX(-50%) compensa o ponto de ancoragem do CSS
    hexagono.style.transform = `translateX(calc(-50% + ${posX}px)) rotate(${anguloRotacao}deg)`;
    prancha.style.transform = `rotate(${anguloPrancha}deg)`;

    requestAnimationFrame(animar);
}

animar();