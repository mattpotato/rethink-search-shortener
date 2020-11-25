exports.up = function (knex) {
  return knex.schema.raw(`
    CREATE TABLE person (
      id INT,
      first_name VARCHAR(50),
      last_name VARCHAR(50),
      job_title VARCHAR(50),
      country VARCHAR(50),
      email VARCHAR(50)
    );

    ALTER TABLE person
      ADD COLUMN document_with_idx tsvector;

    CREATE INDEX document_idx ON person USING GIN (document_with_idx);
  
    `);
};

exports.down = function (knex) {
  return knex.schema.dropTable("people");
};
