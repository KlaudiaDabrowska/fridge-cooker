const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "fridge-cooker"),
      user: env("DATABASE_USERNAME", "fridge-cooker-user"),
      password: env("DATABASE_PASSWORD", "test"),
    },
    debug: false,
  },
});
