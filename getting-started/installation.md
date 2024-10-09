---
title: Installation | Laravel Telegram Git Notifier
description: Installation instructions for laravel telegram git notifier package. Install the package via composer, publish the config jsons, publish the config file, fix permissions for the config jsons.
keywords: ["laravel telegram git notifier", "installation", "install laravel telegram git notifier", 'get started', 'laravel telegram git notifier get started', 'composer', 'publish config', 'fix permissions']
tags: ["Installation", "Get Started", "Composer", "Publish Config", "Fix Permissions", "Laravel Telegram Git Notifier", "Laravel Telegram Git Notifier Installation"]
---

<head>
  <meta name="robots" content="index,follow" />
  <meta name="author" content="CSlant" />
  <link rel="canonical" href="/telegram-git-notifier/getting-started/installation" data-rh="true" />
</head>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '@site/repos/telegram-git-notifier-docs/styles/commands.module.scss';

# 🔧 Installation

Please read carefully the instructions below and follow them step by step.

## Install the package

You can **install the package via composer**:

```bash
composer require cslant/laravel-telegram-git-notifier
```

The package will automatically register its service provider.

## Publish the config jsons (required)

:::danger[required]

**_This is a required step. Please don't skip it._**

:::

There are important **JSON files** in the package. They will take care of checking event conditions and your configurations.

You need to publish them with:

```shell
php artisan vendor:publish --provider="CSlant\LaravelTelegramGitNotifier\Providers\TelegramGitNotifierServiceProvider" --tag="config_jsons"
```

## Publish the config file (optional)

:::info[optional]

This is an optional step. If you don't publish the config file, the package will use the default configuration.

:::

The config file contains the default configuration for the package. If you want to change the default configuration, you
can publish the config file with:

```bash
php artisan vendor:publish --provider="CSlant\LaravelTelegramGitNotifier\Providers\TelegramGitNotifierServiceProvider" --tag="config"
```

These are the contents of the default config file that will be published:

```php title="config/telegram-git-notifier.php"
$configFileStorageFolder = storage_path(
    env('TGN_CONFIG_FILE_STORAGE_FOLDER', '/app/vendor/tg-notifier/jsons')
);
$routePrefix = env('TGN_DEFAULT_ROUTE_PREFIX', 'telegram-git-notifier');

return [
    'defaults' => [
        'paths' => [
            'views' => env('TGN_DEFAULT_PATH_VIEW', base_path('resources/views/vendor/tg-notifier')),
        ],

        /* Set route prefix for telegram git notifier app */
        'route_prefix' => $routePrefix,
    ],

    'app' => [
        'name' => env('TGN_APP_NAME', 'Laravel Telegram Git Notifier'),
        'timezone' => env('TIMEZONE', 'Asia/Ho_Chi_Minh'),

        /* Required for the bot to work properly */
        'url' => env('TGN_APP_URL', env('APP_URL', 'http://localhost')).'/'.$routePrefix,
    ],

    'bot' => [
        'token' => env('TELEGRAM_BOT_TOKEN', ''),
        'chat_id' => env('TELEGRAM_BOT_CHAT_ID', ''),

        /**
         * Set the chat IDs that will receive notifications
         * You can add the owner bot ID, group ID, ...
         * -------------------------------------------------------
         * Note:
         * Please use semicolon ";" to separate chat ids
         * And use a colon ":" to separate chat ID and thread ID
         * And use comma "," if you want to add multiple thread IDs
         * -------------------------------------------------------
         * The environment variable is expected to be in the format:
         * "chat_id1;chat_id2:thread_id2;chat_id3:thread_id3_1,thread_id3_2;...".
         */
        'notify_chat_ids' => env('TELEGRAM_NOTIFY_CHAT_IDS', ''),
    ],

    'author' => [
        'discussion' => env('TGN_AUTHOR_DISCUSSION', 'https://github.com/cslant/laravel-telegram-git-notifier/discussions'),
        'source_code' => env('TGN_AUTHOR_SOURCE_CODE', 'https://github.com/cslant/laravel-telegram-git-notifier'),
    ],

    /* Set the path to the data file */
    'data_file' => [
        'storage_folder' => $configFileStorageFolder,
        'setting' => env('TGN_PATH_SETTING', $configFileStorageFolder.'/tgn-settings.json'),

        'platform' => [
            'gitlab' => env('TGN_PATH_PLATFORM_GITLAB', $configFileStorageFolder.'/gitlab-events.json'),
            'github' => env('TGN_PATH_PLATFORM_GITHUB', $configFileStorageFolder.'/github-events.json'),
        ],
    ],

    /* Set the path to the view file */
    'view' => [
        'ignore-message' => env('IGNORE_MESSAGE', 'ignore-message'),
        'namespace' => env('TGN_VIEW_NAMESPACE', 'tg-notifier'),
        'default' => env('TGN_VIEW_DEFAULT', base_path('resources/views/vendor/tg-notifier')),
        'event' => [
            'default' => env('TGN_VIEW_EVENT_DEFAULT', 'default'),
        ],

        'globals' => [
            'access_denied' => env('TGN_VIEW_GLOBALS_ACCESS_DENIED', 'globals.access_denied'),
        ],

        'tools' => [
            'settings' => env('TGN_VIEW_TOOL_SETTING', 'tools.settings'),
            'custom_event_action' => env('TGN_VIEW_TOOL_CUSTOM_EVENT_ACTION', 'tools.custom_event_action'),
            'custom_event' => env('TGN_VIEW_TOOL_CUSTOM_EVENT', 'tools.custom_event'),
            'set_menu_cmd' => env('TGN_VIEW_TOOL_SET_MENU_COMMAND', 'tools.set_menu_cmd'),
        ],
    ],
];
```

## Fix permissions for the config jsons

:::info[for windows]

If you are using Windows as a development environment, you don't need to do this step.

:::

If you are using Linux, you may get an error of not being able to access or change the configuration (**content in JSON
config files**).

So to ensure the above error does not occur, you need to change the owner of the configuration files to **the web server
user and group** (e.g. www-data).

You can do it with:

```bash
sudo php artisan config-json:change-owner {user} {group}
```

:::tip[info]

- `{user}`: The first `www-data` is the user
- `{group}`: The second `www-data` is the group. (You can also use only the first `www-data` to represent both the user
  and the group)
- Ensure run the command in the project root directory.

:::

:::info[example]

<Tabs className="unique-tabs" queryString="config-json-change-owner" defaultValue="no params">
  <TabItem value="no params" label="No params" attributes={{className: styles.green}}>
    If you don't pass any parameters, the command will detect the web server user and group and change the owner of the configuration files to them.

    ```bash
    sudo php artisan config-json:change-owner
    ```

    This is the fastest way to change the owner of the configuration files without having to know the user and group.

  </TabItem>

<TabItem value="full params" label="Full params" attributes={{className: styles.red}}>
If you want to change the owner of the configuration files to a specific user and group, you can pass the user and group
as parameters.

    ```bash
    sudo php artisan config-json:change-owner www-data www-data
    ```

    On this example, the user and group are both `www-data`.

  </TabItem>

<TabItem value="orange" label="Mixed" attributes={{className: styles.orange}}>
You can also use only the first `www-data` to represent both the user and the group.

    ```bash
    sudo php artisan config-json:change-owner www-data
    ```

  </TabItem>
</Tabs>

:::

