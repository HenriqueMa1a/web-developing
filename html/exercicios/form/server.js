const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true})) // se eu comentar essa linha, não vai acontecer o parse e portanto, retornará undefined na req

app.post('/usuarios', (req,resp)=>{
    console.log(req.body)
    resp.send('<h1> Parabéns. Usuário Incluído </h1>')
})
app.post('/usuarios/:id', (req,resp)=>{
    console.log(req.param.id)
    console.log(req.body)
    resp.send('<h1> Parabéns. Usuário alterado </h1>')
})


app.listen(3003)