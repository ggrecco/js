function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //metodo públco
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual +=  delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo público com func arrow
    this.acelerar2 = () => {
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual +=  delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    
    //metodo público com func arrow
    this.acelerar3 = () => velocidadeAtual + delta <= velocidadeMaxima ? velocidadeAtual+= delta : velocidadeAtual = velocidadeMaxima


    //metodo público
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }

    this.getVelocidadeAtual2 = () => velocidadeAtual
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar2()
ferrari.acelerar3()
console.log(ferrari.getVelocidadeAtual())
console.log(ferrari.getVelocidadeAtual2())