const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')

require('./api/produto')(app, 'com param!')


app.post('/usuario', usuarioApi.salvar)

// expecificando uma chave diferente para acessar a função
app.get('/usuario', usuarioApi.obt)


app.use(bodyParser.text())
app.use(bodyParser.json())

// usando função importada de saudacaiMid.js
app.use(saudacao("Gustavo"))

//requisição e resposta
// direciona todas as requisições para essa função
// por não tem uma URL setada
app.use((req, res, next) => {
    console.log('foi chamada.')
    next()
})


app.get('/cliente/relatorio', (req, res) => {
    res.send(`Cliente relatorio: completo = ${req.query.completo} ano = ${req.query.ano}`)
})


app.post('/corpo', (req, res) => {
    res.send(req.body)
        // acessando o elemento idade 
    console.log(req.body.idade)
        // visualizanod todos os elementos json enviados
    console.log(JSON.stringify(req.body))
})


app.get('/cliente/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado`)
})


app.use('/ola', (req, res) => {
    res.send("Hello <b>World!</b>")
})


app.get('/opa', (req, res, next) => {
    res.send("OP!")
    next()
})


app.get('/opa', (req, res) => {
    console.log("Foi chamado, entao tem o next")
})


app.get('/testJ', (req, res) => {
    res.json({
        nome: "Gustavo",
        idade: 120,
        endereco: 'casa'
    })
})


app.get('/testJA', (req, res) => {
    res.json([
        { id: 1, name: "Gustavo", position: 1 },
        { id: 2, name: "Karim", position: 2 },
        { id: 3, name: "Vader", position: 3 },
        { id: 4, name: "Darth", position: 4 },

    ])
})


app.listen(8080, () => {
    console.log('Backend executando2...')
})