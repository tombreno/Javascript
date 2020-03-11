const nome = 'Silvana'
const sexo = 'F'
const idade = 48
const contribuicao = 23

const tempoContribuicao = idade + contribuicao

const aposentadoriaF = sexo == 'F' && contribuicao >= 30 && tempoContribuicao >= 85
const aposentadoriaM = sexo == 'M' && contribuicao >= 35 && tempoContribuicao >= 95

if (aposentadoriaF || aposentadoriaM){
    console.log (`Parabéns ${nome}, você pode se aposentar!`)
} else {
    console.log (`Lamento ${nome}, você ainda não pode se aposentar.`)
}