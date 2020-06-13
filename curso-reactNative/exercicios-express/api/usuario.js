function salvar(req, res) {
    res.send("Acessou salvar")
}

function obter(req, res) {
    res.send("Acessou obter")
}

// expecificando uma chave de mesmo nome e uma diferente para acessar a função
module.exports = { salvar, obt: obter }