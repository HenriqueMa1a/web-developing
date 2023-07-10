//console.log(global)
// não recomendável
global.meuApp=Object.freeze({
    saudação(){
        return 'Olá, eu sou...'
    },
    nome: 'Marco'
})
