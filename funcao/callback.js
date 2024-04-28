const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){
    console.log(`${indice}) ${nome}`)
}
fabricantes.forEach(imprimir)

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
const reprovados = notas.filter(nota => nota < 7)
console.log(reprovados)