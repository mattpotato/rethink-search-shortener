const express = require("express");
const { postgraphile } = require("postgraphile");
const Pool = require("pg").Pool;
const app = express();

const pool = new Pool({
  connectionString: "postgres://postgres:postgres@localhost:5432/dbsearch",
});

app.get("/s/:shortId", (req, res) => {
  const shortId = req.params.shortId;
  pool.query(
    `select * from url where short_id='${shortId}'`,
    (error, results) => {
      if (error) {
        res.status(404).json({ error: 404 });
      }
      const url = results.rows[0];
      if (url) {
        res.redirect(url.long_url);
        return;
      }
      res.status(404).json({ error: "url does not exist" });
    }
  );
});

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
