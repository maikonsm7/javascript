function Carro(velocidadeMaxima = 200, delta = 5){
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = () => velocidadeAtual <= velocidadeMaxima ? velocidadeAtual += delta : velocidadeAtual = velocidadeMaxima
    this.getVelocidadeAtual = () => console.log(velocidadeAtual)

    //metodo privado
    // let acelerar = () => console.log("ok")
}

const uno = new Carro
uno.acelerar()
uno.getVelocidadeAtual()

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.getVelocidadeAtual()