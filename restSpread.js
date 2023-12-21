// ... rest(juntar) / spread (espalhar)

// rest
function somar(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(somar(4, 5, 8))

// spread
const funcionario = {
    nome: 'João',
    idade: 32
}
const pessoa = {sexo: 'Masculino', ...funcionario}
console.log(pessoa)