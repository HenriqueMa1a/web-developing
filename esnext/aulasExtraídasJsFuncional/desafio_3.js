const fs = require("fs");
const path = require("path");
const arquivo = path.join(__dirname, "dados.txt");

function desafio(caminho) {
    return new Promise((resolve) => {
        fs.readFile(caminho, (err, conteudo) => {
            resolve(conteudo.toString());
        });
        console.log("depois de ler"); // observe a prova real de que a requisição está sendo feita de forma assíncrona. Será logado no console antes dos dados.
    });
}

desafio(arquivo).then((conteudo) => console.log(conteudo));
