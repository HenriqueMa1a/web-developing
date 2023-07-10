const moduloA = require('../../moduloA')

console.log(moduloA.ola)
// não é uma boa prática criar algo de dentro de node_modules ... apenas para efeito de demonstrações.
const saudacao = require('saudacao') // index.js e pq tb ta dentro de node_modules
console.log(saudacao.ola)


// módulos previamentes instalados com o node

const http = require('http') // não preciso informar caminho relativo por ser módulo interno

http.createServer((req, res) => {
    res.write('Bom dia, pessoal!')
    res.end()
}).listen(8080)


