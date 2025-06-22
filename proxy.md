## HTTP Port

You should define on which port your app is running on `ciara.config.json`. You can't use 80 or 443, as this ports are already used by the proxy.

::: code-group
```json [ciara.config.json]
{
  "proxy": {
    "port": 5000
  }
}
```
:::

## HTTPS

Ciara automates the setup and management of HTTPS/SSL for your applications using [Caddy](https://caddyserver.com/). You don't need to manually configure certificates or worry about their renewal.

For Caddy to automatically serve HTTPS for your domain, you must ensure your domain is correctly pointed to your server's IP address. Ciara will then handle the rest during deployment, setting up Caddy to serve your application with valid SSL certificates.

All you need to do (besides DNS configuration), is to set your domain on `ciara.config.json`:

::: code-group
```json [ciara.config.json]
{
  "proxy": {
    "domains": ["example.com"]
  }
}
```
:::

## Custom Proxy Configuration

If you require more advanced Caddy configurations, you can provide a custom [Caddyfile](https://caddyserver.com/docs/caddyfile-tutorial). This file's path is specified in your `ciara.config.json`. This is optional; if not provided, Ciara will generate a default Caddyfile for automatic HTTPS.

::: code-group
```json [ciara.config.json]
{
  "proxy": {
    "caddyfile": "./caddyfile"
  }
}
```
:::

If you provide a custom caddyfile, any other proxy property, like `domains`, will be ignored. You will need to configure these properties directly within your custom Caddyfile.

## Updating Proxy Configuration

To change a proxy configuration, whenever you are using a custom Caddyfile or not, you should run the following command:

```bash
ciara proxy update
```

This command will restart Caddy, which will result in a brief period of downtime.

## Upgrading Caddy

To upgrade Caddy to the latest version, run on your terminal:

```bash
ciara proxy upgrade
```

This will result in a brief period of downtime.
