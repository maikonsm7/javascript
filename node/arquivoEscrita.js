const fs = require('fs')
const produto = {
    nome: 'Celular',
    valor: 2500,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), erro => {
    console.log(erro || 'Arquivo salvo com sucesso!')
})