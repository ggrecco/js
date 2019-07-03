const pessoa = {
    nome: "teste",
    idade: 2019,
    peso: 63
}
console.log('--------keys----------')
console.log(Object.keys(pessoa)) // exibe uma lista das chaves
console.log('\n--------values----------')
console.log(Object.values(pessoa)) // exibe lista dos valores 
console.log('\n--------entries----------')
console.log(Object.entries(pessoa)) // exibe em formato de lista separadas por conchetes

// acessando elementos de um array
// mesma variavel
console.log('\n--------e[0] e[1]----------')
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]} : ${e[1]}`)
});
// variavel para cada posição 
console.log('\n---------[chave, valor]---------')
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`)
});

//definindo uma propriedade
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //pode listar
    writable: false, //não pode escrever
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log('\n--------não trocou a data----------')
console.log(pessoa.dataNascimento)
console.log('\n--------lista de elementos no objeto pessoa----------')
console.log(Object.keys(pessoa))


// obect.assign
const dest = { a : 1 } //obj que receberá os atributos dos demais
const o1 = { b : 2 }
const o2 = { c : 3, a : 4}
// o primeiro elemento recebe os demais
const obj = Object.assign(dest, o1, o2)
console.log('\n--------assign----------')
console.log(obj)

// restringindo a escrita
Object.freeze(obj)
obj.c = '123123'
console.log('\n--------freeze----------')
console.log(obj)