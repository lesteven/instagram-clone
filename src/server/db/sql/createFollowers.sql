

CREATE TABLE users.followers (
  id SERIAL PRIMARY KEY,
  username INTEGER REFERENCES users.credentials (id) ON DELETE CASCADE,
  follower INTEGER REFERENCES users.credentials (id) ON DELETE CASCADE
);


CREATE UNIQUE INDEX followers_idx ON users.followers USING btree(id);
