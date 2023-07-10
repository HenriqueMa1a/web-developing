const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios') // faz requisições http (requisições para obter informações de algo que está remoto)
axios.get(url).then(response =>{
    const funcionarios = response.data
    // console.log(funcionarios)

    const natureza = pessoa => pessoa.genero === 'F' && pessoa.pais === 'China'
    const menorSalario = (funcionario, funcionarioAtual) =>{
        return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
    }
    const func = funcionarios.filter(natureza).reduce(menorSalario)
    console.log(func)
})

