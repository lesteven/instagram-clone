import { query } from '../db/dbQueries';
import { turnToParamsArr } from './queryHelpers';
import generateSqlInsert from './generateSql';

const debug = require('debug')('http');

const userTable = 'users.credentials';

export const userQueries = (sqlStr, keys) => (data) => {
  const params = turnToParamsArr(keys, data);
  return query(sqlStr, params);
};


const insert = (table, insertKeys) => (data) => {
  const insertSql = generateSqlInsert(table, insertKeys);
  const params = turnToParamsArr(insertKeys, data);

  debug(insertSql);
  debug(params);

  return query(insertSql, params);
};

const selectSql = 'SELECT * FROM users.credentials WHERE email = $1';
export const findUser = userQueries(selectSql, 'email');


const insertKeys = 'email,name,username,password';
export const insertUser = insert(userTable, insertKeys);
