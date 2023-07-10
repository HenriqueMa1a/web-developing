console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
//Implementando a função construtora
// você acessa um array ou a string dentro de um método de um protótipo a partir do 'this'

String.prototype.reverse = function(){ // a função construtora de String não tem o método reverse, mas o array gerado por split tem
    return this.split('').reverse().join('')
}

console.log('carol'.reverse())

Array.prototype.first = function(){
    return this[0]
}
const nums = [10,1,2,3,4]
const letters = [ 'a','b']
console.log(nums.first())
console.log(letters.first())

//cuidado..

String.prototype.toString = function(){
    return 'lascou tudo'
}

console.log('Minha vida'.reverse()) // retornará lascou tudo ao contrário, pois eu sobreescrevi o método toString