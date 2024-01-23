# Discord Message ✉️

Simply sends a message to Discord.


## Simple usage

```yaml
name: Notify Discord
uses: jackall3n/discord-message@v2
with:
  webhookUrl: ${{ secrets.DISCORD_WEBHOOK_URL }}
  message: "Hello, from Github"
```


## Specify a username and avatar

```yaml
name: Notify Discord
uses: jackall3n/discord-message@v2
with:
  webhookUrl: ${{ secrets.DISCORD_WEBHOOK_URL }}
  message: "Hello, from Github"
  username: "Github"
  avatar: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
```

## On Success

```yaml
jobs:
  job-name:
    steps:
      - name: Notify Discord
        if: success()
        uses: jackall3n/discord-message@v2
        with:
          webhookUrl: ${{ secrets.DISCORD_WEBHOOK_URL }}
          message: "Hello, from Github"
```

## On Failure

```yaml
jobs:
  job-name:
    steps:
      - name: Notify Discord
        if: failure()
        uses: jackall3n/discord-message@v2
        with:
          webhookUrl: ${{ secrets.DISCORD_WEBHOOK_URL }}
          message: "Hello, from Github"
```

## On any failed job

```yaml
jobs:
  job-name:
    steps:
      - name: Notify Discord
        if: ${{ always() && contains(needs.*.result, 'failure') }}
        uses: jackall3n/discord-message@v2
        with:
          webhookUrl: ${{ secrets.DISCORD_WEBHOOK_URL }}
          message: "Hello, from Github"
```