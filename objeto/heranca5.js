// Já que toda função tem o atributo prototype, logo os itens abaixo também tem
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function (){
    return this.split('').reverse().join('')
}

let texto = 'maikon'
console.log(texto.reverse())