// filter -> gerar um novo array de tamanho menor ou igual ao original
const notas = [7.6, 4.2, 8.9, 9.2, 3.1]
const aprovados = notas.filter(nota => nota >= 7)
console.log(aprovados)

// refazendo o filter
Array.prototype.filter2 = function (callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this) === true){
            newArray.push(this[i])
        }
    }
    return newArray
}

const aprovados2 = notas.filter2(nota => nota >= 7)
console.log(aprovados2)