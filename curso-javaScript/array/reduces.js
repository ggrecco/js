const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota)) // separa em um array todos os valores da chave nota
// será instanciado a soma de todas as notas em resultado
let resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(`Acumulado: ${acumulador} próxima adição: ${atual}`)
    // console.log(acumulador, atual)
    return acumulador + atual
})
console.log(`Resultado: ${resultado}`)

// passando um valor inicial
console.log('---passando valor inicial----')
resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(`Acumulado: ${acumulador} próxima adição: ${atual}`)
    return acumulador + atual
}, 10)
console.log(`Resultado: ${resultado}`)

console.log('---Arrow somando + 10 no inicial----')
resultado = alunos.map(a => a.nota).reduce((acumulado, atual) => acumulado + atual, 10)
console.log(resultado)

console.log('\n---DESAFIO---')

// Desafio 1: Todos os alunos são bolsista?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))