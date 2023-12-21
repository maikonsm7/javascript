//segundo, minuto, hora, dia, mes, dia-semana(0 - domingo, 1 - segunda...)
const schedule = require('node-schedule')
// executa a tarefa 1 de 2 em 2 segundos, a qualquer minuto, as 14h, a qualquer dia e mês, na quinta-feira
const tarefa1 = schedule.scheduleJob('*/2 * 15 * * 4', () => console.log('executando tarfa 1', new Date().getSeconds()))
// cancelando a tafera depois de 10 segundos
setTimeout(()=>{
    tarefa1.cancel()
    console.log('cancelando a tarefa 1')
}, 10000)

// criando as regras
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // executar de segunda a sexta
regra.hour = 15
regra.second = 30 // sempre executar no segundo 30

const tarefa2 = schedule.scheduleJob(regra, () => console.log('executando tarfa 2', new Date().getSeconds()))
setTimeout(()=>{
    tarefa2.cancel()
    console.log('cancelando a tarefa 2')
}, 10000)