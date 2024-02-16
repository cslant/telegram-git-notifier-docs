# 🐙 GitHub Events

Here are the GitHub events that the tool can notify you about.

All events and actions listed below are taken from the [GitHub Webhooks](https://docs.github.com/en/webhooks/webhook-events-and-payloads) documentation.

| Event                                                                                                               | Action (If available)                                                                                                               | Description                                                    |
|---------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| :white_check_mark: **[Push](https://docs.github.com/en/webhooks/webhook-events-and-payloads#push)**                 |                                                                                                                                     | Occurs when you push a commit to the repository.               |
| :white_check_mark: **[Pull Request](https://docs.github.com/en/webhooks/webhook-events-and-payloads#pull_request)** | :arrow_heading_down:                                                                                                                | Occurs when a pull request is opened, closed, synchronized,... |
|                                                                                                                     | :white_check_mark: [Assigned](https://docs.github.com/en/webhooks/webhook-events-and-payloads?actionType=assigned#pull_request)     | Occurs when a pull request is assigned.                        |
|                                                                                                                     | :white_check_mark: [Unassigned](https://docs.github.com/en/webhooks/webhook-events-and-payloads?actionType=unassigned#pull_request) | Occurs when a pull request is unassigned.                      |
|                                                                                                                     | :white_check_mark: [Closed](https://docs.github.com/en/webhooks/webhook-events-and-payloads?actionType=closed#pull_request)         | Occurs when a pull request is closed.                          |
|                                                                                                                     | :white_check_mark: [Opened](https://docs.github.com/en/webhooks/webhook-events-and-payloads?actionType=opened#pull_request)         | Occurs when a pull request is opened.                          |
|                                                                                                                     | :white_check_mark: [Reopened](https://docs.github.com/en/webhooks/webhook-events-and-payloads?actionType=reopened#pull_request)     | Occurs when a pull request is reopened.                        |
| :white_check_mark: **[Issues](https://docs.github.com/en/webhooks/webhook-events-and-payloads#issues)**             | :arrow_heading_down:                                                                                                                | Occurs when an issue is opened, closed, reopened,...etc.       |
|                                                                                                                     | :white_check_mark: [Opened](https://docs.github.com/en/webhooks/webhook-events-and-payloads?actionType=opened#issues)               | Occurs when an issue is opened.                                |
|                                                                                                                     | :white_check_mark: [Closed](https://docs.github.com/en/webhooks/webhook-events-and-payloads?actionType=closed#issues)               | Occurs when an issue is closed.                                |
|                                                                                                                     | :white_check_mark: [Reopened](https://docs.github.com/en/webhooks/webhook-events-and-payloads?actionType=reopened#issues)           | Occurs when an issue is reopened.                              |
|                                                                                                                     | :white_check_mark: [Edited](https://docs.github.com/en/webhooks/webhook-events-and-payloads?actionType=edited#issues)               | Occurs when an issue is edited.                                | 
|                                                                                                                     | :white_check_mark: [Deleted](https://docs.github.com/en/webhooks/webhook-events-and-payloads?actionType=deleted#issues)             | Occurs when an issue is deleted.                               |
| ...                                                                                                                 | ...                                                                                                                                 | ...                                                            |

:::tip[Status Legend]

- :white_check_mark: This event is available to be notified.
- :white_square_button: This event doesn't have blade view files to notify yet.

:::

The tool can notify you about the events and actions listed above. If you want to receive notifications about other events, please open an issue on the [GitHub repository](https://github.com/cslant/laravel-telegram-git-notifier).
