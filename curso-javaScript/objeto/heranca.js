const ferrari ={
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 250
}

// __proto__ busca o objeto pai
console.log('\n--------prototype----------')
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype) // extritamente igual a
console.log(volvo.__proto__ === Object.prototype)
console.log(ferrari.prototype)


// Cadeia de protótipos (prototype chain) avo => pai => filho
console.log('\n--------herança----------')
Object.prototype.attr0 = 'hahah' // nunca fazer isso apenas se for necessário 
const avo = { attr1 : 'A'}
const pai = { __proto__: avo, attr2: 'B', attr3: 'Z'}
const filho = { __proto__: pai, attr3: 'C'}
console.log(`atributo de avô: ${filho.attr1}`)
console.log(`atributo de avô: ${filho.attr1}, ${filho.attr3}`)
console.log(`atributo de avô: ${filho.attr0}`)//pois na cadeia de busca ele busca pai => avo => Object.prototype


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const volvo2 = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}


Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo2, carro)
Object.setPrototypeOf(volvo, carro)


console.log('-------------------')
console.log(ferrari)
console.log(volvo2)
console.log('--------Aplicando--------')
//está limitado em 200 pela const carro já que não há nada referente em volvo2
volvo2.acelerarMais(300) 
console.log(volvo2.status())
ferrari.acelerarMais(400)
console.log(ferrari.status()) // está limitado pela const ferrari
volvo.acelerarMais(260)
console.log(volvo.status())

console.log('-----Object.create------')
const pai2 = { nome: 'Pedro', corCabelo: 'Preto' }
const filho1 = Object.create(pai2)
filho1.nome = 'Rafael'
console.log(filho1)
console.log(filho1.corCabelo)

const filho2 = Object.create(pai2, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})

console.log(filho2.nome)
filho2.nome = 'Carla'
console.log(`${filho2.nome} tem um cabelo ${filho2.corCabelo}`)

for(let key in filho2) {
    filho2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por Herança: ${key}`)
}

function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__) // apontam para o mesmo objeto
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo teste'
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()
obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'TESTE'
obj3.falar()

// reverte o array do prototype
String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('Escola de teste'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3].first())
console.log(['a', 'A', 'b', 'B'].first())

//JAMAIS SOBRESCREVER METODOS QUE JÁ EXISTAM
// String.prototype.toString = function() {
//     return 'E AGORA F!@#'
// }
// console.log('Escola de teste'.reverse())

function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// simulando o new
function novo(f, ...params) { // ... simboliza que todos os parametros serão concatenados em um array
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)

// Object.preventExtensions
// Não permite expandir, mas permite excluir o que existe
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 19.9, tag: 'Promoção'
})
console.log('--------preventExtensions----------')
console.log('Extensível:', Object.isExtensible(produto))
produto.nome = 'Teste'
produto.descricao = 'Borracha'
delete produto.tag
console.log(produto)

// Object.seal
// não permite excluir ou adicionar, apenas modificar
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('--------Seal----------')
console.log('Selado:', Object.isSealed(pessoa))
pessoa.sobrenome = 'Silvia'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

