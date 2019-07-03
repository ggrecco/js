const ferrari ={
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

// __proto__ busca o objeto pai

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype) // extritamente igual a
console.log(volvo.__proto__ === Object.prototype)

