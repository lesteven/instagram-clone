import { pool } from '../db/dbQueries';

// const debug = require('debug')('http');

const table = 'users.credentials';

const findUserById = (id, done) => {
  const sql = `SELECT * FROM ${table} WHERE id = $1`;
  return pool.query(sql, [id], (err, res) => {
    const user = res.rows[0];
    // debug('findUserByID!', user);
    done(err, user);
  });
};

export default findUserById;
