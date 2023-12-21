const pessoa = {
    saudacao: "Bom dia!",
    falar(){ console.log(this.saudacao) }
}

pessoa.falar()

const falarDePessoa = pessoa.falar.bind(pessoa) // o bind amarra a funcao ao objeto
falarDePessoa()