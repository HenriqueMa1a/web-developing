function MeuObjeto() { }
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)
// observe qual será o protótipo dos obj1 e obj2
console.log(obj1.__proto__ === MeuObjeto.prototype) // o atributo __proto__ do obj aponta para o atrib. prototype da função

MeuObjeto.prototype.nome='Anônimo'
MeuObjeto.prototype.falar=function(){
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

// obj1.falar() -->anônimo...

obj1.nome= 'Henrique'
obj1.falar()

// É possível mudar a referência do objeto sem precisar do método setProtypeOf ou Object.create()

const obj3 = {}
obj3.__proto__= MeuObjeto.prototype
obj3.nome = 'obj3'
obj3.falar()

// resumindo a loucura
console.log((new MeuObjeto).__proto__===MeuObjeto.prototype)
console.log(MeuObjeto.__proto__=== Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__===null)

// Prototype: Pertence a função construtora e serve para adicionar comportamentos a ela depois de criada.
// __proto__: Pertence a instância e é uma referência ao objeto-pai.

console.log(typeof MeuObjeto.prototype, typeof MeuObjeto.__proto__)