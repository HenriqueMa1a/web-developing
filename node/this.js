console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log(`dentro de uma função...`)
    console.log(this === exports) // não mais
    console.log(this === module.exports) // não mais
    console.log(this === global)

    //this.perigo ='...' // adiciona ao escopo global
}

//this.perigo ='...' // adiciona a module.exports

logThis()

// OBSERVAÇÃO: EM UMA ARROW O THIS CONTINUARÁ APONTANDO PARA O MODULE.EXPORTS