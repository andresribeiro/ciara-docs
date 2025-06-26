# Databases/Plugins/Add-ons

Ciara currently does not support databases or other accessory services (often referred to as plugins or add-ons).

The recommended approach for deploying databases and other services is to connect to your server via SSH and run them using Docker. This provides flexibility and allows you to manage your database instances independently.

Below are some basic Docker examples for common databases:

## Postgres
```bash
docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d --restart always postgres
```

## MySQL

```bash
docker run --name my-mysql -e MYSQL_ROOT_PASSWORD=mysecretpassword -p 3306:3306 -d --restart always mysql
```

## MongoDB

```bash
docker run --name my-mongo -p 27017:27017 -d --restart always mongo
```

## Redis

```bash
docker run --name my-redis -p 6379:6379 -d --restart always redis
```
