const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback

const notasBaixas1 = []
for (indice in notas) {
    if (notas[indice] < 7) notasBaixas1.push(notas[indice])
}

console.log(notasBaixas1)

// com callback

const notasBaixas2 = notas.filter(function (nota) { return nota < 7 })

console.log(notasBaixas2)
const notaMenorQue7= nota => nota<7
const notasBaixas3 = notas.filter(notaMenorQue7)

console.log(notasBaixas3)