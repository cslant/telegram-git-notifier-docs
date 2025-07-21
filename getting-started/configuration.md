---
title: Configuration laravel Telegram Git Notifier
description: All configuration for laravel telegram git notifier package to get started with it. Set up the bot, get the token, get the chat ID, set the tool URL, set the webhook, set the chat IDs that will receive notifications.
tags: ["Configuration", "Get Started", "Create new bot", "Get chat ID", "Set webhook", "Add webhook", "Set chat IDs", "Receive notifications", "Laravel Telegram Git Notifier Configuration"]
---

<head>
  <meta name="robots" content="index,follow" />
  <meta name="author" content="CSlant" />
  <link rel="canonical" href="/telegram-git-notifier/getting-started/configuration" data-rh="true" />
  
  {/* Open Graph tags */}
  <meta property="og:title" content="Configuration laravel Telegram Git Notifier" />
  <meta property="og:description" content="All configuration for laravel telegram git notifier package to get started with it. Set up the bot, get the token, get the chat ID, set the tool URL, set the..." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://docs.cslant.com/telegram-git-notifier/getting-started/configuration" />
  
  {/* Twitter Card tags */}
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Configuration laravel Telegram Git Notifier" />
  <meta name="twitter:description" content="All configuration for laravel telegram git notifier package to get started with it. Set up the bot, get the token, get the chat ID, set the tool URL, set the..." />
</head>

# 🛠 Configuration

Once installed, please follow the instructions below to configure the package properly.

## Create a New Bot and Get the Token

To create a new bot, you need to talk to [BotFather](https://core.telegram.org/bots#6-botfather) and follow a few simple steps.

1. Open a chat with [BotFather](https://telegram.me/botfather) and send `/newbot` command.
2. Enter a friendly name for your bot. This name will be displayed in contact details and elsewhere.
3. Enter a unique username for your bot. It must end in `bot`. Like this, for example: `TetrisBot` or `tetris_bot`.
4. Copy the HTTP API access token provided by [BotFather](https://telegram.me/botfather) and paste it into your `.env` file.

```dotenv title=".env file"
TELEGRAM_BOT_TOKEN=123456789:ABCDEFGHIJKLMNOPQRSTUVWXYZ
```

## Get Your Chat ID

To get your chat ID, you need to talk to [IDBot](https://telegram.me/myidbot) and follow a few simple steps.

1. Open a chat with [IDBot](https://telegram.me/myidbot) and send `/getid` command.
2. Copy the chat ID provided by [IDBot](https://telegram.me/myidbot) and paste it into your `.env` file.

```dotenv title=".env file"
TELEGRAM_BOT_CHAT_ID=123456789
```

## Set the tool URL for Webhook Requests

You need to set the URL so that the webhook from GitHub or GitLab sends a request when an event occurs.

By default, Laravel already has the **APP_URL** variable. **If you have updated this variable, it is not necessary to update the TGN_APP_URL variable anymore**. 

But if for some reason the **APP_URL** variable can't match the actual address of the website, you need to add actual address to the **TGN_APP_URL** variable.

```dotenv title=".env file"
TGN_APP_URL=http://localhost:8000
```

:::warning[Important]

`http://localhost:8000` is only used for testing purposes. You need to use a real domain name or IP address.

:::

---

<head>
  <meta name="robots" content="index,follow" />
  <meta name="author" content="CSlant" />
</head>

So now, the telegram-git-notifier tool will be available at the following address:

```url
http://localhost:8000/telegram-git-notifier
```

:::tip[Note]

`telegram-git-notifier` is the default route prefix of the tool. 
  - You can change it in the `config/tg-notifier.php` file with the `defaults.route_prefix` key.
  - Or you can change it in the `.env` file with the `TGN_DEFAULT_ROUTE_PREFIX` key.

-> The tool will be available at the following address: `http://localhost:8000/{route_prefix}`.

:::

## Set the webhook

You need to set the webhook to `tool URL` so that the webhook from GitHub or GitLab sends a request when an event occurs. You can choose one of the two following methods.

### Method 1: Using with the command in console

Run the following command to set the webhook.

```bash
php artisan tg-notifier:webhook:set
```

### Method 2: Using with the webhook route

Go to the **`tool URL`/webhook/set** route to set the webhook.

**_Example:_** (Access via your browser)

```url
http://localhost:8000/telegram-git-notifier/webhook/set
```

If you see the following message, it means that the webhook has been sent successfully.

```json title="Response"
{"ok":true,"result":true,"description":"Webhook was set"}
```

## Set the Chat IDs That Will Receive Notifications

You can add the owner bot ID, group ID, supper group with multiple topics ID, ...

:::tip[Note]

- The `TELEGRAM_NOTIFY_CHAT_IDS` variable is optional.
- Please use semicolon `;` to separate chat IDs.
- And use a colon `:` to separate chat ID and topic(Thread ID).
- And use the comma `,` if you want to add multiple topics(Thread IDs).
- The environment variable is expected to be in the format:
  - `chat_id1;chat_id2:thread_id2;chat_id3:thread_id3_1,thread_id3_2;...`

:::

Example:

```dotenv title=".env file"
TELEGRAM_NOTIFY_CHAT_IDS="-978339113;-1001933979183:2,13;6872320129"
```

---

<head>
  <meta name="robots" content="index,follow" />
  <meta name="author" content="CSlant" />
</head>

## Conclusion

**So, the .env file will require to have the following contents:**

```dotenv title=".env file"
TELEGRAM_BOT_TOKEN=123456789:ABCDEFGHIJKLMNOPQRSTUVWXYZ
TELEGRAM_BOT_CHAT_ID=123456789
TGN_APP_URL=http://localhost:8000
// highlight-next-line
TELEGRAM_NOTIFY_CHAT_IDS="-978339113;-1001933979183:2,13;6872320129"
```
