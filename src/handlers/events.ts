import { Bot, Context } from "grammy";
import mainKeyboard from "../helpers/main-keyboard";
export function processEvents(bot: Bot): void {
    console.log('processing events...')
    bot.on('message', async (ctx: Context) => {
        await ctx.reply('Привет',{
            reply_markup:mainKeyboard
        })
    })
    console.log('processing events... DONE')
}