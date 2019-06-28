// função de forma literal
function fun1() { }

//função anonima ou seja função que é instanciada em uma constante
const fun2 = function () { }

//Armazenada em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
obj.somar = function (n1, n2) {return n1 + n2}
console.log(obj.falar())
console.log(obj.somar(9, 1))

// Função como parametro
function run(fun){
    fun()
}

run(function () { console.log('Executando ... ')})

//Armazenada em um array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3))