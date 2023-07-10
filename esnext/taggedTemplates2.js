function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor,indice)=>{
        valor= isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const custo = 150
const custo2 = 80

console.log(real `O fone custa ${custo2} e o carregador custa ${custo}`)