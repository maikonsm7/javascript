// map gera um novo array com as modificacoes escolhidas com o mesmo tamanho do original, sem modificar o array original
const nums = [1, 2, 3, 4, 5]
const dobro = item => item * 2
const paraDinheiro = item => `R$ ${parseFloat(item).toFixed(2).replace('.', ',')}`
let result = nums.map(dobro).map(paraDinheiro)
console.log(result)

// criando um map manualmente
Array.prototype.map2 = function (callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

let result2 = nums.map2(dobro)
console.log(result2)

// Desafio: retonar um array somente com os precos
const carrinho = [
    '{"nome": "Bolacha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.95}',
    '{"nome": "Kit de Lapis", "preco": 21.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const paraObjeto = item => JSON.parse(item)
const preco = item => item.preco
let apenasPreco = carrinho.map(paraObjeto).map(preco)
console.log(apenasPreco)