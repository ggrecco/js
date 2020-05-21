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


//desructuring - forma mais simples de acessar um Array
const [a] = [10]
console.log(a)

// ignora o segundo e 4 elementos seta dos no Array,
// ou seja, não insere os valores da direita nas variaveis da esquerda
const [n1, , n2, , n3, n4 = 0] = [10, 7, 9, 8]
console.log(n1, n2, n3, n4)

// testando com objeto
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand({ max: 50, min: 40 }))