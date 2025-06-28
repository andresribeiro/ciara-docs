# Multiple Servers

Ciara can deploy your application on `N` servers. There's no limit on how many servers you can use. You can put all these servers behind a Load Balancer if you want to.

## Adding a New Server

If you wish to add another server to the pool of servers you have, update `servers` on `ciara.config.json`:

::: code-group
```json [ciara.config.json]
{
  "servers": [
		{
			"ip": "94...",
			"port": "22"
		},
		{
			"ip": "162...",
			"port": "22"
		}
	]
}
:::

Then run:

```bash
ciara deploy
```

<Badge type="warning" text="Important" /> Note that all your servers should have the same architecture. Check [Build Architecture](/builder.html#build-architecture) for more details.
