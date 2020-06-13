// são funções que não recebem nome
const soma = function(x, y) {
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}
console.log("\nimprimirResultado()")
console.log(typeof imprimirResultado())
console.log("imprimirResultado")
console.log(typeof(imprimirResultado))
console.log("imprimirResultado(1,2)")
imprimirResultado(1, 2)
console.log("\nimprimirResultado(1,2,function...)")
imprimirResultado(1, 2, function(x, y) {
    return x - y
})
console.log("\nimprimirResultado(1,2,(x,y) => x*y)")
imprimirResultado(1, 2, (x, y) => x * y)

let pessoa = {
    falar: () => 'hello world',
    falar2: () => console.log('hello world 2')
}
console.log("\npessoa.falar()")
console.log(pessoa.falar())
console.log("\npessoa.falar2()")
pessoa.falar2()

pessoa = {
    falar() { console.log('opa') }
}
pessoa.falar()