# Creating a Server

## Operating System

Ciara requires that you use Debian as your Operating System.

## Configuration

No prior configuration on your server is required. In fact, we recommend that you provide Ciara a server “as is”. In other words, the recommendation is that you create a server and don't modify anything.

## SSH User

SSH connections are always made with `root` user as Ciara needs to perform system-level operations.

## SSH Private Key

Ciara connects to your server using SSH private keys. Connections via password are not supported and will not be implemented for security reasons. If you have a custom path for your SSH Private Key, you can configure it on `ciara.config.json`:

::: code-group
```json [ciara.config.json]
{
  "ssh": {
    "privateKeyPath": "/home/users/myuser/.ssh/id_rsa"
  }
}
```
:::

> <Badge type="warning" text="Warning" /> Ciara disables SSH password logins on your server for enhanced security after a successful connection.

## SSH Port

If your server is running SSH on a custom port, you can configure it on `ciara.config.json`:

::: code-group
```json [ciara.config.json]
{
  "servers": [
		{
			"ip": "94...",
			"port": 1010 // Your custom SSH port
		}
	]
}
```
