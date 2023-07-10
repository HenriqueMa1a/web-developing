const anonimo = process.argv.indexOf('-a')!==-1 // argv == lista de argumentos
// console.log(anonimo)

if(anonimo){
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
}else{
    process.stdout.write('Informe seu nome: ') //entrada padrão de dados
    process.stdin.on('data', data => { // o evento On data acontece quando você digita alguma coisa e dar um enter. aplique a função. O enter também será enviado na variável data
        const nome = data.toString().replace('\r\n', '')
        // se eu não tivesse posto o replace acima, a saída de baixo viria com os '!!' na linha subsequente
        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}
console.log(9 + '3')

// Faça uma analogia com o npm Init -- é a mesma coisa