const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

// para resolver esse problema, podemos usar o bind
const falar2 = pessoa.falar.bind(pessoa)
falar2()

// tomar cuidado ao usar o this dentro de uma função, pois ele aponta para o objeto global. Exceto na arrow function.
