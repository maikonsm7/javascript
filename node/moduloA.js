// cada arquivo representa um módulo no node

// exportando usando o this
this.ola = 'Fala pessoal' // nesse contexto o this aponta para o global

// exportando usando o exports
exports.bemVindo = 'Bem vindo ao node!'

// exportando usando o module.exports
module.exports.saudacao = 'Bom dia!'
