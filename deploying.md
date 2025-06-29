# Deploying

No previous configuration on your servers is required.

## Dockerfile

Your apps are deployed with Docker, so you should create an Dockerfile at the root of your project. Ciara will use this Dockerfile to build an image and deploy to your servers.

## First deployment

All deployment-related configurations are managed within the `ciara.config.json` file located in the root of your project.

Before making your first deploy, you should manually connect to your server via SSH at least once.  This is to add the server's host key to your local `known_hosts` file, preventing "Host key verification failed" errors during deployment.

To make your first deploy, run:

```bash
ciara deploy
```

## Subsequent deployments

For deploying a new version of your app, just run:

```bash
ciara deploy
```

## Updating Configurations

To update anything on your deployment, modify your `ciara.config.json` and then run:

```bash
ciara deploy
```

Ciara will then read your `ciara.config.json` file and automatically execute all necessary steps to update your application based on the new configuration.
