module.exports = {
  telegramGitNotifierSidebar: [
    'introduction',
    {
      type: 'category',
      label: 'Prologue',
      items: [
        'prologue/releases',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/requirements',
        'getting-started/installation',
        'getting-started/configuration',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Usage',
      items: [
        'usage/index',
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
