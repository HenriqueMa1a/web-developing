const http = require("http");

const getTurma = (turma) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${turma}.json`;
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let resultado = "";
      res.on("data", (dados) => {
        resultado += dados;
      });

      res.on("end", () => {
        try {
          resolve(JSON.parse(resultado));
        } catch (e) {
          reject(e);
        }
      });
    });
  });
};

// Recurso do ES8
// Objetivo de Simplificar o uso de promises ...
// parece com uma função do formato síncrono
let obterAlunos = async()=>{
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')

    return [].concat(turmaA, turmaB, turmaC)
}// retorna um objeto AsyncFunction => chamar o then

obterAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes=> console.log(nomes))
