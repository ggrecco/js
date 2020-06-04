const testeArray = { teste: 'testando', fruta: 'abacaxi', 0: 'zero' }
console.log(testeArray.teste)
console.log(testeArray.fruta)
console.log(testeArray[0])


const aprovados = ['Gustavo', 'Grecco', 'Karim', 'Pinedo']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
})