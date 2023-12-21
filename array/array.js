let aprovados = ['Bia', 'Lucas', 'Matheus']
console.log(aprovados)

// adiciona um novo elemento no final do array
aprovados.push('Igor')
console.log(aprovados)

// adicionar um novo elemento no início do array
aprovados.unshift('Tiago')
console.log(aprovados)

// retira o ultimo elemento do array
aprovados.pop()
console.log(aprovados)

// retira o primeiro elemento do array
aprovados.shift()
console.log(aprovados)

// deleta um elemento do array, mas o espaco fica setado como undefined
delete aprovados[0]
console.log(aprovados)

// ordenar o array
aprovados.sort()
console.log(aprovados)

// splice serve para excluir, adicionar ou excluir e adicionar elementos no array
aprovados.splice(2, 1, 'Bia', 'Marcos') // (índice que eu quero trabalhar, qtd de elementos que eu quero remover, elementos que eu quero adicionar)
console.log(aprovados)

// slice gera um novo array
const novoArray = aprovados.slice(2) // gerar um subarray apartir do indice 2, ou pode ser um intervalo aprovados.slice(1, 3)
console.log(novoArray)
