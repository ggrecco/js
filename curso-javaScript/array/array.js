let aprovados = new Array('Bia', 'Carlos', 'Ana') // não recomendado para construção
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('teste')
console.log(aprovados[3])
console.log(aprovados[4])

console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1)
console.log(aprovados)
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Elemento1', 'Elemento2')
console.log(aprovados)
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log(aprovados)

const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o último elemento do array
console.log(pilotos)
pilotos.shift() // remove no inicio
console.log(pilotos)
pilotos.push('Latrel') // adiciona ao final
console.log(pilotos)
pilotos.unshift('Hamilton') // adiciona no inicio
console.log(pilotos)
//splice pode remover e adicionar
pilotos.splice(2, 0,'Bottas', 'Massa') //adiciona na posição 2(entre Alonso e Raikonen)
console.log(pilotos)
pilotos.splice(3, 1) // remove o elemento da posição 3
console.log(pilotos)
/* slice, pega o array a partir do indice indicado 
para criar um novo array */
let algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)
// pega o elemento de indice 1 mas não pega o elemento de indice 4
algunsPilotos = pilotos.slice(1,4)
console.log(algunsPilotos)
