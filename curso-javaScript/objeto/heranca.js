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

