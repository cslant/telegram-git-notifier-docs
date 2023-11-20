import {DefaultTheme} from 'vitepress'

export function sidebarTelegramGitNotifier(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '👋 Introduction',
            collapsed: false,
            items: [
                {text: 'What is Telegram Git Notifier?', link: 'introduction'},
            ]
        },
        {
            text: 'Installation',
            collapsed: false,
            items: [
                {text: 'Requirements', link: 'requirements'},
                {text: 'Installation', link: 'installation'},
                {text: 'Configuration', link: 'configuration'},
            ]
        },
        {
            text: 'Support',
            collapsed: false,
            items: [
                {text: 'Issues', link: 'support-issues'},
                {text: 'Feature Requests', link: 'feature-requests'},
            ]
        }
    ]
}
