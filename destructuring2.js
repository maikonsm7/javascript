const [a] = [10]
console.log(a)

const [n1, , n3, n4, n5, n6=0] = [1, 3, 4, 5]
console.log(n1, n3, n4, n5, n6)

const [, [, nota]] = [[8, 1, 6], [7, 9, 0]]
console.log(nota)