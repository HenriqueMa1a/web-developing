const pessoa = {
    nome: 'Maria',
    idade: 35,
    peso: 57
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
console.log('</hr>')
// mesmo exemplo acima, porém desestruturando
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// Object define property

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // listável ?
    writable: false, //sobreescrevível ?
    value: '16/05/2000'
})

pessoa.dataNascimento = '22/06/2003'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa)) // faça um teste botando false em tudo

//Object assign (EcmaScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
Object.assign(dest, o1, o2)   //all os atributos dos objetos a partir de destino irão ser postos dentro de destino(dest)
// vai concatenando e sobreescrevendo

const obj = Object.assign(dest, o1, o2)
Object.freeze(obj)

obj.c=1234;
console.log(obj)