const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    
    // desafio
    const pais = func => func.pais == 'China'
    const genero = func => func.genero == 'F'
    const menorSalario = (func, funcAtual) => funcAtual.salario < func.salario ? funcAtual : func

    const result = funcionarios.filter(pais).filter(genero).reduce(menorSalario)
    console.log(result)
})