function mostraErroELancar(erro) {
    // throw new Error('.....')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}


function imprimirGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        mostraErroELancar(e)
    } finally { // vai mostrar tendo erro ou não 
        console.log('final')
    }



}

const obj = { name: 'Roberto' }

imprimirGritado(obj)