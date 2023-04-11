let custo_fabrica = parseFloat(prompt("Digite o custo de fábrica do carro: "));
const percentual_distribuidor = 0.28;
const impostos = 0.45;

let custo_final = custo_fabrica + (custo_fabrica * percentual_distribuidor) + (custo_fabrica * impostos);

alert("O  custo final do carro ao consumidor é: R$ " + custo_final.toFixed(3))
console.log("O custo final do carro ao consumidor é: R$ " + custo_final.toFixed(2));
