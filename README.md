# Discord Message ✉️

Simply sends a message to Discord.


## Simple usage

```yaml
name: Notify Discord
uses: jackall3n/discord-message@v1.7
with:
  webhookUrl: ${{ secrets.DISCORD_WEBHOOK_URL }}
  message: "Hello, from Github"
```

## On Success

```yaml
jobs:
  job-name:
    steps:
      - name: Notify Discord
        if: success()
        uses: jackall3n/discord-message@v1.7
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
        uses: jackall3n/discord-message@v1.7
        with:
          webhookUrl: ${{ secrets.DISCORD_WEBHOOK_URL }}
          message: "Hello, from Github"
```