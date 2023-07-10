const nums = [1, 2, 3, 4, 5]

//For com propósito

let resultado = nums.map(function(e){
    return e * 3
})

console.log(resultado)
// o map sempre retornará um array de mesmo tamanho, mapeado segundo uma lógica
// não transforma o array que está sendo mapeado

const soma10 = e => e + 10
const triplo = e => e*3
const paraDinheiro= e=> `R$ ${parseFloat(e).toFixed(2).replace('.' , ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)