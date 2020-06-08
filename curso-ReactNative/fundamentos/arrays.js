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