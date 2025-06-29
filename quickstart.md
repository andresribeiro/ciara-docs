# Quickstart

Let's get you deploying with Ciara.

## Installation

To use Ciara, you need to have [Bun](https://bun.sh) installed on your system. Once Bun is installed, install the Ciara CLI globally by running:

```bash
npm install -g ciara-deploy
```

## Initializing a project

On your project root, run the following command on your terminal:

```bash
ciara init
```

**Output**

```
✔ What is your app name? my-website
✔ What is the IP address of the server? 94...
✔ Which port is your application running on? 3000
✔ Would you like to set up a domain? Yes
✔ Enter your domain: example.com
ciara.config.json created.
```

This command will create an `ciara.config.json` on your project root. We talk more about this file on the next section.
