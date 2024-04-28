function soma(x, y){
    return x + y
}

const imprimirResultado = function(x, y, operacao = soma){
    console.log(operacao(x, y))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(8, 4, function (x, y){ return x - y })
imprimirResultado(2, 4, (x, y) => { return x * y })