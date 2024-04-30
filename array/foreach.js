// forEach -> percorre todo o array sem nenhum propósito
const aprovados = ['Ana', 'Lucas', 'Maria']
aprovados.forEach((nome, indice) => console.log(`${indice}. ${nome}`))

// recreando o foreach
Array.prototype.forEach2 = function (callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

aprovados.forEach2(function (nome, indice){console.log(`${indice}. ${nome}`)})