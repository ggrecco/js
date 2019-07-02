const a = 1
const b = 2
const obj1 = {a:a, b:b}
const obj2 = {a, b}
console.log(obj1, obj2)


const nomeAtt = 'Teste'
const valorAtt = 7.95
const obj3 = {['testador3'] : 9.87} //cria o objeto
obj3[nomeAtt] = valorAtt 
// obj3.nomeAtt = valorAtt // insere o atributo nomeAtt
console.log(obj3)


const obj4 = { 'testador4' : valorAtt, [nomeAtt] : valorAtt}
console.log(obj4)


const obj5 = {
    function1: function(n){
        return `Função 1 nomeAtt: ${n}` 
    },
    
    function2(x, y){
        return `Função 2 soma: ${x + y}`
    },

    function3: e =>  e,
    function4: () => 'Retorno sem parametro'
}

console.log(obj5)
console.log(obj5.function1(nomeAtt))
console.log(obj5.function2(a, obj2.b))
console.log(obj5.function3(obj3))
console.log(obj5.function4())