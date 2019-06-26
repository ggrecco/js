const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const name = ctx.update.message.from.first_name
    ctx.reply(`Seja bem vindo, ${name}!`)
})

bot.on('text', ctx => {
    ctx.reply(`Texto '${ctx.update.message.text}' recebido!`)
})

bot.on('sticker', ctx => {
    const sticker = ctx.update.message.sticker
    console.log(sticker)
    ctx.reply(`Estou vendo que você enviou 
    o ${sticker.emoji} do conjunto ${sticker.set_name}`)
})


bot.startPolling()