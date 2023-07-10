// o filter retornará um array com no máximo o número de elementos que tem no array que está filtrando

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'copo de vidro', preco: 12.49, fragil: true},
    {nome: 'copo de plástico', preco: 18.99, fragil: false}
]
// minha solucao
console.log(produtos.filter(function(p){
    return p.preco>500 && p.fragil===true
}))

// do professor

const caro = p => p.preco>500
const fragil = p  => p.fragil

let resultado = produtos.filter(caro).filter(fragil)
console.log(resultado)