const express = require("express");
const { postgraphile } = require("postgraphile");

const app = express();

app.use(
  postgraphile(
    process.env.DATABASE_URL ||
      "postgres://postgres:postgres@localhost:5432/dbsearch",
    "public",
    {
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true,
      enableCors: true,
    }
  )
);

app.listen(process.env.PORT || 5000);
