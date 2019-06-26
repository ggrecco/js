const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const from = ctx.update.message.from
    if (from.id == ' '){
        ctx.reply(`Bem vindo mestre ${from.first_name}!`)
    } else {
        ctx.reply(`Só falo com meu mestre!`)
    }    
})

bot.startPolling()