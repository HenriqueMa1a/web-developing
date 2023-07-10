function esperarPor(tempo = 2000) {
    return new Promise((resolve) => {
        setTimeout(()=> resolve(), tempo);
    });
}

// esperarPor()
//     .then(()=>console.log("Executando Promise 1..."))
//     .then(esperarPor)
//     .then(()=>console.log("Executando Promise 2..."))
//     .then(esperarPor)
//     .then(()=>console.log("Executando Promise 3...")) //será resolvido em aprox 6s

// function executar(){
//     esperarPor()
//     console.log('Executando Promise 1...')
//     esperarPor()
//     console.log('Executando Promise 2...')
//     esperarPor()
//     console.log('Executando Promise 3...')
// }// saída em aprox 2s

function retornaValor(){
    return new Promise((resolve)=> {
        setTimeout(() =>resolve(10), 5000)})
}

async function retornaValorRapido(){
    return 20
}

async function executar(){

    let valor = await retornaValorRapido()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor+1}`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor +2}`)

    return valor + 3
}// na escrita, ele parece síncrono , mas não é


// Como consigo pegar o retorno da função executar, ou seja, o valor + 3?
// const v = executar()
// console.log(v) // promise pendente

// const v = await executar()
// console.log(v)// o node não permiti chamar o await dentro do módulo dele

async function executarDeVerdade(){
    const v = await executar()
    console.log(v)
}

executarDeVerdade()