// cadeia de protótipos (prototype chain)

const avo = { attr1: 'a', attr3: 'f' } // aponta para Object.prototype
const pai = { __proto__: avo, attr2: 'b', attr3: 'e' }
const filho = { __proto__: pai, attr3: 'c' }

// console.log(filho.attr1, filho.attr0) observe que o atributo 0 vai retornar undefined.
//forçando o atributo 0 dentro do protótipo para o qual o avo referencia:
Object.prototype.attr0 = 'd' // não faça isso em casa
console.log(filho.attr1, filho.attr0, filho.attr3) // observe que sobreescreveu o atributo 3. Conclui-se que a procura é feita hierarquicamente no escopo mais próximo

const carro = {
    velAtual: 0,
    velMax: 200,

    acelera(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax
        }
    },

    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 340, //shadowing
}
const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}
Object.setPrototypeOf(ferrari, carro) // seta ao objeto ferrari o protótipo carro.
Object.setPrototypeOf(volvo, carro)
//console.log(ferrari) // mostrará só os atributos de dentro. Porém continuará tendo os métodos do seu protótipo
ferrari.acelera(20)
ferrari.acelera(120)
console.log(ferrari.status())

volvo.acelera(100)
volvo.acelera(120)
console.log(volvo.status())