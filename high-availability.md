# High Availability (HA)

Ciara allows you to set up your servers in multiple locations to achieve high availability. To distribute traffic among these servers, you will need to place a load balancer in front of your Ciara deployments.

## Caddy and Downtime

It's important to note that Caddy upgrades, the proxy used by Ciara, require brief periods of downtime. When Caddy is updated, the proxy will temporarily stop and restart, which can lead to a short interruption in service.
