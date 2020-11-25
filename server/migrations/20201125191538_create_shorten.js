exports.up = function (knex) {
  return knex.schema.raw(`
    CREATE FUNCTION shorten (long_url text, short_id text)
        RETURNS url
        AS $$
    DECLARE
        link url;
    BEGIN
        INSERT INTO url (short_id, long_url)
            VALUES (short_id, long_url)
        RETURNING
            * INTO link;
        RETURN link;
    END;
    $$
    LANGUAGE plpgsql
    VOLATILE;`);
};

exports.down = function (knex) {};
