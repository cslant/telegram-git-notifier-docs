import {type DefaultTheme} from 'vitepress'

export default ({
    lang: 'en-US',
    title: 'Telegram Git Notifier',
    description: 'Telegram Git Notifier to send notification from Gitlab and Github events to Telegram',

    lastUpdated: true,
    cleanUrls: true,

    /* prettier-ignore */
    head: [
        ['meta', {name: 'theme-color', content: '#5f67ee'}],
        ['meta', {name: 'og:type', content: 'website'}],
        ['meta', {name: 'og:locale', content: 'en'}],
        ['meta', {name: 'og:site_name', content: 'Telegram Git Notifier'}],
        ['meta', {name: 'og:image', content: 'https://user-images.githubusercontent.com/35853002/277427295-193e523b-4654-4f61-aaf4-5b6d106b67e3.png'}],
    ],

    themeConfig: {

        nav: nav(),

        editLink: {
            pattern: 'https://github.com/lbiltech/telegram-git-notifier-docs/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },

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

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: 'Project',
            link: '/app/index',
            activeMatch: '/app/'
        },
        {
            text: 'Package',
            link: '/package/index',
            activeMatch: '/package/'
        },
    ]
}
