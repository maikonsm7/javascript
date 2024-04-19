// Com objeto a variável recebe o endereço do lugar que o valor está armazenado (atribuição por referência)
const a = {nome: 'Carlos'}
const b = a // b está recebendo o mesmo endereço
console.log(a, b)

b.nome = 'Ana'
console.log(a, b)

// Com números a variável recebe o valor, por ser um tipo primitivo de dado (atribuição por valor)
let n1 = 3
let n2 = n1
console.log(n1, n2)

n2 = 4
console.log(n1, n2)

// Undefined
let valor // não inicializado
console.log(valor)

// Null
valor = null // ausência de valor, mas ela foi definida como vazia
console.log(valor)
// console.log(valor.toString()) // erro!

const produto = {}
console.log(produto.nome) // undefined
// console.log(produto.nome.sobrenome) // erro!

produto.nome = 'Caderno'
console.log(produto)
// delete produto.nome // deletar um atributo do obj
