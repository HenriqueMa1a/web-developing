class lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome,
            this.valor = valor
    }
}

class cicloFinanceiro {
    constructor(mes, ano) {

        this.mes = mes,
            this.ano = ano,
            this.lancamentos = []
    }

    addLancamentos(...lancamentos) { // ... <-- rest. retorna um array
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado+=l.valor // l é cada um objeto de lançamentos
        })
        return valorConsolidado
    }
}

const salario = new lancamento('salário', 10000)
const despesa = new lancamento('despesa', -2500)
const cicloJulho = new cicloFinanceiro(07, 2022)
cicloJulho.addLancamentos(salario)
cicloJulho.addLancamentos(despesa)
console.log(cicloJulho) // oserve a concatatenação do operador rest
//OK. Vamos observar a conta
console.log(cicloJulho.sumario())


