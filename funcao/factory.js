const prod1 = {
    nome: '...',
    preco: 45
}
const prod2 = {
    nome: '...',
    preco: 1145
}

// factory simples

function criarPessoa(nome, age){
    return{
        nome:nome,
        idade: age
    }
}

console.log(criarPessoa('henrique', 22))