const obj1 = {} //criação mais comum

const obj2 = new Object // menos comum

// função construtora
function Produto(nome, preco, desc) {
    this.nome = nome //significa que nome é público
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const prod1 = new Produto('Caneta', 7.99, 0.15)
const prod2 = new Produto('Caderno', 14.90, 0.10)
console.log("R$ " + prod1.getPrecoComDesconto(),"\nR$ " + prod2.getPrecoComDesconto())

// função factory 
function criarFuncionario(nome, salarioBase, faltas = 0){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas) 
        }
    }
}

const funcionario1 = criarFuncionario('João', 7480, 3)
const funcionario2 = criarFuncionario('Maria', 11400)

console.log(`${funcionario1.nome} R$` + funcionario1.getSalario(), `\n${funcionario2.nome} R$`  + funcionario2.getSalario())


// object.create

const filho = Object.create(null)
filho.nome = 'Rafael'
console.log(filho)

// Função famosoaa que retorna Objeto...
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)