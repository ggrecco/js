// são funções que não recebem nome
const soma = function(x, y) {
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(1, 2)
imprimirResultado(1, 2, function(x, y) {
    return x - y
})
imprimirResultado(1, 2, (x, y) => x * y)

let pessoa = {
    falar: () => 'hello world',
    falar2: () => console.log('hello world 2')
}
console.log(pessoa.falar())
pessoa.falar2()

pessoa = {
    falar() { console.log('opa') }
}
pessoa.falar()