module.exports = (app, texto) => {
    function salvar(req, res) {
        res.send(`Acessou produto > salvar e recebeu o texto: ${texto}`)
    }

    function obter(req, res) {
        res.send(`Acessou produto > obter e recebeu o texto: ${texto}`)
    }

    app.post('/produto', salvar)
    app.get('/produto', obter)

    return { salvar, obter }
}