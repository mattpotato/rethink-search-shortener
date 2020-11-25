exports.up = function (knex) {
  return knex.schema.raw(`
      CREATE FUNCTION search (query text)
        RETURNS SETOF person
        AS $$
        SELECT
            *
        FROM
            person
        WHERE
            document_with_idx @@ plainto_tsquery(query || ':*')
        $$
        LANGUAGE sql
        STABLE;
  `);
};

exports.down = function (knex) {};
