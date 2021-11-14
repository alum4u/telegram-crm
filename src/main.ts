import { TelegramProvider } from './core/telegram-provider';
import * as dotenv from "dotenv";
dotenv.config();
new TelegramProvider(process.env.TOKEN).start();


