//Estrutura chave/valor na qual a chave aceita função, objeto, bolean, number

const tecnologias = new Map()

tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function(){}, 'função'],
    [{}, 'objeto'],
    [123, 'número']
])

chavesVariadas.forEach((vl, ch)=> {
    console.log(ch,vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

// Ela não aceita duas chaves iguais e sempre vai substituir a última