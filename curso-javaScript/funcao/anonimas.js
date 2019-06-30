//função anonima é uma função sem nome
const soma = function(x, y){
    return x + y
}

const diminui = (x, y) => x - y

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(1, 2)
imprimirResultado(1, 2, diminui)
imprimirResultado(5, 1, function(x, y){
    return x - y
})
imprimirResultado(2, 1, (x, y) => x - y)

const pessoa = {
    falar: () => console.log('OPA! Falei!'),
    comentar: () => console.log('Estou comentando uma função arrow.'),
    somar: (x, y) => console.log(x + y),
    testar1(){
        console.log('Teste com parenteses sem :function') 
    },
    testar2: function(){
        console.log('Abemos ": function()"')
    }
}

pessoa.falar()
pessoa.comentar()
pessoa.somar(1, 2)
pessoa.testar1()
pessoa.testar2()