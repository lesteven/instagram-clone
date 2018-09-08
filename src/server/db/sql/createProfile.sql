

CREATE TABLE users.profile (
  id SERIAL PRIMARY KEY,
  username SERIAL REFERENCES users.credentials (id),
  userimage VARCHAR(254),
  bio VARCHAR(254),
  posts INTEGER DEFAULT 0,
  followers INTEGER DEFAULT 0,
  following INTEGER DEFAULT 0
);


CREATE UNIQUE INDEX profile_idx ON users.profile USING btree(id);
