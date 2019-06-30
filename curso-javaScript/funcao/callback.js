const fabricantes = ["Mercedes", "Audi", "Ferrari"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

const imprimirArrow = (nome, indice) =>  console.log(`${indice + 1}. ${nome}`)

//forEach é uma função que todo array em JS possui
fabricantes.forEach(imprimir)
fabricantes.forEach(imprimirArrow)
fabricantes.forEach(elementoArray => console.log(elementoArray))