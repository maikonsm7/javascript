// Outra forma de usar herança, é usar o método Object.setPrototypeOf(filho, pai) no lugar de __proto__
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324,
    // sombreamento
    status(){
        return `${this.modelo}: ${super.status()}` // super -> para chamar a função herdada do pai
    }
}

Object.setPrototypeOf(ferrari, carro)

ferrari.acelerar(100)
console.log(ferrari.status())

// no For in é exibido todos os atributos e métodos, inclusive os que foram herdados.
for(i in ferrari){
    console.log(i)
}