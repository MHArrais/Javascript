const velocidade = 100
const warn = 85

const condicao = velocidade >= warn
    ? console.log("Recebeu uma Multa!")
    : console.log("Continua Andando")

if(velocidade >= warn){
    console.log("Recebeu uma Multa!")
} else{
    console.log("Continua andando")
}
