// armazenando função dentro de uma varável

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3);

// armazenando uma função arrow em uma variável

const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

//return implícito 

const diferenca = (a, b) => a - b

console.log(diferenca(3, 2))

//um único parâmetro
const imprimir2= a=>console.log(a)
imprimir2('legal')