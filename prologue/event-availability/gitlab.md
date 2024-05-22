# 🦊 GitLab Events

Here are the GitLab events that the tool can notify you about.

All events and actions listed below are taken from the [GitLab Webhooks](https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html) documentation.

| Event                                                                                                                                  | Action (If available)         | Description                                                           |
|----------------------------------------------------------------------------------------------------------------------------------------|-------------------------------|-----------------------------------------------------------------------|
| :white_check_mark: **[Push](https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#push-events)**                    |                               | Occurs when you push a commit to the repository.                      |
| :white_check_mark: **[Tag](https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#tag-push-events)**                 |                               | Occurs when you push a tag to the repository.                         |
| :white_check_mark: **[Issue](https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#issue-events)**                  | :arrow_heading_down:          | Occurs when an issue is opened, closed, reopened,...etc.              |
|                                                                                                                                        | :white_check_mark: Default    | Occurs when testing the default issue on editing the webhook.         |
|                                                                                                                                        | :white_check_mark: Open       | Occurs when an issue is opened.                                       |
|                                                                                                                                        | :white_check_mark: Close      | Occurs when an issue is closed.                                       |
|                                                                                                                                        | :white_check_mark: Reopen     | Occurs when an issue is reopened.                                     |
|                                                                                                                                        | :white_check_mark: Update     | Occurs when an issue is updated.                                      |
| :white_check_mark: **[Confidential Issue](https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#issue-events)**     |                               | Occurs when testing confidential issues on editing the webhook.       |
| :white_check_mark: **[Note (Comment)](https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#note-events)**          | :arrow_heading_down:          | Occurs when a note is created, updated, deleted,...etc.               |
|                                                                                                                                        | :white_check_mark: Commit     | Occurs when a note is created on a commit.                            |
|                                                                                                                                        | :white_check_mark: Merge      | Occurs when a note is created on a merge request.                     |
|                                                                                                                                        | :white_check_mark: Issue      | Occurs when a note is created on an issue.                            |
|                                                                                                                                        | :white_check_mark: Snippet    | Occurs when a note is created on a snippet.                           |
| :white_check_mark: **[Merge Request](https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#merge-request-events)**  | :arrow_heading_down:          | Occurs when a merge request is opened, closed, merged,...etc.         |
|                                                                                                                                        | :white_check_mark: Default    | Occurs when testing the default merge request on editing the webhook. |
|                                                                                                                                        | :white_check_mark: Open       | Occurs when a merge request is opened.                                |
|                                                                                                                                        | :white_check_mark: Close      | Occurs when a merge request is closed.                                |
|                                                                                                                                        | :white_check_mark: Reopen     | Occurs when a merge request is reopened.                              |
|                                                                                                                                        | :white_check_mark: Update     | Occurs when a merge request is updated.                               |
|                                                                                                                                        | :white_check_mark: Approved   | Occurs when a merge request is approved.                              |
|                                                                                                                                        | :white_check_mark: Unapproved | Occurs when a merge request is unapproved.                            |
|                                                                                                                                        | :white_check_mark: Approval   |                                                                       |
|                                                                                                                                        | :white_check_mark: Unapproval |                                                                       |
|                                                                                                                                        | :white_check_mark: Merge      | Occurs when a merge request is merged.                                |
| :white_check_mark: **[Wiki Page](https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#wiki-page-events)**          | :arrow_heading_down:          | Occurs when a wiki page is created, updated, deleted,...etc.          |
|                                                                                                                                        | :white_check_mark: Create     | Occurs when a wiki page is created.                                   |
|                                                                                                                                        | :white_check_mark: Update     | Occurs when a wiki page is updated.                                   |
|                                                                                                                                        | :white_check_mark: Delete     | Occurs when a wiki page is deleted.                                   |
| :white_check_mark: **[Pipeline](https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#pipeline-events)**            |                               | Occurs when a pipeline is running, success, failed,...etc.            |
| :white_check_mark: **[Job](https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#job-events)**                      |                               | Occurs when a job is creating, pending, running, success,...etc.      |
| :white_check_mark: **[Deployment](https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#deployment-events)**        |                               | Occurs when a deployment is handled.                                  |
| :white_square_button: **[Group Member](https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#group-member-events)** |                               | Occurs when a group member is added, updated, deleted,...etc.         |
| :white_square_button: **[Subgroup](https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#subgroup-events)**         |                               | Occurs when a subgroup is added, updated, deleted,...etc.             |
| :white_check_mark: **[Feature Flag](https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#feature-flag-events)**    |                               | Occurs when a feature flag is handled.                                | 
| :white_check_mark: **[Release](https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#release-events)**              | :arrow_heading_down:          | Occurs when a release is created, updated, deleted,...etc.            |
|                                                                                                                                        | :white_check_mark: Create     | Occurs when a release is created.                                     |
|                                                                                                                                        | :white_check_mark: Update     | Occurs when a release is updated.                                     |
|                                                                                                                                        | :white_check_mark: Delete     | Occurs when a release is deleted.                                     |
| :white_square_button: **[Emojis](https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#emoji-events)**              |                               | Occurs when an emoji is created, updated, deleted,...etc.             |

:::tip[Status Legend]

- :arrow_heading_down: This event has actions that can be notified.
- :white_check_mark: This event/action is available to be notified.
- :white_square_button: This event/action doesn't have blade view files to notify yet.

:::

The tool can notify you about the events and actions listed above. If you want to receive notifications about other events, please open an issue on the [GitHub repository](https://github.com/cslant/laravel-telegram-git-notifier).
