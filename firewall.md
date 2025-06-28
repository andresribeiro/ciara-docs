# Firewall

## Inbound

Ciara drops by default all inbound traffic except for ports `80` (HTTP) and `443` (HTTPS). These ports are always open and this cannot be changed. To allow additional ports, configure them in your `ciara.config.json`:

::: code-group
```json [ciara.config.json]
{
  "firewall": {
    "inbound": [
      {
        "port": 22,
        "allow": "*",
        "protocols": ["tcp"]
      },
      {
        "port": 3000,
        "allow": "*",
        "protocols": ["tcp", "udp"]
      }
    ]
  }
}
```
:::

> <Badge type="warning" text="Important" /> When you run `ciara init`, a firewall rule is added to allow inbound traffic on port 22 from any IP. If you remove this rule, you might be locked out from your server as you might not be able to connect to it via SSH.

## Restrict to specific IPs

> Currently only IPv4 is supported.

If you wish to allow traffic only from specific IPs, you can pass an array of IPs for `allow`:

::: code-group
```json [ciara.config.json]
{
  "firewall": {
    "inbound": [
      {
        "port": 3000,
        "allow": ["10.0.0.2", "10.0.0.3"],
        "protocols": ["tcp"]
      }
    ]
  }
}
```
:::

## Outbound

Ciara allows all outbound traffic.
