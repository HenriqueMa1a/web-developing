function rand({max=1000, min=0}){
    const valor = Math.random()* (max-min) + min
    return Math.floor(valor);
}

const obj = {min:40, max:50}
console.log(rand(obj))
console.log(rand({min:955}))
console.log(rand ({}))
// console.log(rand ())
// note que se eu passar com o parâmetro vazio (sem ser um obj, no caso), a função não vai ter como estruturar
