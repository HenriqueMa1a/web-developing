// atribuição por referência (endereçamento de memória)

const a = {
    name: 'oi'
}

const b = a;
b.name = 'epa'

console.log(a)
console.log(b)

// atribuição por valor. Note que abaixo tem um corpotamento diferente do de cima pq foi atribuído um valor primitivo da linguagem

let c = 3;

let d = c;
d++

console.log(d)

console.log(c)
// acoteceeu que uma cópia do valor é passado a d. O QUE É Diferente de objetos, que é passado o endereço de memória do objeto

// quando a variável é null, não tem valor dentro dela (ausência) e não aponta pra nenhum endereço de memória

let valor // não inicializada 

console.log(valor); // undefined
// console.log(valor2) is not defined

valor = null //ausência 
console.log(valor)
// console.log(valor.toString()) // erro  . Em uma variável nula, eu não posso acessar nada de dentro dela... nenhuma propriedade

const produto = {}

produto.preço
console.log(produto.preco)

produto.preco=3.5
console.log(produto.preco)

produto.preco= undefined // evite atribuir undefined. Deixe que a linguagem atribui.
console.log(!!produto.preco);
// delete produto.preco
console.log(produto)



produto.preco=null //sem preco
console.log(!!produto.preco)
console.log(produto)


