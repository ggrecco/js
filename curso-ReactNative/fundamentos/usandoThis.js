const pessoa = {
    saudacao: 'Olá Mundo',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()