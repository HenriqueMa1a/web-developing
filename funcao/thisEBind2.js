// function Pessoa() {
//     this.idade = 0
//     setInterval(function () {
//         this.idade++
//         console.log(this.idade)
//     }.bind(this), 1000)  // No caso, .bind(this) está fora da função anônima, então naquele ponto o this refere-se a Pessoa. 
//                              Ou seja, o bind retornou uma função igual à função anônima, mas com o this setado para a Pessoa.
// }

// new Pessoa

function Pessoa() {
    this.idade = 0
    const self = this  // const não permitirá que this mude
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa