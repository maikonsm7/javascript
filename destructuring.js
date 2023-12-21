// Novo recurso do ES2015 - Visa desestruturar algo
const pessoa = {
    nome: "Ana",
    idade: 25,
    endereco: {
        logradouro: "Rua Fulano",
        numero: 12
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)