const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(async ctx => {
    await ctx.reply(`Seja bem vindo, ${ctx.update.message.from.first_name}!🎓`) //chapeu
    await ctx.replyWithHTML(`dastacando mensagem <b>HTML</b>
    <i>de várias</i> <code>formas</code> <pre>possiveis</pre>
    <a href="https://www.google.com">Google</a>`)
    await ctx.replyWithMarkdown('Destacando mensagem *Markdown*'
    + '_de várias_ `formas` ```possíveis```'
    + ' [Google](https://www.google.com)')
    await ctx.replyWithPhoto({source: `${__dirname}/JEDI_ORDER.png`})
})

bot.startPolling()