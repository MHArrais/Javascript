/*
    Como calcular IMC?
    O IMC é calculado dividindo o peso (em kg) pela
    altura ao quadrado (em m), de acordo com a seguinte 
    fórmula: IMC = peso / (altura x altura).
    
    Nosso calculo devemos retornar os seguintes valores:

    Resultado do Calc:  |  Resultado para o usuario
    Abaixo de 17        | Muito abaixo do peso
    Entre 17 e 18.49    | Abaixo do peso
    Entre 18.5 e 24.99  | Peso normal
    Entre 25 e 29.9     | Acima do peso
    Entre 30 e 34.9     | Obesidade I
    Entre 35 e 39.9     | Obesidade II


*/
const peso = 89;
const altura = 1.82

const imc = Number((peso / (altura * altura)). toFixed(2))

console.log(imc);

switch (true) {
    case imc < 17:
        console.log("Muito abaixo do peso")
        break;
    case imc >= 17 && imc <= 18.49:
        console.log("Abaixo do peso")
        break;
    case imc >= 18.5 && imc <= 24.99:
        console.log("Peso ideal")
        break;
    case imc >= 25 && imc <= 29.9:
        console.log("Acima do peso")
        break;
    case imc >= 30 && imc <= 34.99:
        console.log("Obesidade I")
        break;
    case imc >= 35 && imc <= 39.9:
        console.log("Obesidade II")
        break;

    default:
        break;
}