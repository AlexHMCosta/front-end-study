let idades = [];
const target = 18;
let maior = [];
let menor = [];

for (let j = 1; j <= 10; j++) {
    let idade = parseInt(window.prompt(`Digite ${j}º idade:`, 'Digite aqui uma idade'));
    idades.push(idade);
}

for (let j = 0; j < idades.length; j++) {
    adicionarNumero(idades[j]);
}

function adicionarNumero(idade) {
    if (idade >= target) {
        maior.push(idade);
    } else {
        menor.push(idade);
    }
}

console.log(`Idades maiores ou iguais a ${target}: ${maior.length}`);
console.log(`Idades menores que ${target}: ${menor.length}`);
