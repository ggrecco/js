const pessoa = {
    nome: 'Gustavo',
    idade: 34,
    endereco: {
        logradouro: 'Minha rua',
        numero: 1111
    }
}

//desructuring - forma mais simples de acessar um objeto

const { nome: n, idade: i } = pessoa
console.log(n, i)

// acessando um sub-atributo dentro do objeto(atributo aninhado)
const { endereco: { logradouro, numero, cep, cidade = "alguma" } } = pessoa
console.log(logradouro, numero, cep, cidade)