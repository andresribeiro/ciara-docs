# Server Updates

## Unattended Upgrades

To ensure your Operational System stays up-to-date, Ciara configures `unattended-upgrades`. If you want, you can disable these automatic updates:

::: code-group
```json [ciara.config.json]
{
  "updates": {
    "reboots": {
      "enabled": false
    }
  }
}
```
:::

## Kernel Upgrades

Kernel upgrades requires a reboot on the server. You can customize when these reboots should occur in your `ciara.config.json`:

::: code-group
```json [ciara.config.json]
{
  "updates": {
    "reboots": {
      "enabled": true,
      "time": "03:00"
    }
  }
}
```
:::

Ciara does not utilize live kernel patching solutions like [kpatch](https://github.com/dynup/kpatch) because it does not support `arm64` and, [as per docs](https://github.com/dynup/kpatch/blob/master/README.md):

> "Kernel crashes, spontaneous reboots, and data loss may occur"

If you require high availability, please refer to our section on [High Availability](/high-availability).

## Major Operational System Upgrades

Ciara does not perform major Operational System upgrades (e.g., upgrading from Debian 11 to Debian 12). For such significant updates, we recommend creating a new server with the desired updated OS from scratch and then setting up your application using `ciara deploy`.
