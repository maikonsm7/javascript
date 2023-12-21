const sequencia = {
    _id: 1,
    get id(){return this._id++}
}

const produtos = {}

function salvarProduto(produto){
    if(!produto.id) produto.id = sequencia.id
    produto[produto.id] = produto
    return produto
}

function getId(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

module.exports = {salvarProduto, getId, getProdutos}