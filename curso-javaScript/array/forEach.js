/* percorrer um array
obs: 1º parametro item
obs: 2º parametro indice
obs: 3º parametro o proprio array */

// forEach
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
})

console.log('----Arrow Function----')
aprovados.forEach((indice, nome) => console.log(`${indice + 1}. ${nome}`))
aprovados.forEach((nome, indice) => console.log(`${indice + 1}. ${nome}`))

let exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
exibirAprovados = (aprovado, indice) => console.log(`${indice + 1}. ${aprovado}`)
aprovados.forEach(exibirAprovados)
exibirAprovados = (aprovado, indice, arr) => console.log(`${indice + 1}. ${aprovado} do array [${arr}]`)
aprovados.forEach(exibirAprovados)

Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}
console.log('-----forEach2-----')
aprovados.forEach2(function(nome, indice, array){
    console.log(`${indice + 1}. ${nome}`)
    console.log(array)
})

