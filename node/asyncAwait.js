// recurso do ES8
// objetivo de simplificar o uso de promises
function falarDepoiDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(frase)
        }, segundos * 1000)
    })
}

// com o async await, é executado uma linha de cada vez
async function exec(){
    try {   
        await falarDepoiDe(3, 'exec1').then(txt => console.log(txt))
        console.log('executando 1')
        await falarDepoiDe(3, 'exec2').then(txt => console.log(txt))
        console.log('executando 2')
    } catch (error) {
        console.log('error')
    }
}

exec()

console.log('teste') // vai executar primeiro