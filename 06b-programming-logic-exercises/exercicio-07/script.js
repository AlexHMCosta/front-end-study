const target = window.prompt('Digite um número inteiro:', '10');

let numerosPares = [];
let numerosImares = [];

function adicionarNumero(numero) {
    if (numero % 2 === 0) {
        numerosPares.push(numero);
    } else {
        numerosImares.push(numero);
    }
}

for (let j = 1; j <= target; j++) {
    adicionarNumero(j);
}

console.log(`Numeros Pares ${numerosPares} n/`)
console.log(`Numeros Imares ${numerosImares} n/`)