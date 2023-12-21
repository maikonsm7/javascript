const aprovados = ['Ana', 'Bia', 'Lucas', 'Matheus', 'Marcos']
aprovados.forEach((nome, indice) => console.log(`${indice + 1} - ${nome}`))

// armazenando a funcão em uma constante
const exibirAprovados = nome => console.log(nome)
aprovados.forEach(exibirAprovados)

// fazendo um forEach manualmente
Array.prototype.forEach2 = function(callback){
    for(let i=0; i<this.length; i++){
        callback(this[i], i, this)
    }
}

aprovados.forEach2((nome, indice) => console.log(`${indice + 1}) ${nome}`))