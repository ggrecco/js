let dobro = function(a) {
    return 2 * a
}
console.log(dobro(1))

// utilizado quando a função faz diversas atividades
dobro = (a) => {
    return 2 * a
}
console.log(dobro(2))

// utilizada quando a função faz apenas uma atividade
dobro = a => 2 * a

console.log(dobro(3))

// função sem parametro
let ola = function() {
    return 'hello world'
}
console.log(ola())

ola = () => 'Hello World!'
console.log(ola())