// objeto é uma coleção de pares 'chave e valor' ou par nome/valor

const prod1 = {}

prod1.nome = 'celular'
prod1.preço = 1699.99
console.log(prod1);

//porém tem uma forma feia 

// prod1['nome'] = 'gustavo'

// console.log(prod1)   

prod1['nome composto'] = 'gustavo' // não utilizar 

console.log(prod1)
//forma literal

const prod2 = {
    nome: 'borracha',
    preço: 1.5,
    obj:{
        blabla: 'fodase'
    }
}

console.log(prod2.obj.blabla)
