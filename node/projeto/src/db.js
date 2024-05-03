const sequencia = {
    _id: 1,
    get id(){ return this._id++ }
}

const produtos = {}

function salvarProduto(produto){
    if(!produto.id) produto.id = sequencia.id
    produtos[produto.id] = produto // adicionar um novo produto tendo com o atributo o próprio id
    return produto
}

function deletarProduto(id){
    const prod = produtos[id]
    delete produtos[id]
    return prod
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

module.exports = {salvarProduto, deletarProduto, getProdutos, getProduto}