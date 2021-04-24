# WIP: Node Typscript boilerplate

This is a personal project used as an example for projects using node and typescript.

This example is an implementation of an api with websockets in order to maintain the sync of a chat.

## Used tools

| Responsability         | What          |
| ---------------------- | ------------- |
| TS Spec                | ES6           |
| Package Manager        | yarn          |
| Process Managament     | PM2           |
| Code Standard          | ESLint        |
| Code Editor Standard   | editorconfig  |
| Code Style             | Prettier      |
| Database               | Postgres      |
| Database manager       | typeorm       |
| HTTP Server            | express       |
| HTTP Custom Validation | Joi           |
| HTML Template Engine   | ejs           |
| Socket Server          | socket.io     |
| CronJobs               | cron          |
| Logs                   | TODO: Winston |
| Documentation          | TODO: redoc   |
| Test Suit              | TODO: ?       |
| Custom error Handler   | TODO: ?       |

## TODO list

```sh
[ ] Add api documentation (redoc)
[ ] Add custom error handlers
[ ] Add logger service with external transporter
[ ] Add pm2
[ ] Add test env
[ ] Add db seeds
```

## Dev env

To have a better development experience, I recommend using vscode with the `eslint` and `prettier` plugins installed.
Run the server running `yarn dev`

## Running Instructions

To run this project you should have a postgres db created named as `nodets` and than run `yarn typeorm migration:run` to start db.

To run the application through static `/public` files, you need to have data in `settings` table, you can do it calling HTTP POST to route `/settings` (available on `docs/node-ts.postman_collecion.json`) or insert directly to db. (username column need to be `admin`)

To access the application as a client access `http://localhost:3000/pages/client`

To access the application as a client access `http://localhost:3000/pages/admin`

### Utility scripts

```sh
yarn typeorm {command}                            // typeorm cli
yarn typeorm migration:create -n {MigrationName}  // generate new db migration file
yarn typeorm migration:run                        // run latest db migration
```

PS: Don't care about code inside `/public`, it's just a functional socket.io examples, this project is focused on the backend.
