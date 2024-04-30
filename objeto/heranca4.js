function MeuObjeto(){} // toda função tem o atributo prototype
console.log(MeuObjeto.prototype)
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj2.__proto__)

// vc pode adicionar o que quiser no prototype
MeuObjeto.prototype.nome = 'Ana'
MeuObjeto.prototype.falar = function (){ console.log(`Bom dia ${this.nome}`) }

obj1.falar()

obj2.nome = 'Marcos'
obj2.falar()