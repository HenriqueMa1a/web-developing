function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao!= -1){
    opcao=getInteiroAleatorioEntre(10,-1)
    console.log(`A opção gerada foi: ${opcao}`)
}