# Firewall

## Inbound

By default, Ciara drops all inbound traffic except for port `22` (SSH) and `5000` (your app). **These ports are always open and this cannot be changed.**

To allow additional ports, configure them in your `ciara.config.json` file as follows:

```json
{
  "firewall": {
    "inbound": [
      { "port": 5000, "allow": "*" }
    ]
  }
}
```

Allow can be `"*"` to accept traffic from any IP. If you wish to allow traffic only from specific IPs, you can pass an array of IPs:

```json
{
  "firewall": {
    "inbound": [
      { "port": 5000, "allow": ["10.0.0.2", "10.0.0.3"] }
    ]
  }
}
```

## Outbound

Ciara allows all outbound traffic.
