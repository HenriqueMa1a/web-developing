Array.prototype.map2 = function(callback){ // lembrando que isso não é uma boa prática. É apenas um ensimaneto de como criar funções e conceito por de tras das já criadas
    const newArray=[]
    for(let i = 0; i<this.length; i++){
        callback(this[i], i, this)
        newArray.push(this[i].callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "borracha", "preco": 3.45 }',
    '{"nome": "caderno", "preco": 13.90 }',
    '{"nome": "kit de lápis", "preco": 41.22 }',
    '{"nome": "caneta", "preco": 7.50 }',
]

const paraObj = json =>  JSON.parse(json)

const apenaspreco = produto => produto.preco


const resultado = carrinho.map(paraObj).map(apenaspreco)


console.log(resultado)
