Algoritmo "003"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Felipe
// Descri��o   : Os pares de instru��es abaixo produzem o mesmo resultado?
// A (4/2)+(2/4) e A 4/2+2/4
// B 4/(2+2)/4 e 4/2+2/4
// C (4+2)*2-4 e 4+2*2-4
// Autor(a)    : Jo�o
// Data atual  : 10/03/2023
Var
// Se��o de Declara��es das vari�veis 
// A (4/2)+(2/4) e A 4/2+2/4
// B 4/(2+2)/4 e 4/2+2/4
// C (4+2)*2-4 e 4+2*2-4
   a, b, c: logico

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
    a <- (4/2)+(2/4) = 4/2+2/4
    b <- 4/(2+2)/4 = 4/2+2/4
    c <- (4+2)*2-4 = 4+2*2-4
    escreval("Os pares de instru��es abaixo produzem o mesmo resultado?")
    escreval("A (4/2)+(2/4) e A 4/2+2/4:",a)
    escreval("B 4/(2+2)/4 e 4/2+2/4:",b)
    escreval("C (4+2)*2-4 e 4+2*2-4:",c)
    

Fimalgoritmo