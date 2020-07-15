const Telegraf = require('telegraf');
const Schedule = require('node-schedule');
const axios = require("axios");


const bot = new Telegraf('1259504840:AAF9j9GskoKOr1K_mvpHEmJjXMN-QYjOqA0');

bot.start((ctx) => {
    //Exploring ctx object:
    //console.log(ctx.from)
    //console.log(ctx.chat)
    //console.log(ctx.message)
    //console.log(ctx.updateSubTypes)
    ctx.reply('Welcome ' + ctx.from.first_name + ' ' +  ctx.from.last_name);

    axios.get('https://rest.coinapi.io/v1/exchangerate/ETH/USD', {
        headers:{
            'X-CoinAPI-Key': '45C65539-2E96-47D3-BD26-90AE6313EEE8',
            'Accept': 'application/json'
        }
    })
        .then(response => {
            //console.log(response.data);
            Schedule.scheduleJob('0 */1 * * *', function(){
                ctx.reply(response.data.rate);
            });
        });
    
});

bot.help((ctx) => {
    ctx.reply('Help');
});

bot.settings((ctx) => {
    ctx.reply('Aca los settings');
});

// Create custom command
bot.command(['mycommand', 'Mycommand', 'MyCommand'], (ctx) => {
    ctx.reply('My Custom Command!!!');
});

// Hear for some text
bot.hears('computer', (ctx) => {
    ctx.reply('Hey Im selling a computer');
});

// hear when user typing
/*
bot.on('text', ctx => {
    ctx.reply('You are typing text');
});
*/

bot.on('sticker', ctx => {
    ctx.reply('Oh! you like the stickers');
});




bot.launch();


