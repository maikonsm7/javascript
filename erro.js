function tratarErro(erro){
    // throw new Error("...")
    // throw 10
    // throw "Mensagem de erro" // throw é para lançar um erro 
    throw console.log(`nome: ${erro.name}, msg: ${erro.message}, data: ${new Date}`)
}

function imprimirNome(obj){
    try{
        console.log(obj.nome.toUpperCase())
    }catch(e){
        tratarErro(e)
    }finally{ // o finally sempre vai executar independente de ter erro ou não
        console.log("final")
    }
}
imprimirNome({name: "maikon"})