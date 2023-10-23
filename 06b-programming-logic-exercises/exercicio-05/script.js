// Loop externo para os números de 1 a 10
for (let i = 1; i <= 10; i++) {
    console.log(`Tabuada do ${i}:`);

    // Loop interno para os múltiplos de 1 a 10
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }

    console.log('\n'); // Adiciona uma linha em branco para separar as tabuadas
}