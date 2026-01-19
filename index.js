import TelegramBot from "node-telegram-bot-api";

const token = process.env.TELEGRAM_TOKEN;
const ALLOWED_CHAT_ID = process.env.ALLOWED_CHAT_ID;

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  if (chatId.toString() !== ALLOWED_CHAT_ID) return;

  bot.sendMessage(chatId, "Registrato. Sto aggiornando i suoi archivi, Signore.");
});