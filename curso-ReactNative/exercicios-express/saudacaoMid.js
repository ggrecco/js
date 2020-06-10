function saudacao(nome) {
    return (req, res, next) => {
        console.log(`Bem vindo ${nome}`)
        next()
    }
}

module.exports = saudacao