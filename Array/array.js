//É um objeto que, ao invés de disponibilizar dados por meio de chave/valor, disponibiliza por meio de indexação
console.log(typeof Array, typeof new Array, typeof [])
let aprovados =  new Array('Bia', ' Carlos', 'Ana')
console.log(aprovados)
//
aprovados = ['Bia', 'Carlos', 'Ana']

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3]= 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'

console.log(aprovados.length)
console.log(aprovados[8]===undefined)
//
//
console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])
//
aprovados = ['bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'adicionais') //(índice, o que quero remover, o que quero adc)
//
console.log(aprovados)

