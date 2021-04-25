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
| Documentation          | TODO: redoc  |
| Test Suit              | TODO: ?      |
| Custom error Handler   | TODO: ?      |

## TODO list

```sh
[ ] Add api documentation (redoc)
[ ] Add custom error handlers
[ ] Add pm2
[ ] Add test env
```

## Running Instructions

To have a better development experience, I recommend using vscode with the `eslint` and `prettier` plugins installed.

### API

To run this project you should have a postgres db created named as `nodets`, run `yarn typeorm migration:run` and `yarn typeorm:seed` to start db, and then run `yarn dev`.

### Client

To access the application as a client access `http://localhost:3000/pages/client`

To access the application as a admin access `http://localhost:3000/pages/admin`

PS: Don't care about code inside `/public`, it's just a functional socket.io examples, this project is focused on the backend.

### Have fun (=
