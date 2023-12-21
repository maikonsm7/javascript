const porta = 3003
const express = require('express')
const banco = require('./banco')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res) => {
    res.send(banco.getProdutos()) // converte automaticamente para JSON
})

app.get('/produtos/:id', (req, res) => {
    res.send(banco.getId(req.params.id))
})

app.post('/produtos', (req, res) => {
    const produto = banco.salvarProduto({
        nome: req.params.nome,
        preco: req.params.preco
    })
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})