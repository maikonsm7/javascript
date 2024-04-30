// reduce -> gerar um valor final aparti de um array
const valores = [1, 2, 3, 4]
const somarTodos = valores.reduce((acumulado, atual) => acumulado += atual)
const somarTodos2 = valores.reduce((acumulado, atual) => acumulado += atual, 10) // 10 é o valor inicial do acumulador
console.log(somarTodos, somarTodos2)

// refazendo o reduce
Array.prototype.reduce2 = function(callback, valorInicial){
    let indiceInicial = valorInicial ? 1 : 0
    let result = valorInicial || this[0]
    for(let i = indiceInicial; i < this.length; i++){
        result = callback(result, this[i], i, this)
    }
    return result
}

const somarTodos3 = valores.reduce((acumulado, atual) => acumulado += atual)
console.log(somarTodos3)