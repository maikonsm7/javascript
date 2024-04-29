// Herança em JavaScript se dá por meio de cadeias de protótipos (Prototype chain)
const pai = {
    nome: 'Marcos',
    sobrenome: 'Silva'
}
const filho = {
    __proto__: pai,
    nome: 'Lucas'    
}

console.log(pai)
console.log(filho.nome, filho.sobrenome)
