
CREATE TABLE users.credentials (
  id SERIAL PRIMARY KEY,
  email VARCHAR(254) UNIQUE, 
  name VARCHAR(70),
  username VARCHAR(70) UNIQUE,
  password TEXT,
  created_at timestamp default current_timestamp
);

CREATE UNIQUE INDEX email_idx ON users.credentials USING btree(email);
CREATE UNIQUE INDEX username_idx ON users.credentials USING btree(username);

CREATE UNIQUE INDEX id_idx ON users.credentials USING btree(id);
