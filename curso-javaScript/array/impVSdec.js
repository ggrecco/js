const alunos = [
    { nome: "João", nota: 7.9},
    { nome: "Maria", nota: 9.2}
]

// Imperativo
let total01 = 0
for(let i = 0; i < alunos.length; i++){
    total01 += alunos[i].nota
}
console.log('---IMPERATIVO---')
console.log(total01 / alunos.length)

// Declarativa
const getNota = aluno => aluno.nota //copia o array das notas
const soma = (total, atual) => total + atual
const total02 = alunos.map(getNota).reduce(soma) // faz a fila do array para execuar a soma
console.log(total02)