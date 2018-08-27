

create TABLE users.followers (
  id SERIAL PRIMARY KEY,
  username SERIAL REFERENCES users.credentials (id),
  follower SERIAL REFERENCES users.credentials (id),
);


CREATE UNIQUE INDEX followers_idx ON users.followers USING btree(id);
