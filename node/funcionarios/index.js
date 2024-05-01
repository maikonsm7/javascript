const axios = require('axios')
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

axios.get(url).then(response => {
    const funcionarios = response.data
    
    const chineses = f => f.pais === 'China'
    const mulheres = f => f.genero === 'F'
    const menorSalario = (func, funcAtual) => funcAtual.salario < func.salario ? funcAtual : func
    
    const result = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
    console.log(result)
})