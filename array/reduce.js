// reduce serve para gerar um resltudado apartir de um array. A saída final pode ser um numero, obj, texto etc... ele usa um acumulador.
const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

const notas = aluno => aluno.nota
const soma = (acumulador, atual) => acumulador + atual

const result = alunos.map(notas).reduce(soma)
console.log(result)

// criando o reduce manualmente
Array.prototype.reduce2 = function(callback, acumulador){
    let p = 0
    if(!acumulador){
        acumulador = this[0]
        p = 1
    }
    for(let i = p; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const result2 = alunos.map(notas).reduce2(soma)
console.log(result2)

// Desafio
const bolsistas = aluno => aluno.bolsista
// Todos os alunos sao bolsistas?
const todosSaoBolsistas = (acumulador, aluno) => acumulador && aluno
// Algum aluno é bolsista?
const algumEBolsista = (acumulador, aluno) => acumulador || aluno

const result3 = alunos.map(bolsistas).reduce(todosSaoBolsistas)
const result4 = alunos.map(bolsistas).reduce(algumEBolsista)

console.log(result3)
console.log(result4)