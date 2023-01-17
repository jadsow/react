const display = document.querySelector('#resultado')
const botoes = document.querySelectorAll('[id*=tecla]')
const operadores = document.querySelectorAll('[id*=operador]')

let novoNumero = true
let operador;
let numeroAnterior;

const operacaoPendente = () => operador != undefined
const calcular = () => {
    if (operacaoPendente()){
        const numeroAtual = parseFloat(display.textContent.replace(',', '.'));
        novoNumero = true
        if (operador == '+') {
            atualizarDisplay(numeroAnterior + numeroAtual)
        } else if (operador == '-') {
            atualizarDisplay(numeroAnterior - numeroAtual)
        } else if (operador == '*') {
            atualizarDisplay(numeroAnterior * numeroAtual)
        } else 
            atualizarDisplay(numeroAnterior / numeroAtual)
        }
}

const atualizarDisplay = (texto) => {
    if (novoNumero) {
        display.textContent = texto
        novoNumero = false
    } else {
        display.textContent += texto
    }
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent)
botoes.forEach(num => 
    num.addEventListener("click", inserirNumero)
);


const inserirOperador = (evento) => {
    if (!novoNumero) {
    calcular()
    novoNumero = true
    operador = evento.target.textContent
    numeroAnterior = parseFloat(display.textContent)

    }
}
operadores.forEach(operador =>
    operador.addEventListener("click", inserirOperador)
);

const igual = () => {
    calcular();
    operador = undefined
}
document.getElementById('igual').addEventListener('click', igual)

const limparDisplay = () => {
    display.textContent = ''
}
document.getElementById('limparDisplay').addEventListener('click', limparDisplay)

const existeDecimal = () => display.textContent.indexOf(',') !== -1;
const existeValor = () => display.textContent.length > 0;
const inserirDecimal = () => {
    if (!existeDecimal()) {
        if (novoNumero) {
            atualizarDisplay('0,');
        } else {
            atualizarDisplay(',');
        }
    }
};
document.getElementById('decimal').addEventListener('click', inserirDecimal);

const mapaTeclado = {
    0: 'tecla0',
    1: 'tecla1',
    2: 'tecla2',
    3: 'tecla3',
    4: 'tecla4',
    5: 'tecla5',
    6: 'tecla6',
    7: 'tecla7',
    8: 'tecla8',
    9: 'tecla9',
    '/': 'operadorDividir',
    '*': 'operadorMultiplicar',
    '-': 'operadorSubtrair',
    '+': 'operadorAdicionar',
    '=': 'igual',
    Enter: 'igual',
    c: 'limparDisplay',
    ',': 'decimal',
};

const mapearTeclado = (evento) => {
    const tecla = evento.key;
    const teclaPermitida = () => Object.keys(mapaTeclado).indexOf(tecla) !== -1;
    if (teclaPermitida()) document.getElementById(mapaTeclado[tecla]).click();
};
document.addEventListener('keydown', mapearTeclado);