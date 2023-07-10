function funcionaOuNao (valor, chanceErro){//assumindo que chanceErro esteja entre 0 e 1, onde 1 é 100% de erro pra essa função
    return new Promise((resolve, reject)=>{
        try{
            // con.log('temp') // caso de cair no catch da linha 10
            if(Math.random()<chanceErro){
                reject('Ocorreu um erro')
            }else{
                resolve(valor)
            }
        }catch(e){
            reject(e)
        }

    })
}

funcionaOuNao('caso1', 0.5) // 50% de erro
    .then(valor=>`Valor: ${valor}`)
    .catch(err => console.log(`Erro: ${err}`)) // por via de regra, o catch é posto no fim do encadeamento
    .then(()=>console.log('fim')) // não recebe nada

funcionaOuNao('caso2', 0.5)
    .then(valor=>`Valor: ${valor}`)
    .then(
        v => consol.log(v),
        err => console.log(`Erro espec.: ${err}`) // Quando eu faço o tratamento de erro dentro de um then, o catch não vai ser chamado.
        )
    .then(()=> console.log('Quase Fim')) // também não recebe nada
    .catch(err => console.log(`Erro Geral: ${err}`)) // por via de regra, o catch é posto no fim do encadeamento
    .then(()=>console.log('fim')) // não recebe nada

funcionarOuNao('caso3', 0.5) // try /catch
    .then(valor=>`Valor: ${valor}`)
    .then(
        v => console.log(v),
        err => console.log(`Erro espec.: ${err}`) // Quando eu faço o tratamento de erro dentro de um then, o catch não vai ser chamado.
        )
    .then(()=> console.log('Quase Fim')) // também não recebe nada
    .catch(err => console.log(`Erro: ${err}`)) // por via de regra, o catch é posto no fim do encadeamento
    .then(()=>console.log('fim')) // não recebe nada

