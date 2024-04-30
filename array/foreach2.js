// recreando o foreach
const foreach2 = (arr, func) => {
    for(let i = 0; i < arr.length; i++){
        func(arr[i], i, arr)
    }
}

const aprovados = ['Ana', 'Marcos', 'Lucas']
foreach2(aprovados, function (nome, indice){console.log(`${indice}. ${nome}`)})