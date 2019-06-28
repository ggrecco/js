// função de forma literal
function fun1() { }

//função anonima ou seja função que é instanciada em uma constante
const fun2 = function () { }

const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// Função como parametro
function run(fun){
    fun()
}

run(function () { console.log('Executando ... ')})

//Armazenada em um array
const array = [function (a, b) { return a + b}, fun1, fun2]