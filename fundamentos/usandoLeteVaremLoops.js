const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}
//há um armazenamento dentro da memória do escopo acima que permite trazer os valores certos para fora 
funcs[2]()
funcs[8]()


const func = []

for (var i = 0; i < 10; i++) {
    func.push(function () {
        console.log(i)
    })
}
//var = 10
func[2]()
func[8]()
