console.log(this === global) // false
console.log(this === module.exports) // true
console.log(this === exports) // true

// dentro de uma função o this não aponta para o module.exports
function logThis(){
    console.log('Dentro da função tradicional:')
    console.log(this === module.exports) // false
    console.log(this === global) // true
}

const thisArrowFunction = () => {
    console.log('Dentro da função arrow:')
    console.log(this === module.exports) // true
    console.log(this === global) // false
}

logThis()
thisArrowFunction()