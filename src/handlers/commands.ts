import { Bot, Context } from "grammy";

export function processCommands(bot: Bot): void{
    console.log('processing commands...')
    bot.command('start', async (ctx: Context) => {
        await ctx.reply('Hello brother!');
    })
    console.log('processing commands... DONE')
}