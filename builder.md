# Builder

Ciara builds your application on a remote server. The default build server is the IP address you entered while running `ciara init`.

### Build Architecture <Badge type="warning" text="Important" />

If you are deploying on multiple servers, all of them should have the same architecture. This means that all your servers should be either `amd64` or `arm64`. You can't mix both of them.

> Ciara detects the architecture of the builder server and creates a build only for this architecture, as [QEMU](https://docs.docker.com/build/building/multi-architecture/#qemu) builds are very slow.

## Custom Builder

To configure a custom remote builder server:

::: code-group
```json [ciara.config.json]
{
  "builder": {
    "host": "94..." // Your server builder IP
  }
}
:::

## Local builder

If you want to build your application on your computer:

::: code-group
```json [ciara.config.json]
{
  "builder": {
    "host": "local"
  }
}
:::

<Badge type="warning" text="Important" /> If you are building locally, your server(s) should have the same architecture of your local computer. It means that if your computer is `amd64`, all your servers should also be `amd64`.
