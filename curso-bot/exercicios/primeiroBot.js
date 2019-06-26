//codigo de boas vindas para o usuário
const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start((ctx, next)=>{
    const from = ctx.update.message.from
    //console.log(from)
    ctx.reply(`Seja Bem Vindo, ${from.first_name}!`)
    next()
})


bot.start(ctx =>{
    ctx.reply(`Aqui temos um teste de bot!`)
})

bot.on('text', async (ctx, next) =>{
    await ctx.reply('Mid 1')
    next()
})

bot.on('text', async (ctx, next) =>{
    await ctx.reply('Mid 2')
    next()
})

bot.startPolling()