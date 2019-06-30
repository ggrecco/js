class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}.`)
    }
}

const p1 = new Pessoa('Gustavo Grecco')
p1.falar()


//    classe  variaveis
const pessoa = nome => {
    return {
    // métodos
        falar: () => console.log(`Meu nome é ${nome}.`),
        resmungar: () => console.log(`Cade vc ${nome}?`)
    }
}

const p2 = pessoa('Gustavo')

p2.falar()
p2.resmungar()