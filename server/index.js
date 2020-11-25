const express = require("express");
const { postgraphile } = require("postgraphile");
const Pool = require("pg").Pool;
const app = express();
const config = require("./config");

const pool = new Pool({
  connectionString: config.PG_CONNECTION_STRING,
});

app.get("/s/:shortId", (req, res) => {
  const shortId = req.params.shortId;
  pool.query(
    `select * from url where short_id='${shortId}'`,
    (error, result) => {
      const url = result.rows[0];

      if (url) {
        res.redirect(url.long_url);
      } else {
        res.sendStatus(404);
      }
    }
  );
});

app.use(
  postgraphile(
    process.env.DATABASE_URL || config.PG_CONNECTION_STRING,
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
