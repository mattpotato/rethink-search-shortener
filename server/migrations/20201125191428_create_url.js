exports.up = function (knex) {
  return knex.schema.raw(
    `
    CREATE TABLE url (
      short_id varchar(10) PRIMARY KEY NOT NULL,
      long_url text NOT NULL,
      created_at timestamp DEFAULT CURRENT_TIMESTAMP
  );`
  );
};

exports.down = function (knex) {};
