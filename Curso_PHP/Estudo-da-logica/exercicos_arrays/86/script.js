
let numeros = [];

// lendo 10 números e adicionando ao vetor
for (let i = 0; i < 10; i++) {
  let numero = parseInt(prompt("Digite um número: "));
  numeros.push(numero);
}

// ordenando o vetor em ordem crescente
numeros.sort(function(a, b){return a - b});

// imprimindo o vetor ordenado
console.log("Vetor ordenado:");
console.log(numeros);
