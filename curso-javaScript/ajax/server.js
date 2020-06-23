const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) // provê todos os arquivos staticos da pasta
app.use(bodyParser.urlencoded({ extended: true })) //lê os dados de um formulario e transforma em obj
app.use(bodyParser.json()) //le a requisição e traduz para JSON

app.get('/teste', (req, res) => res.send(new Date))
app.listen(8080, () => console.log('Executando...'))