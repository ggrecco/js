const fabricantes = ["Mercedes", "Audi", "Ferrari"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

const imprimirArrow = (nome, indice) =>  console.log(`${indice + 1}. ${nome}`)

//forEach é uma função que todo array em JS possui
fabricantes.forEach(imprimir)
fabricantes.forEach(imprimirArrow)
fabricantes.forEach(elementoArray => console.log(elementoArray))

const notas = [7.7, 6.5, 5.4, 8.9, 3.6, 7.1, 9.0]
//sem callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

notasBaixas = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas)

notasBaixas = notas.filter(nota => nota < 7)
console.log(notasBaixas)

const notaMenor = valor => valor < 7

notasBaixas = notas.filter(notaMenor)
console.log('notaMenor: ' + notasBaixas)


//exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function(e){
    console.log('O evento ocorreu!')
}


document.getElementsByTagName('body')[0].onclick = evento => console.log('Evento')