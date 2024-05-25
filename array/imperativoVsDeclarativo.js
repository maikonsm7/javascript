const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Ana', nota: 5.2}
]

// imperativo
let result = 0
for(let i = 0; i < alunos.length; i++){
    result += alunos[i].nota
}
console.log(result / alunos.length)

// declarativo
const getNota = aluno => aluno.nota
const soma = (acumulado, atual) => acumulado + atual

const result2 = alunos.map(getNota).reduce(soma)
console.log((result / alunos.length).toFixed(2))