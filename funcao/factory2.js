function criarProduto(nome, preco){
    return{
        name: nome, // ou só nome
        preco: preco,   // ou só preço
        desconto: 0.1
    }
}
console.log(criarProduto('caneca', 25));