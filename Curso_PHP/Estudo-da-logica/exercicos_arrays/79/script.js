// Array para armazenar as notas dos alunos
var notas = [];

// Loop para ler as notas dos 20 alunos
for (var i = 1; i <= 20; i++) {
  var nota = parseFloat(prompt("Digite a nota do aluno " + i));
  notas.push(nota);
}

// Cálculo da média da turma
var soma = 0;
for (var i = 0; i < notas.length; i++) {
  soma += notas[i];
}
var media = soma / notas.length;

// Contagem de alunos com nota acima da média
var acimaMedia = 0;
for (var i = 0; i < notas.length; i++) {
  if (notas[i] > media) {
    acimaMedia++;
  }
}

// Impressão da média da turma e resultado da contagem
console.log("Média da turma: " + media.toFixed(2));
console.log("Alunos com nota acima da média: " + acimaMedia);
