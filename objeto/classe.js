class Lancamento{
    constructor(nome = 'Genérico', valor=0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lacamentos){
        lacamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => valorConsolidado += l.valor)
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 2500)
const contaLuz = new Lancamento('Conta de Luz', -220)

const contas = new CicloFinanceiro(6, 2024)
contas.addLancamentos(salario, contaLuz)
console.log(contas.sumario())