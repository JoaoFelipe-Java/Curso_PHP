let valor1 = prompt("Digite o primeiro valor:");
let valor2 = prompt("Digite o segundo valor (não pode ser zero):");

while (valor2 == 0) {
  valor2 = prompt("Digite o segundo valor novamente (não pode ser zero):");
}

let resultado = valor1 / valor2;
alert("O resultado da divisão é: " + resultado)
console.log("O resultado da divisão é: " + resultado);
