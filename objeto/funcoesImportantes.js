const pessoa = {
    nome: 'Marcos',
    idade: 20,
    peso: 60
}

console.log(Object.keys(pessoa)) // apenas as chaves
console.log(Object.values(pessoa)) // apenas os valores
console.log(Object.entries(pessoa)) // todos os registros em array
Object.entries(pessoa).forEach(e => console.log(`${e[0]}: ${e[1]}`))
Object.entries(pessoa).forEach(([chave, valor]) => console.log(`${chave}: ${valor}`)) // usando o destructuring

// definir as propriedades do objeto
Object.defineProperty(pessoa, 'idade', {
    enumerable: false, // vai aparecer na listagem do entries?
    writable: true, // vai ser editável?
    // value: 21 // definir o valor
})
console.log(pessoa)

// Object.assign -> ES6
const dest = {a: 1}
const obj1 = {b: 2}
const obj2 = {a: 3, c: 4}
Object.assign(dest, obj1, obj2) // concatena os objetos unificando os atributos em comum e prevalecendo os valores atuais
console.log(dest)

Object.freeze(dest)
dest.a = 20
console.log(dest)

// Não permitir adicionar mais atributos no objeto
// Permite remover, mas não adicionar
const carro = Object.preventExtensions({
    nome: 'BMW',
    cor: 'Azul'
})
carro.modelo = 'TOP'
console.log(carro)
