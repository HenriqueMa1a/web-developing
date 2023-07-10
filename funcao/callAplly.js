function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

// global.preco= 20
// global.desc = 0.1
// console.log(getPreco())  //linha 12/13/14  --> uma forma
// console.log(produto.getPreco())  // outra forma


const carro = {
    preco: 49990,
    desc: 0.20
}
// outras formas ...
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// observe a diferença de uso de call para apply. Se dá no jeito de passar os parâmetros de acordo com a função à qual se quer atribuir o escopo.
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))