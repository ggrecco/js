//bot responde palavras que o usuáro enviar

const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)
const moment = require('moment')


bot.hears(/burger/i, ctx => ctx.reply('Sim, porfavor'))
bot.hears([/pqp/i, /fdp/i, /tnc/i], ctx => ctx.reply(`Coisa Feia ${ctx.update.message.from.first_name}!`))

bot.startPolling()