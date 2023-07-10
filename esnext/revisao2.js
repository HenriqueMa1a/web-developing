// Arrow function
const soma = (a, b) => a + b;
console.log(soma(2, 3));

// Arrow function(this)

const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({}); // O escopo não vai mudar por ser uma função arrow. Logo na invocação de lexico2, o this vai continuar apontando para ete módulo.
lexico1();
lexico2();

//parâmetro default

function log(texto = "Node") {
  console.log(texto);
}
log();
log("Sou mais forte");

//Operador Rest/Spread

function total(...numeros) {
  let total = 0;
  numeros.forEach((num) => (total += num));
  console.log(total);
}

total(2, 3, 4, 5); // o operador juntou num array e por isso é chamado de rest= juntar
