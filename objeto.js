const produto1 = {}
produto1.nome = "iPhone"
produto1.valor = 4500.60
produto1.cor = "Branco"
produto1.desconto = 0.20

console.log(produto1)

const produto2 = {
    nome: "iPad",
    valor: 3800,
    cor: "Preto",
    desconto: 0.30
}

console.log(produto2)

// ----------------------------

const a = {nome: "Maria"} // a variável "a" recebe o endereço de memória que será alocado o valor 3. Obs: isso acontece apenas com objetos
const b = a // b recebe esse mesmo endereço
console.log(a, b)
b.nome = "Carlos"
console.log(a, b)

// com tipo de dado básico/primitivo, é passado o valor mesmo normal.
let c = 3
let d = c
d++
console.log(c, d)