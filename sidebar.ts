module.exports = {
  telegramGitNotifierSidebar: [
    'introduction',
    {
      type: 'category',
      link: {
        type: 'generated-index',
        description: 'This section will give you a brief overview of the project and its features.',
      },
      label: 'Prologue',
      items: [
        'prologue/releases',
        'prologue/features',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      link: {
        type: 'generated-index',
        description: 'Let\'s get started create your first bot to receive git notifications from your repositories on Telegram. ' +
          'Please make sure you have all the requirements before you start. ' +
          'You can also find the installation guide and the configuration guide here.',
      },
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
      link: {
        type: 'generated-index',
        description: 'This section will guide you through the process of creating your first bot and setting up the webhook.',
      },
      label: 'Usage',
      items: [
        'usage/first_test',
        'usage/set_menu',
        'usage/all_commands',
        'usage/set_webhook',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      link: {
        type: 'generated-index',
        description: 'Please check this section if you have any problems with the bot or you want to request a new feature.',
      },
      label: 'Support',
      items: [
        'support/issues',
        'support/feature-requests',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      link: {
        type: 'generated-index',
        description: 'Please check this section if you want to contribute to the project.',
      },
      label: 'GitHub Source',
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'Core',
          description: 'The core of the project.',
          href: 'https://github.com/cslant/telegram-git-notifier',
        },
        {
          type: 'link',
          label: 'Laravel Package',
          description: 'This is the recommended way to use the bot.',
          href: 'https://github.com/cslant/laravel-telegram-git-notifier',
        },
        {
          type: 'link',
          label: 'PHP Application',
          description: 'You can use this if you don\'t want to use Laravel.',
          href: 'https://github.com/cslant/telegram-git-notifier-app',
        }
      ],
    },
  ],
};
