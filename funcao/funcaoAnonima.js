const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, opreacao = soma) {
    console.log(opreacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    // falar: function(){
    //     console.log(`Epa..`)
    // }
// que é o mesmo que:
        falar(){
            console.log(`Epa..`)
        }
}

pessoa.falar()