function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const carro = {
    preco: 80000,
    desc: 0.12
}

// CALL/APPLY servem para chamar uma funcao e executar no contexto onde foi chamada
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// a diferenca entre os dois é na passagem dos parametros
console.log(getPreco.call(carro, 0.17, '$')) // sempre eu vou colocar o contexto primeiro, e depois os outros parametros
console.log(getPreco.apply(carro, [0.17, '$'])) // sempre eu vou colocar o contexto primeiro, e depois os outros parametros dentro de um array