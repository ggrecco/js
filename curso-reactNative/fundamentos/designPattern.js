//comum 
let teste = {}
console.log(typeof teste)

teste.nome = 'testando'
console.log(teste)

// dentro da função

function fabricarPessoa(nome, sobrenome = 'silva') {
    let pessoa = {}
    pessoa.nome = nome
    pessoa.sobrenome = sobrenome

    function nomeCompleto() {
        return `${pessoa.nome} ${pessoa.sobrenome}`
    }

    // função adicionanda como propriedade do objeto pessoa
    pessoa.nomeCompleto = nomeCompleto

    return pessoa
}

let pessoaA = fabricarPessoa('Gustavo')

console.log(pessoaA)
console.log(typeof pessoaA)
console.log(pessoaA.nomeCompleto())