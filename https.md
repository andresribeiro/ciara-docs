# HTTPS

Ciara automates the setup and management of HTTPS/SSL for your applications using [Caddy](https://caddyserver.com/). You don't need to manually configure certificates or worry about their renewal.

For Caddy to automatically serve HTTPS for your domain, you must ensure your domain is correctly pointed to your server's IP address. Ciara will then handle the rest during deployment, setting up Caddy to serve your application with valid SSL certificates.

All you need to do (besides DNS configuration), is to set your domain on `ciara.config.json`:

```json
{
  "proxy": {
    "domains": ["example.com"]
  }
}
```

## Custom caddy configuration

If you require more advanced Caddy configurations, you can provide a custom [Caddyfile](https://caddyserver.com/docs/caddyfile-tutorial). This file's path is specified in your `ciara.config.json`. This is optional; if not provided, Ciara will generate a default Caddyfile for automatic HTTPS.

```json
{
  "proxy": {
    "caddyfile": ["./caddyfile"]
  }
}
```

If you provide a custom caddyfile, any other proxy property, like `domains`, will be ignored. You will need to configure these properties directly within your custom Caddyfile.
