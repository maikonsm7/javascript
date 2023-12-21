// Funcao factory é uma funcao que retorna sempre um novo objeto
function criarPessoa(){
    return {
        nome: "Maikon",
        idade: 31
    }
}
function criarProduto(nome, preco, desconto = 0.1){
    return{
        nome,
        preco,
        desconto
    }
}

console.log(criarPessoa())
console.log(criarProduto('iMac', 8000))