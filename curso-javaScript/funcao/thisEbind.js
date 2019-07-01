// problema de usar o this
const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()


const falar = pessoa.falar
falar() //gera conflito entre os paradigams de OO e funcional

//resolvendo o erro undefined
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

function Pessoa() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa