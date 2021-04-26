# WIP: Node Typscript boilerplate

This is a personal project used as an example for node and typescript projects.

This example is an implementation of an api with websockets in order to maintain the sync of a chat.

## Used tools

| Responsability         | What         |
| ---------------------- | ------------ |
| TS Spec                | ES6          |
| Package Manager        | yarn         |
| Process Managament     | PM2          |
| Code Standard          | ESLint       |
| Code Editor Standard   | editorconfig |
| Code Style             | Prettier     |
| Database               | Postgres     |
| Database manager       | typeorm      |
| HTTP Server            | express      |
| HTTP Custom Validation | Joi          |
| HTML Template Engine   | ejs          |
| Socket Server          | socket.io    |
| CronJobs               | cron         |
| Logs                   | Winston      |
| Documentation          | Redoc        |
| Test Suit              | TODO: ?      |
| Custom error Handler   | TODO: ?      |

## TODO list

```sh
[ ] Add custom error handlers
[ ] Add pm2
[ ] Add test env
[ ] Create docs for all routes
```

## Running Instructions

To have a better development experience, I recommend using vscode with the `eslint` and `prettier` plugins installed.

### API

To run this project you should have a postgres db created named as `nodets`.
Run:

```sh
  yarn typeorm migration:run // start db schema
  yarn typeorm:seed          // run initial db data
  yarn dev                   // run application
  yarn dev:worker            // run workers
  yarn docs:build            // build new docs based on public/docs/redoc/index.yml path
```

### Documentation

You can access the api docs on `http://localhost:3000/docs`

### Websockets Preview

To access the application as a client access `http://localhost:3000/preview/client`

To access the application as a admin access `http://localhost:3000/preview/admin`

PS: Don't care about code inside `/public`, it's just a functional socket.io examples, this project is focused on the backend.

### Have fun (=
