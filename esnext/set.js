// estrutura que não aceita repetição / e não é indexada

const times = new Set()

times.add('vasco')
times.add('flamengo').add('fluminense').add('botafogo')
times.add('vasco') // não aceita repetição

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
times.delete('flamengo')
console.log(times.has('flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']

const nomesSet = new Set(nomes)
console.log(nomesSet)