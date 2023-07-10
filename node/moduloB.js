let a = 2 // visível apenas dentro do modulo
// já na estrutura abaixo, consigo vê-la fora do módulo presente
module.exports = {   // para exportar desse jeito, só com module.exports !!!!!!!
    bomDia: 'bom dia',
    boaNoite(){
        return 'boa noite'
    }
}
