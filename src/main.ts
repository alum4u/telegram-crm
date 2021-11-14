import { TelegramProvider } from './core/telegram-provider';
import * as dotenv from "dotenv";
import { DBProvider } from './core/db-provider';
dotenv.config();
new DBProvider(process.env.PG_URL).testConnection().then();
new TelegramProvider(process.env.TOKEN).start();



