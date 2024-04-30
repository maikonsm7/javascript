// Em JavaScript o array é heterogênio e de tamanho flexível
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

valores[4] = 10 // permite adicionar valores
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, 'teste') // adicionar no final
console.log(valores)

valores.pop() // remove o último elemento
console.log(valores)

valores.unshift(6.5) // adiciona no início
console.log(valores)

valores.shift() // remove o primeiro elemento
console.log(valores)

delete valores[1] // deleta o elemento, mas o índice fica vazio
console.log(valores)

const nums = [4,1,3,5,2]
nums.sort() // organizar array em ordem crescente
console.log(nums)

nums.splice(1, 2) // remover, adicionar, remover e adicionar elementos de um array
// nums.splice(2, 0, 'novo item', 'outro novo item')
console.log(nums)

const subArray = nums.slice(1) // equivalente ao substring
// const subArray = nums.slice(1, 3) // com intervalo
console.log(subArray)
