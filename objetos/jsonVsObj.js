const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)) // obeserve que a função não foi pq o JSON é um arquivo textual

// console.log(JSON.parse("{a:1, b:2, c:3}"))
// console.log(JSON.parse("{'a':1, 'b':2, 'c':3}"))
console.log(JSON.parse('{"a":1, "b":2, "c":3}'))
console.log(JSON.parse('{"a":1, "b": "string", "c": true,"d": {}, "e": [] }')) // observe a escrita de certos valores...

//Existem sites de validação JSON