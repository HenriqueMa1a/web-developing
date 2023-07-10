const notas = [8.2, 8.3, 9.6, 10, 7.7]

for (i in notas) {
    console.log(i, notas[i])
}

console.log(i) // observe a diferença que o let faria antes do i

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso:64
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}