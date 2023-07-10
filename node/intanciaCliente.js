//1° CASO - SIMPLESMENTE EXPORTEI UM OBJETO DO NODE E ELE FAZ CACHE DESSE OBJ (SE ESSE OBJETO JÁ TIVER SIDO CRIADO, ELE RETORNA A MESMA INSTANCIA)
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')
// 2° CASO - NOVAS INSTANCIAS CRIADAS A PARTIR DE UMA FACTORY
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()


//
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
