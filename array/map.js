// map -> gerar um novo array do mesmo tamanho transformando os elementos
const valores = [1, 2, 3]
const dobro = valores.map(item => item * 2)
console.log(dobro)

// refazendo o map
Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const dobro2 = valores.map2(item => item * 2)
console.log(dobro2)