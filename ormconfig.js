module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'nodets',
  migrations: ['./src/database/migrations/**.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
  entities: ['./src/entities/**.ts'],
}
