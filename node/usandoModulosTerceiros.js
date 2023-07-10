const _ = require('lodash') // _ pq é o padrão para fazer referência a alguma biblioteca
// não ponho ./ pq ele vai acessar a pasta node_modules procurando o arquivo index.js (dentro de lodash) e de lá vai 'navegar' pela biblioteca lodash


//No caso baixo ele executa um valor randomico entre 1 e 1000 a cada 2s
setInterval(()=> console.log(_.random(1, 100)), 2000)
