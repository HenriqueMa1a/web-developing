// IIFE -> immediately invoked function expression

(function () {
    console.log(`Será executado na hora`)
    console.log(`Foge do escopo mais abrangente`) // neste caso, global
})()

    
// console.log(`Será executado na hora`)
// console.log(`Foge do escopo mais abrangente`)
// mesmo efeito, porém qualquer variável que eu acessasse aqui, seria de escopo global(modular, neste caso)