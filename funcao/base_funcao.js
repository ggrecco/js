// função de forma literal
function fun1() { }

//função anonima
const fun2 = function () { }

const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// Função como parametro
function run(fun){
    fun()
}

run(function () { console.log('Executando ... ')})