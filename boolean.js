// um jeito de forçar qualquer operação a ser verdadeira é negar ela 2 vezes
let a = 1
console.log(!!a)

// verdadeiros
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(a = true)) // é verdadeiro pois o valor da valriável é true

// falsos
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(a = false))

console.log(!!('' || null || NaN || 0 || ' ')) // verdadeiro
console.log(('' || null || NaN || 0 || '123')) // 123 - retorna o primeiro valor verdadeiro

const cor = ''
console.log(cor || 'Desconhecido')