# Firewall

## Inbound

By default, Ciara drops all inbound traffic except for port `22` (SSH), `80` (HTTP) and `443` (HTTPS). **These ports are always open and this cannot be changed.**

To allow additional ports, configure them in your `ciara.config.json` file as follows:

::: code-group
```json [ciara.config.json]
{
  "firewall": {
    "inbound": [
      { "port": 3000, "allow": "*" }
    ]
  }
}
```
:::

`allow` can be `"*"` to accept traffic from any IP. If you wish to allow traffic only from specific IPs, you can pass an array of IPs:

::: code-group
```json [ciara.config.json]
{
  "firewall": {
    "inbound": [
      { "port": 3000, "allow": ["10.0.0.2", "10.0.0.3"] }
    ]
  }
}
```
:::

## Outbound

Ciara allows all outbound traffic.
