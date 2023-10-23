let pessoa = {
    nome: ['Maria', 'Silva'],
    idade: 27,
    sexo: 'feminino', // Corrigi o valor aqui para 'feminino', já que 'sim' não parece fazer sentido.
    interesses: ['dança', 'seriados'],
    bio: function () {
        alert(this.nome[0] + ' ' + this.nome[1] + ' tem ' + this.idade + ' anos de idade. Ela gosta de ' + this.interesses[0] + ' e ' + this.interesses[1] + '.');
    },
    saudacao: function () {
        alert('Oi. Eu sou ' + this.nome[0] + '.');
    }
}

let poema = "No meio do caminho tinha uma pedra";
poema.split(" ");

let palavras = poema.split(" ");
palavras.length;

// Criando um array simples
var frutas = ['banana', 'laranja', 'morango'];
console.log(frutas);
// Acrescentando um item ao fim do array
frutas.push('melancia');
console.log(frutas);
// Encontrando o índice (posição) de um item
frutas.indexOf('morango');

let F = function() {
    this.a = 1;
    this.b = 2;
  }
  let o = new F();
  console.log(o);
  // Retorna: {a: 1, b: 2}
   
  // Para acrescentar uma propriedade a F:
  F.prototype.c = 3;
  console.log(o.c);
  // Retorna: 3

  class Usuario { 
    constructor(nome) { 
      this.nome = nome;
    }
    identificacao() {
      console.log('Olá, ' + this.nome);
    }
  }
  
  
  const maria = new Usuario('Maria');
  maria.identificacao();