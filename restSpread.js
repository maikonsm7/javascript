// spread - espalhar
const funcionario = {nome: 'Ana', idade: 20}
const clone = {isAtivo: true, ...funcionario}
console.log(clone)

const grupoA = ['Mateus', 'Lucas', 'Lucia']
const grupoFinal = [...grupoA, 'Maria']
console.log(grupoFinal)

// rest - juntar
function somar(...valores){
    const result = valores.reduce((acumulador, atual) => acumulador + atual)
    console.log(result)
}

somar(1, 2, 3, 4)