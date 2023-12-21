// Função sem retorno
function imprimirSoma(a, b=0){ // caso não seja enviado o segundo parâmtro, ele admite zero
    console.log(`Soma: ${a + b}`)
}
imprimirSoma(2, 3)
imprimirSoma(4) // é permitido enviar quantos parâmetros quiser
imprimirSoma(5, 8, 9, 2, 7)

// Função com retorno
function multiplicacao(a = 1, b=1){
    return `Multiplicação: ${a * b}`
}
console.log(multiplicacao(7, 2))
console.log(multiplicacao(7))

// Armazenas função em uma variável
const dobro = function (n){ return n * n}
console.log(dobro(4))

// Função Arrow com retorno implícito
const triplo = n => Math.pow(n, 3)
console.log(triplo(4))