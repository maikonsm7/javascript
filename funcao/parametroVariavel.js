function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    console.log(soma)
}

soma()
soma(2, 4)