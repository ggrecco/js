const bodyParser = require('body-parser')
const express = require('express')
const app = express()


app.use(express.static('.')) // provê todos os arquivos staticos da pasta
app.use(bodyParser.urlencoded({ extended: true })) //lê os dados de um formulario e transforma em obj
app.use(bodyParser.json()) //le a requisição e traduz para JSON

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './upload')
    },
    filename: function(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.send('Ocorreu um erro')
        }
        res.send('Conlcuído com sucesso.')
    })
})

app.get('/teste', (req, res) => res.send(new Date))
app.listen(8080, () => console.log('Executando...'))