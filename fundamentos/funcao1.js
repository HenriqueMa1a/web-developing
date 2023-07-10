//funcação sem retorno 

function imprimirSoma(a, b) {
    console.log(a + b)

}
imprimirSoma(2, 3)
imprimirSoma(2) // 2 + undefined
imprimirSoma() //undefined + undefined
imprimirSoma(2, 3, 4, 5, 6)

//função com retorno 

function soma(a, b = 1) {
    return a + b;
}

console.log(soma(2))
console.log(soma(2, 4))
console.log(soma())
console.log(soma(2, 3, 6))