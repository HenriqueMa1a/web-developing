for (let letra of 'henrique') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promises', {abordado: false}],
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}
for (let valor of assuntosMap.values()) {
    console.log(valor)
}
for (let [ch, vl] of assuntosMap.entries()) { //Destructuring
    console.log(ch, vl)
}

const string = new Set(['a', 'b', 'c'])

for(let letra of string){
    console.log(letra)
}