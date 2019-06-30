/* 
Código que demonstra a execução de funções e variaveis
em JS
*/ 
const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    console.log(valor)
    minhaFuncao()
}

const minhaFuncao2 = () => console.log(valor)

const exec2 = () => {
    const valor = 'Local'
    console.log(valor)
    minhaFuncao2()
}

exec()
console.log('----------')
exec2()