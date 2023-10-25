import {DefaultTheme} from "vitepress";

export function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: 'Guide',
            link: '/guide/index',
            activeMatch: '^/guide/'
        },
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

export function sidebarGuide(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Introduction',
            collapsed: false,
            items: [
                {text: 'What is Telegram Git Notifier?', link: 'index'},
            ]
        },
        {
            text: 'Installation',
            collapsed: false,
            items: [
                {text: 'Requirements', link: 'requirements'},
                {text: 'Installation', link: 'installation'},
                {text: 'Configuration', link: 'configuration'},
                {text: 'Usage', link: 'usage'},
            ]
        },
        {
            text: 'Support',
            collapsed: false,
            items: [
                {text: 'Issues', link: 'issues'},
                {text: 'Feature Requests', link: 'feature-requests'},
            ]
        }
    ]
}

export function sidebarApp(): DefaultTheme.SidebarItem[] {
    return [
        {
        }
    ]
}

export function sidebarPackage(): DefaultTheme.SidebarItem[] {
    return [
        {

        },
    ]
}
