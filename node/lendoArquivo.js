const fs = require('fs')

const caminho   = __dirname + '/arquivo.json'
//sincrono (não é muito viável para arquivos grandes)

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assícrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo) // pois ele vem como json, nesse caso
    console.log(`${config.db.host}:${config.db.port}`) // vai ser executado depois do console debaixo, pois
                                                        // só quando ele lê o arquivo 
})

const config = require('./arquivo.json') // já traz como obj
console.log(config.db) // já tá carrregado

fs.readdir(__dirnamem, (err, arquivos)=>{
    console.log('Conteúdo da pasta')
    console.log(arquivos)
}) 
