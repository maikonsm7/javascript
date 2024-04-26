// quase tudo em JavaScript é função!
console.log(typeof Object)
class Produto{}
console.log(typeof Produto)

// função sem retorno com valor padrão
function imprimirSoma(a, b = 0){
    console.log(a + b)
}
imprimirSoma(2)
imprimirSoma(2, 3)
imprimirSoma(2, 4, 5) // ele ignora os outros valores

// função com retorno
function soma(a, b){
    return a + b
}
console.log(soma(4, 8))

// armazenar função em uma variável
const triplo = function (a, b){ console.log(a + b) }
triplo(3, 6)

//Arrow Function
const triplo2 = (a, b) => console.log(a + b)
triplo2(1, 2)
