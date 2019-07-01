// coleção dinâmica de pares chave/valor para criar um objeto
const produto = new Object //cria um objeto
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto['marca do produto']
console.log(produto)

// cria um objeto com multiplos atributos
const carro = {
    modelo: 'Teste',
    valor: 89000,
    proprietario: {
        nome: 'Dono',
        idade: 100,
        endereco: {
            logradouro: 'Casa do Dono',
            numero: 123123
        }
    }, 
    condutores: [{
        nome: 'array1',
        idade: 01
    },{
        nome: 'array2',
        idade: 02
    }],
    calcularValorDoSeguro: function(){
        // exemplo de função dentro do objeto
    }
}

carro.proprietario.endereco.numero = 987
console.log(carro)

// delete carro.condutores
console.log(carro)
console.log(carro.proprietario.length)
console.log(carro.condutores.length) //tamanho do array