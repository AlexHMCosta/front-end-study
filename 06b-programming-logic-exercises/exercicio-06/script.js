const target = window.prompt('Digite um número inteiro:', '10');

// Loop interno para os múltiplos de 1 a 10
for (let j = 1; j <= 10; j++) {
    console.log(`${target} x ${j} = ${target * j}`);
}
