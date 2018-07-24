CREATE SCHEMA users;

CREATE TABLE users.credentials (
  id SERIAL PRIMARY KEY,
  email VARCHAR(254) UNIQUE, 
  name VARCHAR(70),
  username VARCHAR(70) UNIQUE,
  password TEXT,
  created_at DATE
);

CREATE UNIQUE INDEX email_idx ON users.credentials USING btree(email);
