class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}
// o extends usa o  prototype por trás na heranca
class Pai extends Avo{
    constructor(sobrenome, profissao = 'professor'){
        super(sobrenome) // chama o construtor da classe Avo
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}

const filho = new Filho()
console.log(filho)