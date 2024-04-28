function rand(min = 0, max = 10){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0;
while(opcao != 2){
    opcao = rand()
    console.log(opcao)
}

console.log('Final')

// a diferença do while e do while é que: no do while garante pelo menos 1 iteração no laço.