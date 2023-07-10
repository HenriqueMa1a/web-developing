function Pessoa(nome) {  // essa função é igual ao constructor da class
    this.nome = nome
    this.falar = function falar() {  
        console.log(`Olá, meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('dwsfsda') // a partir de quando gero a nova pessoa ela já vem com o nome e a habilidade de falar prontos
p1.falar()
// console.log(p1) observe