const alunos = [
    { nome: 'João', nota: 7.3, bolsista: true },
    { nome: 'Maria', nota: 9.2, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsista: true },
    { nome: 'Ana', nota: 8.7, bolsista: false }
]

//desafio 1: todos os alunos são bolsistas?
const todosBolsistas= (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a =>a.bolsista).reduce(todosBolsistas))
//desafio 2: algum aluno é bolsista?
const algumBolsistas= (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a =>a.bolsista).reduce(algumBolsistas))


// a variável resultado irá guardar o resultado dos testes anteriores, funcionando como um acumulador. O teste lógico é para ver se os elementos anteriores e o atual são verdadeiros ou não.

// Veja esse passo a passo com base no exemplo da aula:

// 1º teste: resultado será o atributo bolsista do objeto cujo nome é João. Já bolsista será o atributo bolsista do objeto cujo nome é Maria.

// 2º teste: resultado será o o resultado do teste lógico do passo anterior. Já bolsista será o atributo bolsista do objeto cujo nome é Pedro.

// 3º teste: resultado será o o resultado do teste lógico do passo anterior. Já bolsista será o atributo bolsista do objeto cujo nome é Ana.

// No final, nesse caso, a função reduce irá retornar só um valor, true ou false. Bons estudos ;)