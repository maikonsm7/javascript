const sequencia = {
    _valor: 1, // convenção
    get valor(){ return this._valor++ },
    set valor(v){ this._valor = v }
}

console.log(sequencia.valor, sequencia.valor) // chama o get automaticamente
sequencia.valor = 1000 // chama o set automaticamente
console.log(sequencia.valor, sequencia.valor)