function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até breve', 456)

console.log(aula1, aula2)

// simulando o new
//mostrando como acontece por debaixo dos panos
function novo(f, ...params){ // os três pontos faz concatenar tudo num array
    const obj = {}
    obj.__proto__= f.prototype // herdar
    f.apply(obj, params) // mudança de contexto do this
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até breve', 456)

console.log(aula3, aula4)