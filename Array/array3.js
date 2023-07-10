Array.prototype.reduce2 = function (callback, valorInicial){
    let indiceInicial= valorInicial? 0 : 1
    let acumulador = valorInicial || this[0]
    for(let i = indiceInicial; i<this.length; i++){
        acumulador= callback(acumulador, this[i], i, array) // entenda os dois lets fazendo a comparação a partir daqui
    }

    return acumulador

}

const soma = (a,b)=> a+b
const nums = [0,1,2,3,4]

console.log(nums.reduce(soma, 2))