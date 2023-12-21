const nome = "Maikon"
console.log(nome.charAt(3)) // exibe o caracter da posição 3
console.log(nome.charCodeAt(3)) // exibe o valor em ASCII da posição 3
console.log(nome.indexOf("o")) // exibe a posição do elemento "o" dentro da cadeia de caracteres
console.log(nome.substring(1)) // gera uma substring apartir da posição 1
console.log(nome.substring(0, 3)) // gera uma substring da posição 0 até 2 (não inclui o 3)
console.log(nome.concat(" Monteiro")) // concatenar
console.log(nome.replace("a", "e")) // substituir caracteres da cadeia por algo
console.log("Matheus,Carlos,Ana".split(",")) // gerar um array usando o separador vírgula

// Template String
const a = 2
const b = 3
const dobro = n => n * n
const up = texto => texto.toUpperCase()
console.log(`Soma: ${a+b}, Multiplicação: ${dobro(a)}`)
console.log(`Maiúsculo: ${up("Bom dia!")}`)