// import moduloA from './moduloA' // usando o sistema de módulos ES06
const moduloA = require('./moduloA') // usando o sistema de módulos CommonJS
const moduloB = require('./moduloB')

// ./ é o caminho relativo - aponta para um arquivo dentro do meu sistema

console.log(moduloA.bemVindo)
console.log(moduloB.boaNoite())
