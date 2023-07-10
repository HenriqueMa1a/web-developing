//tagged templates - processa o template dentro de uma função. Quase nunca usado
function tag(partes, ...valores){
    console.log(valores)
    console.log(partes)
    return 'Outra String'
}

const aluno = 'Henrique'
const situaçao = 'aprovado'
console.log(tag `${aluno} está ${situaçao}!`) //se concatenarmos as partes com os valores, obtém-se a string completa