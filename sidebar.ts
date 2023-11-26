import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const TelegramGitNotifierSidebar: SidebarsConfig = {
  telegramGitNotifierSidebar: [
    'introduction',
    'index',
    {
      type: 'category',
      label: 'Installation',
      items: [
        'installation/requirements',
        'installation/installation',
        'installation/configuration',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Support',
      items: [
        'support/issues',
        'support/feature-requests',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'GitHub Source',
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'Core',
          href: 'https://github.com/cslant/telegram-git-notifier',
        },
        {
          type: 'link',
          label: 'Laravel Package',
          href: 'https://github.com/cslant/laravel-telegram-git-notifier',
        },
        {
          type: 'link',
          label: 'PHP Application',
          href: 'https://github.com/cslant/telegram-git-notifier-app',
        }
      ],
    },
  ],
};

export default TelegramGitNotifierSidebar;
