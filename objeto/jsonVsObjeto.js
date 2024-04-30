const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma(){
        return a + b + c
    }
}

console.log(JSON.stringify(obj)) // Objeto para JSON, ele exclui a função
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) // JSON para Objeto

