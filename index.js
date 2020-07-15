const Telegraf = require('telegraf');
const Schedule = require('node-schedule');
const axios = require("axios");


const bot = new Telegraf(process.env.TELEGRAF-KEY);

bot.start((ctx) => {
    //Exploring ctx object:
    //console.log(ctx.from)
    //console.log(ctx.chat)
    //console.log(ctx.message)
    //console.log(ctx.updateSubTypes)
    ctx.reply('Welcome ' + ctx.from.first_name + ' ' +  ctx.from.last_name);

    axios.get('https://rest.coinapi.io/v1/exchangerate/ETH/USD', {
        headers:{
            'X-CoinAPI-Key': process.env.COINAPI-KEY,
            'Accept': 'application/json'
        }
    })
        .then(response => {
            //console.log(response.data);
            Schedule.scheduleJob('*/30 * * * *', function(){
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

bot.command(['opsididitagain', 'Opsididitagain'], (ctx) => {
    ctx.reply('Do you wanna touch me?');
});

bot.command(["Imaslaveforyou", "Imaslaveforyou"], (ctx) => {
    ctx.reply('tell me more, what do you allow me to do you?');
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


