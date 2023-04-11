// criando um vetor vazio
let numeros = [];

// lendo 20 números e adicionando ao vetor
for (let i = 0; i < 20; i++) {
  let numero = parseInt(prompt("Digite um número: "));
  numeros.push(numero);
}

// imprimindo os números na ordem inversa
console.log("Números lidos na ordem inversa:");
for (let i = 19; i >= 0; i--) {
  console.log(numeros[i]);
}
