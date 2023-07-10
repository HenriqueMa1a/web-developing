const carrinho = [
    '{"nome": "borracha", "preco": 3.45 }',
    '{"nome": "caderno", "preco": 13.90 }',
    '{"nome": "kit de lápis", "preco": 41.22 }',
    '{"nome": "caneta", "preco": 7.50 }',
]
//Desafio: Retornar um array apenas com os preços

//Minha solução
// transformando em obj
const obj = e => JSON.parse(e)
let carrinhoObj = carrinho.map(obj)
// retornando os preços
const preco= e => Object.values(e)[1]
let valor = carrinhoObj.map(preco)
console.log(valor)


// solucao professor
// const paraObj = json =>  JSON.parse(json)
// const apenaspreco = produto => produto.preco

// const resultado = carrinho.map(paraObj).map(apenaspreco)

// console.log(resultado)
