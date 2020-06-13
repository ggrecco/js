const testeArray = { teste: 'testando', fruta: 'abacaxi', 0: 'zero' }
console.log(testeArray.teste)
console.log(testeArray.fruta)
console.log(testeArray[0])


const aprovados = ['Gustavo', 'Grecco', 'Karim', 'Pinedo']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
})

// convertendo um array para JSON e buscando um valor específico
const carrinho = [
    '{"nome": "Borracha", "preco": "3.45" }',
    '{"nome": "Caderno", "preco": "13.90" }',
    '{"nome": "Kit de Lapis", "preco": "41.22" }',
    '{"nome": "Caneta", "preco": "7.50" }',
]

const newObjeto = json => JSON.parse(json)
const sohPreco = produto => produto.preco

const resultado = carrinho.map(newObjeto).map(sohPreco)
console.log(resultado)

// treinando filter

const produtos = [
    { name: 'Caneta', value: '2' },
    { name: 'Caderno', value: '8' },
    { name: 'Borracha', value: '15' },
    { name: 'SeiLah', value: '20' }

]

const nome = produto => produto.name
const valor = produto => produto.value >= 15

console.log(produtos.filter(nome).filter(valor))