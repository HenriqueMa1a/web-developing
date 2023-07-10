// recurso old
function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma;
}

console.log(soma(1, 2.3, 25))
console.log(soma(1, 2.3, 25, 'teste')) // concat 