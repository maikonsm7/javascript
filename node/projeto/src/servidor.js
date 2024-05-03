const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')
const app = express()
const porta = 3003

// qualquer url vai cair aqui no use
// app.use('/', (req, res) => {
//     res.send('Bem vindo!')
// })

// quando é feito uma requisição usando o urlencoded, é necessário fazer um parser para converter em objeto.
// sem biblioteca do body-parser
// app.use(express.json())
// app.use(express.urlencoded({
//   extended: true
// }))

// com a biblioteca
app.use(bodyParser.urlencoded({extended: true}))

// buscar todos os produtos
app.get('/produtos', (req, res) => {
    // res.send({nome: 'Notebook', preco: 3600}) // é convertido automaticamente em JSON
    res.send(db.getProdutos())
})

// buscar o produto pelo ID
app.get('/produtos/:id', (req, res) => {
    res.send(db.getProduto(req.params.id))
})

// inserir um produto
app.post('/produtos', (req, res) => {
    const produto = db.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

// editar um produto
app.put('/produtos/:id', (req, res) => {
    const produto = db.salvarProduto({
        id: req.body.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

// deletar um produto
app.delete('/produtos/:id', (req, res) => {
    const produto = db.deletarProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor online na porta http://localhost:${porta}`)
})