# Deploying

> No previous configuration on your servers is required.

## First deployment

All deployment-related configurations are managed within the `ciara.config.json` file located in the root of your project.

All you need to do is run the following command in your terminal:

```bash
ciara deploy
```

## Subsequent deployments

For deploying a new version of your app, all you need to do is run the following command in your terminal:

```bash
ciara deploy
```

## Updating configurations

Whenever you are updating your firewall rules, environment variables or any other configuration, all you need to do is run the following command in your terminal:

```bash
ciara deploy
```

Ciara will then read your `ciara.config.json` file and automatically execute all necessary steps to deploy or update your application based on the new configuration.
