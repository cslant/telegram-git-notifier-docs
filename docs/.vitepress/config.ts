import { type DefaultTheme } from 'vitepress'

export default ({
    lang: 'en-US',
    title: 'Telegram Git Notifier',
    description: 'Telegram Git Notifier to send notification from Gitlab and Github events to Telegram',

    lastUpdated: true,
    cleanUrls: true,

    themeConfig: {

        socialLinks: [
            {icon: 'github', link: 'https://github.com/lbiltech/telegram-git-notifier'},
            {icon: 'github', link: 'https://github.com/lbiltech/telegram-git-notifier-app'},
            {icon: 'github', link: 'https://github.com/lbiltech/laravel-telegram-git-notifier'},
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present LbilTech'
        },
    }
})
