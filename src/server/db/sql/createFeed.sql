
CREATE TABLE users.feed (
  id SERIAL PRIMARY KEY,
  username INTEGER REFERENCES users.credentials (id) ON DELETE CASCADE,
  imgname VARCHAR(254),
  created_at DATE
);

CREATE UNIQUE INDEX feed_idx ON users.feed USING btree(id);
