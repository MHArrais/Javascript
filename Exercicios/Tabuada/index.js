/*
    Precisamos mostrar a tabuada no console de 0 até 10 neste seguinte formato:

    multiplicador x número = resultado
    multiplicador x 0 = resultado
    multiplicador x 1 = resultado
    multiplicador x 2 = resultado
    multiplicador x 3 = resultado
    multiplicador x 4 = resultado

    Obs.: não podemos criar varios consoles.log(multiplicador x 3 = resultado)
*/

const multiplicado = 1;
let i = 0
let y = 0

for(let y = 0; y <=10; y++){
    for (let i = 0; i <= 10; i++) {
        console.log(`${y} x ${i} = ${(y * i)}`);
    }

}

    

