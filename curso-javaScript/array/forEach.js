/* percorrer um array
obs: 1º parametro item
obs: 2º parametro indice
obs: 3º parametro o proprio array */

// forEach
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
})

console.log('----Arrow Function----')
aprovados.forEach((indice, nome) => console.log(`${indice + 1}. ${nome}`))
aprovados.forEach((nome, indice) => console.log(`${indice + 1}. ${nome}`))

let exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
exibirAprovados = (aprovado, indice) => console.log(`${indice + 1}. ${aprovado}`)
aprovados.forEach(exibirAprovados)
exibirAprovados = (aprovado, indice, arr) => console.log(`${indice + 1}. ${aprovado} do array [${arr}]`)
aprovados.forEach(exibirAprovados)

Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}
console.log('-----forEach2-----')
aprovados.forEach2(function(nome, indice, array){
    console.log(`${indice + 1}. ${nome}`)
    console.log(array)
})

// map
// transforma uma array em outro
console.log('===MAP===')
const num = [1, 2, 3, 4, 5, 6]

let resultado = num.map(e => {
    return e * 2
})
console.log('-----Dobro-----')
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` // immprime no formato R$ XX,XX

resultado = num.map(soma10).map(triplo).map(paraDinheiro)
console.log('-----varios maps-----')
console.log(resultado)

// desafio

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}']

// Retorna o aray apenas com os preços

const paraObjeto = json =>  JSON.parse(json)
const apenasPreco = produto => produto.preco 

resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
