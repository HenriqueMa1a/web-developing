function gerarNumerosEntre(min, max, tempo) {
  if (min > max) [max, min] = [min, max];
  return new Promise((resolve) => {
    setTimeout(() => {
      const fator = max - min + 1;
      const aleatorio = parseInt(Math.random() * fator) + min;
      resolve(aleatorio);
    }, tempo);
  });
}

function gerarVariosNumeros() {
  return Promise.all([
    gerarNumerosEntre(1, 60, 4000),
    gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 60, 2000),
    gerarNumerosEntre(1, 60, 2500),
    gerarNumerosEntre(1, 60, 1500),
    gerarNumerosEntre(1, 60, 3000),
    gerarNumerosEntre(1, 60, 100),
    gerarNumerosEntre(1, 60, 3500),
  ]);
}

console.time('Promise') // label = Promise

gerarVariosNumeros()
    .then(numeros=>numeros.map(numero => numero*0))
    .then(console.log)
    .then(()=>{
         console.timeEnd('Promise')
    })