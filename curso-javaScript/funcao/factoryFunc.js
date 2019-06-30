//função que cria um novo objeto a cada chamada
function criarPessoa(){
    return {
        nome: 'teste',
        sobrenome: 'Sobrenome'
    }
}

console.log(criarPessoa())

function criarProduto(nome, preco){
    return {
        nome,
        preco
    }
}

console.log(criarProduto('teste', '123'))
console.log(criarProduto('caneta', 12,25))
console.log(criarProduto('camera', 126.25))
