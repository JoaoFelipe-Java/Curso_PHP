Algoritmo "003"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Felipe
// Descrição   : Os pares de instruções abaixo produzem o mesmo resultado?
// A (4/2)+(2/4) e A 4/2+2/4
// B 4/(2+2)/4 e 4/2+2/4
// C (4+2)*2-4 e 4+2*2-4
// Autor(a)    : João
// Data atual  : 10/03/2023
Var
// Seção de Declarações das variáveis 
// A (4/2)+(2/4) e A 4/2+2/4
// B 4/(2+2)/4 e 4/2+2/4
// C (4+2)*2-4 e 4+2*2-4
   a, b, c: logico

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    a <- (4/2)+(2/4) = 4/2+2/4
    b <- 4/(2+2)/4 = 4/2+2/4
    c <- (4+2)*2-4 = 4+2*2-4
    escreval("Os pares de instruções abaixo produzem o mesmo resultado?")
    escreval("A (4/2)+(2/4) e A 4/2+2/4:",a)
    escreval("B 4/(2+2)/4 e 4/2+2/4:",b)
    escreval("C (4+2)*2-4 e 4+2*2-4:",c)
    

Fimalgoritmo