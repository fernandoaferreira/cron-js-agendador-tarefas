const CronJob = require('cron').CronJob;

const Job = new CronJob('*/5 * * * * *', () => {
    console.log('Testando o Cron tarefas');
}, null, true, 'America/Sao_Paulo');

// Job.start();