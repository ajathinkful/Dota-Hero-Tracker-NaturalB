// knexfile.js

module.exports = {
  development: {
    client: 'pg',
    connection: {
      connectionString: 'postgres://ihumhuxa:humX4DD-bJGv2Grri4ZgOIOapyYMDbOK@isilo.db.elephantsql.com/ihumhuxa',
      ssl: {
        rejectUnauthorized: false,
      },
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
};
