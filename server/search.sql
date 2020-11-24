ALTER TABLE people
    ADD COLUMN document_with_idx tsvector;

UPDATE
    people
SET
    document_with_idx = to_tsvector(first_name || ' ' || last_name || ' ' || job_title || ' ' || country || ' ' || email);

CREATE INDEX document_idx ON people USING GIN (document_with_idx);

CREATE FUNCTION search (query text)
    RETURNS SETOF people
    AS $$
    SELECT
        *
    FROM
        people
    WHERE
        document_with_idx @@ to_tsquery(query || ':*')
$$
LANGUAGE sql
STABLE;

