let height = parseInt(window.prompt(`Digite a altura do quadro:`, ' '));
let width = parseInt(window.prompt(`Digite a largura do quadro:`, ' '));

let result = '';

for (let i = 0; i < height; i++) {
    let linha = 'X';
    for (let j = 1; j < width; j++) {
        linha += 'X';
    }
    result += linha + '\n';
}

console.log(result);
