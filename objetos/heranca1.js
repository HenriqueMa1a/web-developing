const ferrari = {
    modelo: 'F40',
    velMax: 340
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

//Sempre que eu crio um new Object (instancio a partir da função Object), ele tem uma ref. p/ Object.prototype acessada por:
console.log(ferrari.prototype)
console.log(ferrari.__proto__) // __proto__ nome do atributo pra acessar o objeto Pai (que é seu protótipo)
console.log(ferrari.__proto__ === Object.prototype) // aponta para o objeto Pai que é o Object.prototype, neste caso 
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)
// o atributo prototype não está disponível em objetos, apenas em dentro de função
function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)