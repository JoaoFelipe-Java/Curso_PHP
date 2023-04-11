
algoritmo "007"
// Fun??o :Fa?a um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade
// dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e m?s com 30 dias.
var
anos, meses, dias , totalDias : inteiro
inicio
// Se??o de Comandos
escreval("Digite os anos")
leia(anos)
escreval("Digite os meses")
leia(meses)
escreval("Digite os dias")
leia(dias)
totalDias := (anos * 365) + (meses * 30) + dias
escreval("Total de dias",totalDias)
fimalgoritmo