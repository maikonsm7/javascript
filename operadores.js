// atribuição
const a = 1

// aritiméticos, binário - 2 operandos
const b = 1 + 2

// relacionais
console.log('1' == 1)

// unário - 1 operando
b++ // pós-fixada
++b // pré-fixada (executa primeiro - console.log(++b === b--), nesse caso o incremento é feito antes da comparação)

// ternário - 3 operandos
a ? 'true' : 'false'
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

// lógicos - tabela verdade
/*

v e v -> v
v e f -> f
f e ? -> f

v ou ? -> v
f ou v -> v
f ou f -> f

v xou v -> f
f xou f -> f
v xou f -> v
f xou v -> v

negação lógica em javascript "!"

*/
