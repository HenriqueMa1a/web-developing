const aprovados = [ 'Agata', 'Aldo', 'Daniel', 'Daniel']
//

aprovados.forEach(function(nome,indice, array){ //Esses são os três parâmetros do forEach, porém é muito difícil passar o array
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})
aprovados.forEach(nome=>console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)