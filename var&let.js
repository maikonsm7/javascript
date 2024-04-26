// var tem escopo global e função
// o problema é que voce pode sobrescrever essa variável
{
    {
        var txt = 'olá'
        console.log(txt)
    }
}
console.log(txt)

function teste(){
    var txt2 = 'olá2'
    console.log(txt2)
}
teste()
// console.log(txt2) // erro

for(var i = 0; i < 10; i++){
    console.log(i)
}
console.log(i) // 10

var numero = 1
{
    var numero = 2
    console.log('dentro -> ', numero)
}
console.log('fora -> ', numero)

// let tem escopo global, função e bloco
var num = 1
{
    let num = 2
    console.log('dentro -> ', num)
}
console.log('fora -> ', num)

for(let j = 0; j < 10; j++){
    console.log(j)
}
// console.log(j) // erro