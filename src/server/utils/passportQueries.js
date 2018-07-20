import { query } from '../db/dbQueries';

const debug = require('debug')('http');


export const userQueries = (string, key) => data => {
  debug('inside userQueries!', data[key]);
  debug(data);
  return query(string, [data[key]]);
}

const selectUser = 'SELECT * FROM users.credentials WHERE email = $1';
export const findUser = userQueries(selectUser, 'email');
