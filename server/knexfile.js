// Update with your config settings.
const config = require("./config");

module.exports = {
  development: {
    client: "postgresql",
    connection: config.PG_CONNECTION_STRING,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
