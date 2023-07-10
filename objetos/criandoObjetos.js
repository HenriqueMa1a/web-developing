// usando a notação literal

const obj1 = {}
console.log(obj1)

//Object em JS

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funções construtoras

function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1-desc)
    }
}

const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('notebook', 2998.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//funcao Factory

function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30)*(30 - faltas)
        }

    }
}

const f1 = criarFuncionario('joão', 7980, 4)
const f2 = criarFuncionario('Ana', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create

const filha = Object.create(null) //vai explicar o pq do null + pra frente
filha.nome= 'Ana'
console.log(filha)

// uma função famosa que retorna Objeto ...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)