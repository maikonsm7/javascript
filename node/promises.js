function falarDepoiDe(segundos, frase){
    // na promise é usado duas callbacks na arrow function
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(frase) // resolve aceita apenas 1 parametro
            //reject(frase) // resolve aceita apenas 1 parametro
        }, segundos * 1000)
    })
}

// usa-se o then para executar algo depois que a promessa for resolvida
falarDepoiDe(3, 'Boa noite!')
.then(frase => console.log(frase))
//.catch(erro => console.log('Erro novo: ', erro))// tatar o erro caso a callbakc reject seja chamada
