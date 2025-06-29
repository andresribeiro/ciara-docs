# Server Updates

To ensure your Operating System stays updated with the latest security patches, Ciara configures `unattended-upgrades` for you.

## Server Reboots

Some security updates requires a reboot on the server. You can disable automatic reboots or customize when these reboots should occur in your `ciara.config.json`:

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

Ciara does not utilize live kernel patching solutions like [kpatch](https://github.com/dynup/kpatch) because, [as per docs](https://github.com/dynup/kpatch/blob/master/README.md):

> "Kernel crashes, spontaneous reboots, and data loss may occur!"

If you require high availability, please refer to our section on [High Availability](/high-availability).

## Major Updates

Ciara does not configure major updates (e.g., upgrading from Debian 11 to Debian 12, or non-security dependencies updates).
