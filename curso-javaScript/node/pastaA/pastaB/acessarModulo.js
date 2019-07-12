const moduloA = require('../../moduloA')
console.log(moduloA.ola)
console.log(moduloA.ola2)

/* 
 * Criar a pasta saudacao faz com que naop seja necessario
 * usar o caminho relativo ou absoluto no comando require
 * já que ele busca o index.js na pasta indicada 
 * codigo da pasta saudacao
 * module.exports = {
    ola: 'Hello World em saudacao!!!'
}
*/

const saudacao = require('saudacao')
console.log(saudacao.ola)

const http = require('http')
http.createServer((req, res) => {
    res.write("<h1>HELLO WORLD!!!</h1>")
    res.end()
}).listen(5000)
