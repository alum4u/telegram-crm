import { Bot } from "grammy";
import { processCommands } from "../handlers/commands";
import { processEvents } from "../handlers/events";
export class TelegramProvider{
    private readonly _token: string;
    private readonly _bot: Bot;
    constructor( token: string ){
        this._token = token;
        this._bot = new Bot( this._token );
    }
    public start(){
        this._initHandlers();
        this._bot.start();
        console.log('bot started...');
    }
    private _initHandlers(){
        processCommands(this._bot);
        processEvents(this._bot);
    }

}