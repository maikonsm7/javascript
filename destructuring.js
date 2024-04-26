const pessoa = {
    nome: 'Ana',
    idade: 20,
    endereco: {
        logradouro: 'rua 10',
        numero: 12
    }
}

const { nome } = pessoa
console.log(nome)

const {endereco: {logradouro}} = pessoa
console.log(logradouro)

// usando no parâmetro da função
function rand({min = 0, max = 100}){
    console.log(Math.floor(Math.random() * (max - min) + min))
}
rand({min: 1, max: 5})
rand({})

// usando no array
const [a, b, c] = [1, 2, 3]
console.log(a, b, c)