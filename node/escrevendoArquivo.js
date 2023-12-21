const fs = require('fs')
const dados = {
    nome: 'Maria',
    idade: 21
}
fs.writeFile('/arquivo.json', JSON.stringify(dados), err => {console.log(err)})