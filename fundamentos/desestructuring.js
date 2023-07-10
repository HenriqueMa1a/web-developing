//o destructuring serve para desestruturar uma estratura (array/ onj)

const pessoa = {
    nome: 'henrique',
    idade: 22,
    carro: 'Tesla',
    endereco: {
        rua: 'e',
        number: 2
    }
}
let { nome, idade } = pessoa
//ele pega essas variáveis dentro dele e extrai do objeto pessoa.
//oberve abaixo

console.log(nome, idade)

nome = 'carol';

console.log(nome)

console.log(pessoa)
const {nome: name, idade: age}=pessoa;

//Observe acima como atribuir um novo endereço ao conteúdo da variável extraída
//console.log(nome) is not defined
console.log(name);

 const {endereco: redisencia, cep= 21832210} = pessoa

console.log(redisencia, cep)

