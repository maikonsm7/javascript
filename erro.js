function tratarErro(e){
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw{
        nome: e.name,
        msg: e.message,
        date: new Date
    }
}

function imprimirNome(obj){
    try {
        console.log(obj.name.toUpperCase() + '!')
    } catch (error) {
        tratarErro(error)
    } finally{ // sempre vai executar! independente se der errou ou não
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNome(obj)