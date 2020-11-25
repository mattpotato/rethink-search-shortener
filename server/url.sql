CREATE TABLE url (
    short_id varchar(10) PRIMARY KEY NOT NULL,
    long_url text NOT NULL,
    created_at timestamp DEFAULT CURRENT_TIMESTAMP
);

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
VOLATILE;

