const fs = require('fs')
const caminho = __dirname + '/arquivo.json'

// sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(JSON.parse(conteudo))

// assincrona (leitura mais interessante)
fs.readFile(caminho, 'utf-8', (erro, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// sem usar o fs
const config = require('./arquivo.json') // já converte em objeto automaticamente
console.log(config)

// ler arquivos de uma pasta
fs.readdir(__dirname, (erro, conteudo) => {
    console.log('Lendo arquivos de uma pasta...')
    console.log(conteudo)
})