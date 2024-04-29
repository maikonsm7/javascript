// constante -> endereço de memória -> {...}
const pessoa = {
    nome: 'Pedro'
}
pessoa.nome = 'Ana'
console.log(pessoa)

// erro
// pessoa = {nome: 'Marcos'}
// console.log(pessoa)

// congela o objeto, não podendo mais alterar seus atributos
Object.freeze(pessoa)
pessoa.nome = 'Lucas'
console.log(pessoa)
