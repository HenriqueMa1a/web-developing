const pai = {nome: 'Pedro', corDoCabelo:'preto', carro: 'ford'}

const filha1 = Object.create(pai) //atribuição do protótipo: que é a dúvida do arquivo "criandoObjetos.js"
filha1.nome = 'Ana'

console.log(filha1.corDoCabelo)

const filha2 = Object.create(pai, { // ... atributos dentro de filha2
    nome: {value: 'Carol', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome='rafa'
console.log(`${filha2.nome} tem cor de cabelo ${filha2.corDoCabelo}`)

for(let key in filha2){
    filha2.hasOwnProperty(key)?
        console.log(`${key}`): console.log(`Por herança: ${key}`) // se eu não quiser pegar os atributos que vêm por herança, eu pego apenas os que o hasOwnProperty retorna true
}