# 🛠 Configuration

## Create a New Bot

To create a new bot, you need to talk to [BotFather](https://core.telegram.org/bots#6-botfather) and follow a few simple steps.

1. Open a chat with [BotFather](https://telegram.me/botfather) and send `/newbot` command.
2. Enter a friendly name for your bot. This name will be displayed in contact details and elsewhere.
3. Enter a unique username for your bot. It must end in `bot`. Like this, for example: `TetrisBot` or `tetris_bot`.
4. Copy the HTTP API access token provided by [BotFather](https://telegram.me/botfather) and paste it into your `.env` file.

```dotenv
TELEGRAM_BOT_TOKEN=123456789:ABCDEFGHIJKLMNOPQRSTUVWXYZ
```

## Get Your Chat ID

To get your chat ID, you need to talk to [IDBot](https://telegram.me/myidbot) and follow a few simple steps.

1. Open a chat with [IDBot](https://telegram.me/myidbot) and send `/getid` command.
2. Copy the chat ID provided by [IDBot](https://telegram.me/myidbot) and paste it into your `.env` file.

```dotenv
TELEGRAM_BOT_CHAT_ID=123456789
```

## Set the URL for Webhook Requests

You need to set the URL so that the webhook from GitHub or GitLab sends a request when an event occurs.

```dotenv
TGN_APP_URL=http://localhost/telegram-git-notifier
```

> **_Note:_**
> - `http://localhost` is only used for testing purposes. You need to use a real domain name or IP address.
> - `telegram-git-notifier` is the default route name. 
>   - You can change it in the `config/tg-notifier.php` file with the `defaults.route_prefix` key.
>   - Or you can change it in the `.env` file with the `TGN_DEFAULT_ROUTE_PREFIX` key.

## Set the webhook

You need to set the webhook to `TGN_APP_URL` so that the webhook from GitHub or GitLab sends a request when an event occurs.

[//]: # (```bash)

[//]: # (php artisan tg-notifier:webhook:set)

[//]: # (```)

Go to the **`TGN_APP_URL`/webhook/set** route to set the webhook.

Example: (Access via your browser)

```url
http://localhost/telegram-git-notifier/webhook/set
```

If you see the following message, it means that the webhook has been sent successfully.

```json
{"ok":true,"result":true,"description":"Webhook was set"}
```

## Set the Chat IDs That Will Receive Notifications

You can add the owner bot ID, group ID, supper group with multiple topics ID, ...

> **_Note:_**
>
> - Please use semicolon ";" to separate chat IDs
    >   - And use a colon ":" to separate chat ID and topic(Thread ID)
>   - And use the comma "," if you want to add multiple topics(Thread IDs)
> - The environment variable is expected to be in the format:
    >   - `chat_id1;chat_id2:thread_id2;chat_id3:thread_id3_1,thread_id3_2;...`

Example:

```dotenv
TELEGRAM_NOTIFY_CHAT_IDS="-978339113;-1001933979183:2,13;6872320129"
```

---

So, the .env file will require to have the following contents:

```dotenv
TELEGRAM_BOT_TOKEN=123456789:ABCDEFGHIJKLMNOPQRSTUVWXYZ
TELEGRAM_BOT_CHAT_ID=123456789
TGN_APP_URL=http://localhost/telegram-git-notifier
TELEGRAM_NOTIFY_CHAT_IDS="-978339113;-1001933979183:2,13;6872320129"
```
