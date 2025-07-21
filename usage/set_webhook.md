---
title: Add repository webhook Telegram Git Notifier
description: Add webhook for your GitHub and GitLab repository to receive notifications. Add webhook for your GitHub and GitLab repository to receive notifications.
tags: ['Notifier', 'Add webhook', 'Add webhook for repository', 'Add webhook for GitHub', 'Add webhook for GitLab', 'Usage', 'Telegram Git Notifier Usage', 'Telegram bot', 'Support']
---

<head>
  <meta name="robots" content="index,follow" />
  <meta name="author" content="CSlant" />
  <link rel="canonical" data-rh="true" href="/telegram-git-notifier/usage/set_webhook" />
  
  {/* Open Graph tags */}
  <meta property="og:title" content="Add repository webhook Telegram Git Notifier" />
  <meta property="og:description" content="Add webhook for your GitHub and GitLab repository to receive notifications. Add webhook for your GitHub and GitLab repository to receive notifications." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://docs.cslant.com/telegram-git-notifier/usage/set_webhook" />
  
  {/* Twitter Card tags */}
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Add repository webhook Telegram Git Notifier" />
  <meta name="twitter:description" content="Add webhook for your GitHub and GitLab repository to receive notifications. Add webhook for your GitHub and GitLab repository to receive notifications." />
</head>

# 📥 Add repository webhook

You will need to add the Webhook for your GitHub and GitLab repository to receive notifications.

## For GitHub repository

Add webhook on your GitHub repository to receive notifications, please follow the steps below.

1. Go to your GitHub repository settings page.
2. Go to the `Webhooks` section.
3. Click on `Add webhook`.
4. Set `Payload URL` to `<APP_URL>`.
5. Set `Content type` to `application/x-www-form-urlencoded`.
6. Which events would you like to trigger this webhook? Select `Let me select individual events.`.
7. Click on the `Active` checkbox and Add webhook button.
8. Done. You will receive a notification when your repository has a new event.

Here is the first notification you will receive:

[//]: # (![set_github_webhook]&#40;../assets/public/images/set_github_webhook.png&#41;)

## For GitLab repository

Add webhook on your GitLab repository to receive notifications, please follow the steps below.

1. Go to your repository settings.
2. Go to the `Webhooks` section.
3. Click on `Add new webhook`.
4. Set `URL` to `<APP_URL>`.
5. Choose any `Trigger` you want.
6. Click on the `Enable SSL verification` checkbox and Add webhook button.

---

<head>
  <meta name="robots" content="index,follow" />
  <meta name="author" content="CSlant" />
</head>

:::tip[Note]
You can set up this webhook for different repositories. Please similarly set up the webhook for each repository.
:::

Then every time one of those repositories appears an event, this telegram bot will immediately send you a notification.
