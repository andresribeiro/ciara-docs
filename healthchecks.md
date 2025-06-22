# Healthchecks

Ciara allows you to configure healthchecks for your applications to ensure your deployment was successfull.

You can define health check parameters in your `ciara.config.json` file. Here's an example:

```json
{
  "healthchecks": [
    {
      "path": "/health",
      "interval": 5,
      "timeout": 3,
      "retries": 5
    }
  ]
}

```

- `path`: The HTTP path that Ciara will probe to check the application's health. It's a GET request.
- `interval`: The time, in seconds, between health check attempts.
- `timeout`: The maximum time, in seconds, Ciara will wait for a response from the health check path.
- `retries`: The number of consecutive failed health checks after which Ciara will consider the application unhealthy and throw a deployment error.
