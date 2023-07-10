// 4 estratégias da versão antiga para gerar um valor padrão

//1

function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return (a + b + c)
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) // sendo que este último dá bug

function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // 2
    b = 1 in arguments ? b : 1 //3 // entendendo : foi passado algum argumento na posição de índice 1?
    c = isNaN(c) ? 1 : c //4 e é a mais segura dentre as 4
    return (a + b + c)
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//valor padrão do es2015

function soma3(a=1, b=2, c=3) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))