const Telegraf = require('telegraf');
const Schedule = require('node-schedule');
const axios = require("axios");
var dayjs = require('dayjs')


const bot = new Telegraf(process.env.TELEGRAF_KEY);

bot.start((ctx) => {

    ctx.reply('Welcome ' + ctx.from.first_name);

    Schedule.scheduleJob('*/30 * * * *', function(){
        axios.get('https://rest.coinapi.io/v1/exchangerate/ETH/USD', {
            headers:{
                'X-CoinAPI-Key': process.env.COINAPI_KEY,
                'Accept': 'application/json'
            }
        })
            .then(response => {
                var dateFormated = dayjs(response.data.time).format('MMMM D, YYYY h:mm A');
                ctx.reply(`The Etherum value at ${dateFormated} is: ${response.data.rate}`);
            });
    });
    
});

bot.launch();