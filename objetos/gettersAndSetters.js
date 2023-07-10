const sequencia = {
    _valor: 1, // convenção
    get valor() { return this._valor++ },
    set valor(valor) { // parâmetro próprio do escopo do set
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor, sequencia.valor) //get
sequencia.valor = 1000 //set //valor aqui será uma pseudo variável a fim de atribuir à privada pelo set, obedecendo assim a estratégia da convenção.
console.log(sequencia.valor, sequencia.valor) //get ... já tá incremetando desde a linha 11, observe a interação verifique a impressão será 1002 e 1003
sequencia.valor = 900//set ... observe
console.log(sequencia.valor, sequencia.valor) //get

