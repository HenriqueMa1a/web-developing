// é um método que implementamos para facilitar o concat
// não recomendado para boa prática

const escola = [
    {
        turma: 'M1',
        alunos: [
            {
                nome: 'Ana',
                nota: 7.2
            },
            {
                nome: 'Carol',
                nota: 9.7
            }
        ]
    },    {
        turma: 'M2',
        alunos: [
            {
                nome: 'Henrique',
                nota: 8.6
            },
            {
                nome: 'Thiago',
                nota: 9.1
            }
        ]
    }
]

const getNotaDoAluno = aluno => aluno.nota
const getNotaPorTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotaPorTurma)
console.log(notas1)
console.log([].concat([ 7.2, 9.7 ], [ 8.6, 9.1 ])) // observe que o funcionamento é somente com o que é logado no console

//

Array.prototype.flatMap = function (callback){
    return Array.prototype.concat.apply([], this.map(callback)) // que é exatamente igual ao último console.log
}

const notas2 = escola.flatMap(getNotaPorTurma) // (passo o array final de notas aqui dentro )
console.log(notas2)

