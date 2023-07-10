class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissão = 'professor') {
        super(sobrenome) // Da super classes, 1 grau acima
        this.profissão = profissão
    }
}

class Filho extends Pai {
    constructor (){
        super('Maia')
    }
}

const henrique = new Filho
console.log(henrique)