// estrutura não indexada que não aceita repetição
const times = new Set()
times.add('Flamengo').add('Vasco').add('Palmeiras').add('Vasco')
console.log(times)
console.log(times.size) // ver o tamanho
console.log(times.has('Vasco')) // verificar se existe um elemento
times.delete('Palmeiras') // deletar um elemento
console.log(times)

// criar um set apartir de um array
const nomes = ['Ana', 'Lucas', 'Matheus', 'Ana']
const nomeSet = new Set(nomes)
console.log(nomeSet)