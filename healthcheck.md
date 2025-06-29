# Healthcheck

Ciara allows you to configure an healthcheck for your applications to ensure your deployment was successful.

You can define it in your `ciara.config.json`:

::: code-group
```json [ciara.config.json]
{
  "healthcheck": {
    "path": "/health",
    "interval": 5,
    "timeout": 3,
    "retries": 5
  }
}
```
:::

- `path`: The HTTP path that Ciara will probe to check the application's health. It's a GET request.
- `interval`: The time, in seconds, between healthcheck attempts.
- `timeout`: The maximum time, in seconds, Ciara will wait for a response from the healthcheck path.
- `retries`: The number of consecutive failed healthchecks after which Ciara will consider the application unhealthy and throw a deployment error.
