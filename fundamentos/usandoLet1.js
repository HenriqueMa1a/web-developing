var numero = 1
{
    var numero =3 
    console.log('dentro', numero)
} 

console.log('fora', numero)

//observer que o var ignora o fato de respeitar o bloco o bloco, dando prioridade ao efeito gravitacional. Algo que é difrente com o let.


let numero1 = 1
{
    let numero1 =3 
    console.log('dentro', numero1)
} 

console.log('fora', numero1)

// o let sempre irá procurar a variável mais próxima, inclusive dentro do seu escopo. Não havendo, pula para o global. Observe:


let numero2 = 1
{
    let numero3 =3 
    console.log('dentro', numero2)
} 

console.log('fora', numero2)
