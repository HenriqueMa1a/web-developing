const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor ='local'
    minhaFuncao()  // leva em conta o contexto em que ela foi declarada e não invocada
}

exec()