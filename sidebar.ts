module.exports = {
  TelegramGitNotifierPackageSidebar: [
    {
      type: 'doc',
      id: 'introduction',
      label: '👋 Introduction',
    },
    {
      type: 'category',
      link: {
        type: 'generated-index',
        description: 'This section will give you a brief overview of the project and its features.',
      },
      label: 'Prologue',
      items: [
        {
          type: 'doc',
          id: 'prologue/releases',
          label: '🚀 Release Notes',
        },
        // {
        //   type: 'doc',
        //   id: 'prologue/overview',
        //   label: '📖 Overview',
        // },
        {
          type: 'doc',
          id: 'prologue/features',
          label: '🎯 Features 🎉',
        },
        {
          type: 'category',
          link: {
            type: 'generated-index',
            description: 'Shows all the available Github/Gitlab events that the bot can handle. You can also find the configuration guide here.',
          },
          label: 'Event Availability',
          items: [
            {
              type: 'doc',
              id: 'prologue/event-availability/github',
              label: '🐙 GitHub Events',
            },
            {
              type: 'doc',
              id: 'prologue/event-availability/gitlab',
              label: '🦊 GitLab Events',
            },
          ],
          collapsed: false,
        },
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
        {
          type: 'doc',
          id: 'getting-started/requirements',
          label: '📋 Requirements',
        },
        {
          type: 'doc',
          id: 'getting-started/installation',
          label: '🔧 Installation',
        },
        {
          type: 'doc',
          id: 'getting-started/configuration',
          label: '🛠 Configuration',
        },
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
        {
          type: 'doc',
          id: 'usage/first_test',
          label: '🤖 First Test',
        },
        {
          type: 'doc',
          id: 'usage/set_menu',
          label: '📃 Set Menu',
        },
        {
          type: 'doc',
          id: 'usage/all_commands',
          label: '🗒 All commands available',
        },
        {
          type: 'doc',
          id: 'usage/set_webhook',
          label: '📥 Set Webhook',
        },
      ],
      collapsed: false,
    },
    {
      type: 'category',
      link: {
        type: 'generated-index',
        description: 'This section will guide you through the process of creating your first bot and setting up the webhook.',
      },
      label: 'Development',
      items: [
        {
          type: 'doc',
          id: 'development/send-notification-flow',
          label: 'Send Notification Flow',
        },
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
        {
          type: 'doc',
          id: 'support/feature-requests',
          label: '🔥 Feature Requests',
        },
        {
          type: 'doc',
          id: 'support/issues',
          label: '🐛 Issues',
        },
      ],
      collapsed: false,
    },
    {
      type: 'category',
      link: {
        type: 'generated-index',
        description: 'Please check this section if you want to contribute to the Telegram Git Notifier project.',
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
