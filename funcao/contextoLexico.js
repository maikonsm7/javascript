const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec() 
// o resultado é Global pois o método "minhaFuncao" carrega o contexto em que foi criada no momento que foi declarada.