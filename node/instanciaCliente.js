const contA = require('./instanciaUnica')
const contB = require('./instanciaUnica')

const contC = require('./instanciaNova')()
const contD = require('./instanciaNova')()

contA.inc()
contA.inc()

contC.inc()
contC.inc()

console.log(`
A - ${contA.valor}
B - ${contB.valor}
C - ${contC.valor}
D - ${contD.valor}
`)

