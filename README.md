# Telegram Assistant Bot

Questo progetto è un bot Telegram semplice che risponde solo a messaggi provenienti da un chat ID specifico. Il bot utilizza la libreria `node-telegram-bot-api` per interagire con l'API di Telegram.

## Funzionalità

- Risponde con un messaggio di conferma quando riceve un messaggio da un utente autorizzato.
- Utilizza variabili d'ambiente per il token del bot e l'ID chat consentito.

## Installazione

1. Clona il repository:
   ```
   git clone https://github.com/colangelofx/telegram-assistant1.git
   cd telegram-assistant1
   ```

2. Installa le dipendenze:
   ```
   npm install
   ```

3. Configura le variabili d'ambiente:
   - `TELEGRAM_TOKEN`: Il token ottenuto da BotFather su Telegram.
   - `ALLOWED_CHAT_ID`: Il tuo ID chat personale su Telegram.

4. Avvia il bot:
   ```
   node index.js
   ```

## Deploy su Render

1. Crea un account su [Render](https://render.com).
2. Connetti il tuo repository GitHub.
3. Seleziona Node.js come runtime.
4. Imposta i comandi di build e start:
   - Build Command: `npm install`
   - Start Command: `node index.js`
5. Aggiungi le variabili d'ambiente nel pannello di controllo di Render:
   - `TELEGRAM_TOKEN`
   - `ALLOWED_CHAT_ID`

## Come ottenere il token del bot

1. Parla con [@BotFather](https://t.me/botfather) su Telegram.
2. Usa il comando `/newbot` per creare un nuovo bot.
3. Segui le istruzioni per ottenere il token.

## Come ottenere il tuo ID chat

1. Parla con [@userinfobot](https://t.me/userinfobot) su Telegram.
2. Invia un messaggio per ricevere il tuo ID chat.