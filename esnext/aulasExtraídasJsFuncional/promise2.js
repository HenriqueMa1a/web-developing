function esperarPor(tempo = 2000) {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("Executando Promise...");
      resolve();
    }, tempo);
  });
}

// esperarPor(6000)
//     .then(console.log)

esperarPor()
    .then(()=>esperarPor())
    .then(esperarPor) // Não passando nenhum parâmetro, eu posso apenas passar a referência da função.