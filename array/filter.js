// filter serve para gerar um novo array com o tamanho menor ou igual ao array original (sempre contendo uma condicao), sem alterar o original
const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const fragil = prod => prod.fragil
const caro = prod => prod.preco >= 500

const result = produtos.filter(fragil).filter(caro)
console.log(result)

// criando o filter manualmente
Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this))
        newArray.push(this[i])
    }
    return newArray
}

const result2 = produtos.filter2(fragil)
console.log(result2)