# Proxy/HTTPS

## HTTP Port

You should define on which port your app is running:

::: code-group
```json [ciara.config.json]
{
  "proxy": {
    "port": 3000
  }
}
```
:::

Ciara's proxy automatically routes external traffic to your app on ports `80` (HTTP) and `443` (HTTPS). By default, HTTP requests will be redirected to HTTPS.

## HTTPS

Ciara automates the setup and management of HTTPS/SSL for your applications using [Caddy](https://caddyserver.com/). You don't need to manually configure certificates or worry about their renewal.

For Caddy to automatically serve HTTPS for your domain, you must ensure your domain is correctly pointed to your server's IP address. Besides DNS configuration, you need to set your domain on `ciara.config.json`:

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

If you require more advanced Caddy configurations, you can provide a custom [Caddyfile](https://caddyserver.com/docs/caddyfile-tutorial). This file's path is specified in your `ciara.config.json`. This is optional; if not provided, Ciara will generate a Caddyfile for you.

::: code-group
```json [ciara.config.json]
{
  "proxy": {
    "caddyfile": "./caddyfile"
  }
}
```
:::

If you provide a custom Caddyfile, any other proxy property, like `domains`, will be ignored. You will need to configure these properties directly within your custom Caddyfile.
