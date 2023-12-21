const saudacao = "Olá" // contexto léxico 1

function exec(){
    const saudacao = "Bom dia!" // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome: "Luiz",
    idade: 30,
    endereco: {
        logradouro: "Rua 10",
        numero: 20
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)