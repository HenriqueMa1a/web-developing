// não recomendável

require('./global')

// console.log(global.meuApp)

console.log(meuApp.saudação())

meuApp.nome = 'qualquer'

//por conta do object freezer

console.log(meuApp.nome) 