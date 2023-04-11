/*
for (
    var hora1 = parseInt(prompt('Hora de Inicio do jogo:')),
    hora2 = parseInt(prompt('Hora de que acabou o jogo:'))
    ;
    hora1 > 12 || hora1 < 1 || hora2 > 12 || hora2 < 1;
    )
{
    if (hora1 > 12 || hora1 < 1) {hora1 = parseInt(prompt('Horario inicil é invalido digite novamente: '))}
    if (hora2 > 12 || hora2 < 1) {hora2 = parseInt(prompt('Horario de fim é invalido digite novamente: '))}
}

alert(`A duração do jogo foi de ${hora1+hora2} horas`)
*/


for (
    let hora1 = parseInt(prompt('Hora de Inicio do jogo:'));
    hora1 > 12 || hora1 < 1;
    hora1 = parseInt(prompt('Horario inicil é invalido digite novamente: '))
) for (
    let hora2 = parseInt(prompt('Hora de Inicio do jogo:'));
    hora2 > 12 || hora2 < 1;
    hora2 = parseInt(prompt('Horario inicil é invalido digite novamente: '))
) { 
    alert(`A duração do jogo foi de ${hora1+hora2} horas`)
}

