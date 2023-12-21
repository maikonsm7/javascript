console.log(Math.ceil(6.3))

const cliente = {}
cliente.nome = "Matheus"
cliente['idade'] = 20
console.log(cliente)
console.log(cliente.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function() { console.log("Exec...") }
}

const obj1 = new Obj("Cadeira")
const obj2 = new Obj("Escada")

console.log(obj1.nome)
console.log(obj2.nome)
obj2.exec()