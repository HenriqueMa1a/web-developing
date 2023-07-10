class Pessoa {
    constructor(nome) { // funções pra vc gerar o objeto
        this.nome = nome
    }

    falar() {    // métodos para com o objeto  ( só vai falar se eu quiser)
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa(`joao`)
p1.falar()
// console.log(p1) observe


const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`) // função anônima
    }
}



const p2 = criarPessoa(`joão`)
p2.falar()