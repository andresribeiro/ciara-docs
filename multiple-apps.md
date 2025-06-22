# Multiple Apps

You can run multiple apps on a single server. For this, you need to provide a custom Caddyfile, as documented on [Proxy](/proxy). This Caddyfile needs to be the same across your apps running on the same server.

Here's an example of a Caddyfile for multiple applications.

::: code-group
``` [Caddyfile]
yourfirstapp.com {
    reverse_proxy localhost:5000
}

yoursecondapp.com {
    reverse_proxy localhost:5001
}
```
