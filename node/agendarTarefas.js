const schedule = require('node-schedule')
// string de configuação: segundo, minuto, hora, diaDoMes, mês, diaDaSemana.

// */5 é para executar de 5 em 5 segundos, se for apenas 5 ele vai executar sempre no segundo 5 de cada minuto
const tarefa1 = schedule.scheduleJob('*/5 * 12 3 5 *', function (){
    console.log('Tarefa1 executando! ', new Date().getSeconds())
})

// posso cancelar a tarefa usando o setTimeOut
setTimeout(() => {
    tarefa1.cancel()
}, 20000);

// criar minha própria regra
/*
0 - domingo
1 - segunda
2 - terça
3 - quarta
4 - quinta
5 - sexta
6 - sábado
*/
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // segunda a sexta
regra.hour = 12
regra.second = 55

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Tarefa2 executando! ', new Date().getSeconds())
})