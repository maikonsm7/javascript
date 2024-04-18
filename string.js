const escola = 'Cod3r'

console.log(escola.charAt(4)) // exibe o valor da posição 4
console.log(escola.charCodeAt(3)) // exibe o valor da posição 3 em em ASCII
console.log(escola.indexOf('o')) // exibe a posição do valor, caso tenha
console.log(escola.substring(2)) // gera um substring apartir da posição esolhida
console.log(escola.substring(1, 3)) // gera um substring no intervalo escolhido sem incluir o ultimo parametro
console.log('Escola '.concat(escola)) // concatenar
console.log(escola.replace(3, 'e')) // substituir
console.log(escola.replace(/\d/, 'e')) // substituir todos os números pela letra e (regex)
console.log('Ana,Lia,Matheus'.split(',')) // gerar um array separando os valores pela vírgula

// Template String
const nome = 'Maikon'
console.log(`Bom dia ${nome}!`)