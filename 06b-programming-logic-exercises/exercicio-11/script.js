let height = parseInt(window.prompt(`Digite a altura do triângulo:`, ' '));

const triangle = n => {
  let pattern = '';

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += 'X';
    }
    pattern += "\n";
  }

  return pattern;
}

console.log(triangle(height));
