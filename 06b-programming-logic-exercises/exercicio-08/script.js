const target1 = window.prompt('Digite 1º idade:', 'Digite aqui uma idade');
let t1 = parseInt(target1);
const target2 = window.prompt('Digite 2º idade:', 'Digite aqui uma idade');
let t2 = parseInt(target2);
const target3 = window.prompt('Digite 3º idade:', 'Digite aqui uma idade');
let t3 = parseInt(target3);
const target4 = window.prompt('Digite 4º idade:', 'Digite aqui uma idade');
let t4 = parseInt(target4);
const target5 = window.prompt('Digite 5º idade:', 'Digite aqui uma idade');
let t5 = parseInt(target5);

const sum = t1 + t2 + t3 + t4 + t5
const mean = sum/5

console.log(`A soma das 5 idades é ${sum} e a média das idades é de ${mean}`)