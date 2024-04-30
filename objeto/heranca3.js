// Criar um objeto apartir do protótipo
const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1)

const filha2 = Object.create(pai, {nome: {value: 'Bia', writable: false, enumerable: true}})
console.log(filha2)

// imprimir o que é por herançao e o que não é
for(let key in filha1){
    filha1.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}

