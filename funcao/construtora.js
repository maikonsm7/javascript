function Carro(velocidadeMax = 250, delta = 5){
    // attributo privado
    let velocidadeAtual = 0

    // método público
    this.acelerar = function (){
        velocidadeAtual + delta <= velocidadeMax ? velocidadeAtual += delta : velocidadeAtual = velocidadeMax
    }

    this.getVelocidadeAtual = function (){
        console.log(velocidadeAtual)
    }
}

const ferrari = new Carro
ferrari.acelerar()
ferrari.getVelocidadeAtual()