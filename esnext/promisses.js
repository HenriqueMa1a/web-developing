function falarDepoisDe(segundos, frase) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(frase); // param passado aqui = par
    }, segundos * 1000);
  });
}
// .then -> encadeamento de operações da resposta recebida do resolve
falarDepoisDe(3, "Que legal!")
  .then(frase => frase.concat("?!?")) //par
  .then(outraFrase => console.log(outraFrase))
  .catch(e => console.log(e));
