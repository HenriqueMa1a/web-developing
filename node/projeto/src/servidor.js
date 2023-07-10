const porta = 3003 // porta é um processo dentro do pc que direciona a comunicação por redes

const express = require('express')
const app = express()
const bodyParser= require('body-parser')
const bancoDeDados= require('./bancoDeDados')
// app.get('/produtos', (req, res, next)=>{ // get é um dos métodos de requisição. Pode ser Post ...
//     res.send({nome: 'notebook', preco: 123.45}) // converte para JSON
// })
// app.use((req, res, next)=>{ chamar a função middleware sem url será atendido para todas as requisões com use
//     res.send({nome: 'notebook', preco: 123.45})
// })

// app.listen(porta, ()=>{
//     console.log(`servidor escutando na porta ${porta}.`)
// })

app.use(bodyParser.urlencoded({extended:true}))


app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProdutos(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) => { //setar no mesmo id
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => { //setar no mesmo id
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
})

app.listen(porta, ()=>{
    console.log(`servidor escutando na porta ${porta}.`)
})