const peso1 = 1.0
const peso2 = Number('2.0')
console.log(peso1, peso2)

// verificar se um úmero é inteiro
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 7.871
const avaliacao2 = 5.871

const total = avaliacao1 * peso1 + avaliacao2 *peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2)) // controlar a quantidade de casas decimais
console.log(media.toFixed(2).toString()) // converter para string
console.log(media.toString(2)) // converter em binário