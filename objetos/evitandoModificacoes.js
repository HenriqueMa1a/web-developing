// Object.preventExtensions

const produto = Object.preventExtensions({
    nome:'qualquer', preco: 2.99, tag:'escolar'
})

console.log(produto)
//
produto.nome='borracha' // permitido
produto.descricao = 'Borracha escolar branca' //não permitido
delete produto.tag // permitido
//
console.log(produto)

//Object.seal --> selar --> não é permitido excluir nem adicionar chaves
//somente alterar os valores das chaves já existentes
const pessoa = {nome: 'henrique', idade: 22}
Object.seal(pessoa)


console.log(`Extensível: ${Object.isExtensible(produto)}`)
console.log(`Selado: ${Object.isSealed(pessoa)}`)

// Object.freeze = selado + valores contantes