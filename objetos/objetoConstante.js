// pessoa --> end de memória 123 --> {...}

const pessoa = { nome: 'João' } // endereço constante
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa --> 456 --> {...}
//pessoa = {nome:'Ana'}  erro pq reuer a alteração do endereço, que é constante

Object.freeze(pessoa) // congela o objeto
pessoa.nome = 'Maria'
pessoa.end = 'Rua  ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome:'João'}) // congela o objeto em si (não dá pra mexer nele)