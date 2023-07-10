function getValorAleatorioEntre(min,max){
    const valor = Math.random()* (max-min) + min
    return Math.floor(valor)
}


let opcao

do {
    opcao= getValorAleatorioEntre(-1,10)
    console.log(`A opcao selecionada é ${opcao}`)
} while (opcao!=-1);

// do {
//     opcao= -1 // vai rodar, mas só uma vez
//     console.log(`A opcao selecionada é ${opcao}`)
// } while (opcao!=-1);
