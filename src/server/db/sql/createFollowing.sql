

create TABLE users.following (
  id SERIAL PRIMARY KEY,
  username SERIAL REFERENCES users.credentials (id),
  following SERIAL REFERENCES users.credentials (id),
);


CREATE UNIQUE INDEX following_idx ON users.following USING btree(id);
