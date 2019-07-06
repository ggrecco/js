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

// Retorna do array apenas os preços

const paraObjeto = json =>  JSON.parse(json)
const apenasPreco = produto => produto.preco 

resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
