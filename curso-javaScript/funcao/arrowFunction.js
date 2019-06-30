//declaração normal de função
let dobro = function(a){
    return 2 * a
}

//reescrevendo a função com a arrow
dobro = (a) => {
    return 2 * a
}
//reescrevendo a função arrow
dobro = a => 2 * a

console.log(dobro(Math.PI))

let ola = function(){
    return 'Ola MUndo'
}
//variavel declara com let é sobrescrita
ola = () => 'Hello word!'
console.log(ola())
/*--------------------*/
//importada de thisEbind.js
function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa