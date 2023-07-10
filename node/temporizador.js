const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 10 * * 3', function () {// */ --> de 5 em 5
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function(){ // temporizador do prórpio JS
    tarefa1.cancel()
    console.log('Cancelando Tarefa1!')
}, 20000)

// setImmediate
// setInterval


const regra = new schedule.RecurrenceRule()

regra.dayOfWeek = [new schedule.Range(1,5)] // dias úteis da semana

regra.hour = 10 // horário 10 horas

regra.second = 30 // no segundo 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa2!', new Date().getSeconds())
})