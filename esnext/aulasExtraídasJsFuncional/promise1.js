console.log(typeof Promise)
// console.log(typeof p)
// let p = new Promise(function(cumprirPromessa){
//     cumprirPromessa(3)
// })

const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve){
    resolve(['Ana', 'Gabriel', 'Henrique', 'Carol'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)

// No lugar do 3, o valor pode ser um array de dados, um objeto e afins