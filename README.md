# mern-ts-starter
This is MERN Typescript Starter, to get started install packages

```
yarn
cd frontend && yarn
```

For Database, I write docker configuration file which will create container for mongodb database. You can install mongodb locally or use Atlas. If you're not gonna use docker container for database, remove `docker-compose.yaml`


There's file name `.env_example`, rename it to `.env` and write your own values in global variables.

```
# To Start Server
yarn run server
# To Start Client
yarn run client
```