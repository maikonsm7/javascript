// Função factory é uma função que sempre retorna um novo objeto
function criarPessoa(nome, idade){
    return {
        nome,
        idade,
        endereço: '...'
    }
}

const p1 = criarPessoa('Ana', 20)
const p2 = criarPessoa('Bia', 18)
console.log(p1, p2)