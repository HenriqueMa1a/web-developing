// coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'genérica'
produto.preço = 220

console.log(produto)
delete produto.preço
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [
        {
            nome: 'junior',
            idade: 19
        },
        {
            nome: 'Ana',
            idade: 42
        }],
    calcularValorSeguro: function () {
        //...
    }
}


carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'AV GIGANTE' // + trabalhoso

console.log(carro)

//delete carro.condutores

delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)