// Closure e o escopo criado quando uma função é declarada
// Esse escopo rmite a função acessar e manipular variáveis externas à função

//contexto léxico em ação

const x = 'Global'

function fora() {
    const x = 'local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora
// console.log(minhaFuncao())
console.log(minhaFuncao()())
console.log(fora()())