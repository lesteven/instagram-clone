import { query } from '../db/dbQueries';
import { turnToParamsArr, valuesPlaceholder } from './queryHelpers';

const debug = require('debug')('http');

const table = 'users.credentials';

export const userQueries = (sqlStr, keys) => (data) => {
  const params = turnToParamsArr(keys, data);
  return query(sqlStr, params);
};

export const generateSql = (table, insertKeys) => {

  debug('insert keys!!', insertKeys);
  const placeholder = valuesPlaceholder(insertKeys);
  const insert = `INSERT INTO ${table}(${insertKeys})`;
  const values = `VALUES${placeholder} RETURNING *`;
  const insertSql = `${insert} ${values}`;
  return insertSql;
};

const insert = (table, insertKeys) => (data) => {
  const insertSql = generateSql(table, insertKeys);
  const params = turnToParamsArr(insertKeys, data);

  debug(insertSql);
  debug(params);

  return query(insertSql, params);
};

const selectSql = 'SELECT * FROM users.credentials WHERE email = $1';
export const findUser = userQueries(selectSql, 'email');


const insertKeys = 'email,name,username,password';
export const insertUser = insert(table, insertKeys);
