// estrategia 1 para gerar valor padrao
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b +c
}

console.log(soma1(2, 2, 2))
console.log(soma1())
console.log(soma1(3))

// estrategia 2
function soma2(a, b, c){
    a = isNaN(a) ? 1 : a
    b = isNaN(b) ? 1 : b
    c = isNaN(c) ? 1 : c

    return a + b + c
}

console.log(soma2())
console.log(soma2(4))

// estrategia 3 - ES2015 (usar sempre essa)
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(4), soma3(0, 0, 0))