// os dois apontam para o mesmo objeto (atribuição por referência)
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

// parenteses no final pois a instanciaNova retorna uma função
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)